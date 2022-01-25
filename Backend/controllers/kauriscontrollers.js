function createDLUList(req, res) {
    let DLUList = require('../models/dlu');
    let newDLUList = DLUList ({
        ProductName: req.body.ProductName,
        BestBeforeDate : req.body.BestBeforeDate
    });
  
    newDLUList.save()
    .then((savedDLUList) => {

        //send back the created DLUList
        res.json(savedDLUList);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readDLUs(req, res) {

    let DLUList = require("../models/dlu");

    DLUList.find({})
    .then((DLUList) => {
        res.status(200).json(DLUList);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readDLUList(req, res) {

    let DLUList = require("../models/dlu");

    DLUList.findById({_id : req.params.id})
    .then((DLUList) => {
        res.status(200).json(DLUList);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readToEatWeek(req, res) {

    let DLUList = require("../models/dlu");

    DLUList.find({}).sort('-date').BestBeforeDate
    .then((DLUList) => {
        res.status(200).json(DLUList);
    }, (err) => {
        res.status(500).json(err);
    });

}

// Je ne suis pas parvenu à trouver la bonne manière d'effectuer le tri pour les produits à un mois 
function readToEatMonth(req, res) {

    let DLUList = require("../models/dlu");

    DLUList.find({
        //createdAt : 
           //  $gte, Date(2021, MM, DD),
           //   $lt, Date(2021, MM+1, DD),
        }).sort('date').BestBeforeDate
    .then((DLUList) => {
        res.status(200).json(DLUList);
    }, (err) => {
        res.status(500).json(err);
    });

}

function updateDLUList(req, res) {

    let DLUList = require("../models/dlu");

    DLUList.findByIdAndUpdate({_id: req.params.id}, 
        {ProductName : req.body.ProductName, 
        BestBeforeDate : req.body.BestBeforeDate}, 
        {new : true})
    .then((updatedDLUList) => {
        res.status(200).json(updatedDLUList);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteDLUList(req, res) {

    let DLUList = require("../models/dlu");

    DLUList.findOneAndRemove({_id : req.params.id})
    .then((deletedDLUList) => {
        res.status(200).json(deletedDLUList);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function eatenAlim(req, res) {

    let DLUList = require("../models/dlu");

    DLUList.findByIdAndUpdate({_id: req.params.id}, 
        {eaten : true}, 
        {new : true})
    .then((updatedDLUList) => {
        res.status(200).json(updatedDLUList);
    }, (err) => {
        res.status(500).json(err);
    });

}

function undone(req, res) {

    let DLUList = require("../models/dlu");

    DLUList.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedDLUList) => {
        res.status(200).json(updatedDLUList);
    }, (err) => {
        res.status(500).json(err);
    });

}

module.exports.create = createDLUList;
module.exports.reads = readDLUs;
module.exports.read = readDLUList;
module.exports.shouldEatWeek = readToEatWeek;
module.exports.shouldEatMonth = readToEatMonth;
module.exports.delete = deleteDLUList;
module.exports.update = updateDLUList;
module.exports.eaten = eatenAlim;
module.exports.undone = undone;
