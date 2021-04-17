const express = require('express');
const { isValidObjectId } = require('mongoose');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Pokemon } = require('../models/pokemon');

router.get('/', (req, res) => {
    Pokemon.find((err, docs) => {
        if (!err) { res.send(docs);}
        else { console.log('Error in retrieving Pokemon : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with that ID');
    Pokemon.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc);}
        else { console.log('There is no record with that ID : ' + JSON.stringify(err, undefined, 2));}
    })
});
router.post('/', (req, res) => {
    var poke = new Pokemon({
        natdex_num: req.body.natdex_num,
        name: req.body.name,
        height: req.body.height,
        weight: req.body.weight,
        type: req.body.type,
        ability: req.body.ability,
        dex_entry: req.body.dex_entry
    });
    poke.save((err, doc) =>{
        if (!err) { res.send(doc); }
        else {console.log('Error in saving Pokemon : ' + JSON.stringify(err, undefined, 2));}
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("No record with that ID");

    var poke = {
        natdex_num: req.body.natdex_num,
        name: req.body.name,
        height: req.body.height,
        weight: req.body.weight,
        type: req.body.type,
        ability: req.body.ability,
        dex_entry: req.body.dex_entry
    };
    Pokemon.findByIdAndUpdate(req.params.id, { $set: poke}, { new: true}, (err, doc) => {
        if (!err) { res.send(doc); }
        else {console.log('Error in Updating Pokemon : ' + JSON.stringify(err, undefined, 2));}
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("No record with that ID");
    Pokemon.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else {console.log('Error in Updating Pokemon : ' + JSON.stringify(err, undefined, 2));}
    });
});
module.exports = router;