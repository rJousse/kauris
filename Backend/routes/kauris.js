//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/kauris');

//CREATE
router.post("/cas", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/cas", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/cas/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/cas/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/cas/:id", (req, res) => {
    
    controller.delete(req, res);

});

//Product has been eaten 
router.post("/cas/:id/done", (req, res) => {

    controller.done(req, res);

});

module.exports = router;