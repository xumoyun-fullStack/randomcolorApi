const { GetRandomColor } = require("../controllers/ColorController");

const router = require("express").Router();

router.get("/", GetRandomColor)


module.exports = {
    path: "/",
    router
}