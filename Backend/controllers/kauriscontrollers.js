function createcas(req, res) {
    let cas = require('../models/dbmodels');
    let newcas = cas ({
        CasName: req.body.CasName,
        DateDone: req.body.DateDone,
        CasDescription: req.body.CasDescription,
        done: req.body.done,
        createdAt: req.body.createdAt,
    });
  
    newcas.save()
    .then((savedcas) => {

        //send back the created DLUList
        res.json(savedcas);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readcass(req, res) {

    let cas = require("../models/dbmodels");

    cas.find({})
    .then((cas) => {
        res.status(200).json(cas);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readcas(req, res) { // Ne fonctionne pas - ERREUR 500

    let cas = require("../models/dbmodels");

    cas.findById({_id : req.params.id})
    .then((ca) => {
        res.status(200).json(ca);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updatecaslist(req, res) {

    let cas = require("../models/dbmodels");

    cas.findByIdAndUpdate({_id: req.params.id}, 
        {CasName : req.body.casName,
        Done : req.body.Done}, 
        {new : true})
    .then((updatedcas) => {
        res.status(200).json(updatedcas);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deletecas(req, res) {

    let cas = require("../models/dbmodels");

    cas.findOneAndRemove({_id : req.params.id})
    .then((deletedcas) => {
        res.status(200).json(deletedcas);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function donecas(req, res) {

    let cas = require("../models/dbmodels");

    cas.findByIdAndUpdate({_id: req.params.id}, 
        {done : true}, 
        {new : true})
    .then((updatedcas) => {
        res.status(200).json(updatedcas);
    }, (err) => {
        res.status(500).json(err);
    });

}

function undone(req, res) {

    let cas = require("../models/dbmodels");

    cas.findByIdAndUpdate({_id: req.params.id}, 
        {done : false}, 
        {new : true})
    .then((updatedcas) => {
        res.status(200).json(updatedcas);
    }, (err) => {
        res.status(500).json(err);
    });

}

module.exports.create = createcas;
module.exports.reads = readcass;
module.exports.read = readcas;
module.exports.delete = deletecas;
module.exports.update = updatecaslist;
module.exports.eaten = donecas;
module.exports.undone = undone;
