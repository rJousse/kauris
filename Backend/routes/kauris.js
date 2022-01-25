//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/DLUList');

//CREATE
router.post("/DLU", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/DLULists", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/DLUList/:id", (req, res) => {
    
    controller.read(req, res);

});

//Show Products to eat before one week
router.get("/DLUList/:id", (req, res) => {

    controller.shouldEatWeek(req, res);
});

//Show Products to eat before one month
router.get("/DLUList/:id", (req, res) => {

    controller.shouldEatMonth(req, res);
});

//UPDATE
router.put("/DLUList/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/DLUList/:id", (req, res) => {
    
    controller.delete(req, res);

});

//Product has been eaten 
router.post("/DLUList/:id/eaten", (req, res) => {

    controller.eaten(req, res);

});

router.post("/DLUList/:id/undone", (req, res) => {

    controller.undone(req, res);

});

module.exports = router;