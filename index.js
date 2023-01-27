const express = require("express");
const { connectToMongoose } = require("./connect");
const app = express();
const port = 3000;

connectToMongoose("mongodb://localhost:27017/url-shortner").then(() => {
    console.log("Connected to MongoDB");
});

const urlRouter = require("./routes/url");
app.use(express.json());
app.use("/", urlRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
