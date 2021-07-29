"use strict"

const express = require("express");

const { items } = require("./fakeDb");
const router = new express.Router();


/** GET /items: return list list of shopping items */
router.get("/", function (req, res, next) {
    return res.json({"items":items});
});

/** POST /items: accept JSON body, add item, and return it: */
router.post("/", function (req, res, next) {
    /* pull out name and price from body specifically, and use
     destructuring. This prevents everything from the body 
     getting into your database, which is a security issue. */

    const { name, price } = req.body;
    items.push({name, price});
    return res.json({"added":req.body});
});




module.exports = router;