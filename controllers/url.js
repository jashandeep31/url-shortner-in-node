const URL = require("../models/url");
const shortid = require("shortid");

async function genrateURL(req, res) {
    const body = req;
    console.log(body);
    if (!body.url) {
        return res.status(400).json({
            message: "URL is required",
        });
    }
    const shortId = shortid();
    await URL.create({
        shortId,
        redirectUrl: body.url,
        visitHistory: [],
    });
    return res.json({ id: shortId });
}

module.exports = {
    genrateURL,
};

async function genrateURL(req, res) {
    const body = req;
    console.log(body);
    if (!body.url) {
        return res.status(400).json({
            message: "URL is required",
        });
    }
    const shortId = shortid();
    await URL.create({
        shortId,
        redirectUrl: body.url,
        visitHistory: [],
    });
    return res.json({ id: shortId });
}
