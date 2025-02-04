const {nanoid} = require("nanoid");



async function handleGenerateNewShortURl (req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "url is required"})
    const shortID = nanoid(8);
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistoy:[],
    });

    return res.json({id: shortID});
}

module.exports = {
    handleGenerateNewShortURl
}