const express = require("express");
const router = express.Router();
const { Produktet } = require("../models");


router.get("/", async (req, res) => {
    const listaEProdukteve = await Produktet.findAll();
    res.json(listaEProdukteve);
});

router.post("/", async (req, res) => {
    const post = req.body;
    await Produktet.create(post);
    res.json(post);
});

module.exports = router;