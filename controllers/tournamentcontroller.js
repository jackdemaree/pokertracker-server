var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../Models/user');
var TournamentModel = sequelize.import('../Models/tournament');
//var AuthTestModel = sequelize.import('../Models/authtest');

/*************************************
* GET ALL ITEMS FOR INDIVIDUAL USER
*************************************/
router.get('/getall', function (req, res) {
    var userid = req.user.id;

    TournamentModel
    //AuthTestModel
        .findAll({
            where: { owner: userid }
        })
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});

/*************************************
* POST SINGLE ITEM FOR INDIVIDUAL USER
*************************************/
router.post('/create', function (req, res) {
    var owner = req.user.id;
    // var authTestData = req.body.authtestdata.item;

    TournamentModel
    //AuthTestModel
        .create({
            // authtestdata: authTestData,
            owner: owner,
            // id: req.body.log.id,
            game: req.body.log.game,
            buyIn: req.body.log.buyIn,
            finish: req.body.log.finish
        })
        .then(
            function createSuccess(tournament) {
                res.json({
                    tournament: tournament
                });
            },
            function createError(err) {
                res.send(500, err.message);
            }
        );
});

/******************
* GET SINGLE ITEM FOR INDIVIDUAL USER
******************/
router.get('/:id', function(req, res) {
    var data = req.params.id;
    var userid = req.user.id;

    TournamentModel
        .findOne({
            where: { id: data, owner: userid }
        }).then(
            function findOneSuccess(data) {
                res.json(data);
            },
            function findOneError(err) {
                res.send(500, err.message);
            }
        );
});
/******************
* DELETE ITEM FOR INDIVIDUAL USER
******************/
        //1                //2
        router.delete('/delete/:id', function(req, res) {
            var data = req.params.id; //3
            var userid = req.user.id; //4
        
            TournamentModel
                .destroy({ //5
                    where: { id: data, owner: userid } //6
                }).then(
                    function deleteLogSuccess(data){ //7
                        res.send("you removed a log");
                    },
                    function deleteLogError(err){ //8
                        res.send(500, err.message);
                    }
                );
        });
        /******************
* UPDATE ITEM FOR INDIVIDUAL USER
******************/
       //1    //2
router.put('/update/:id', function(req, res) {
    var data = req.params.id; //3
    var tournament = req.body.log; //4

    TournamentModel
        .update({ //5
            owner: req.user.id, //6
            
            game: tournament.game,
            buyIn: tournament.buyIn,
            finish: tournament.finish
        },
        {where: {id: data}} //7
        ).then(
            function updateSuccess(updatedLog) { //8
                res.json({
                    tournament: tournament
                });            
            },
            function updateError(err){ //9
                res.send(500, err.message);
            }
        )
});

module.exports = router;