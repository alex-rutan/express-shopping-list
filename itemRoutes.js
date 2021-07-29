const express = require("express");

const { items } = require("./fakeDb");
const router = new express.Router();

/** GET /items: return list list of shopping items */
router.get("/", function (req, res, next) {
    console.log("We made it!")
    return res.json({"items":items});
})

module.exports = router;