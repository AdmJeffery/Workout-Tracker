const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, data) =>{
    Workout.create({})
        .then(dbWorkouts =>{
            data.json(dbWorkouts);
        })
        .catch(err => {
            data.json(err);
        }) 
});

router.put("/api/workouts/:id", ({body, params}, res) =>{
    Workout.findByIdAndUpdate(
        params.id, { $push: {exercises:body} }, { $new: true, runValidators: true}
    )
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err)
        })
})

router.get("/api/workouts", (req, data) => {
    Workout.find({}).limit(7)
        .then(dbWorkouts => {
            data.json(dbWorkouts)
        })
        .catch(err => {
            data.json(err)
        })
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(dbWorkouts => {
            console.log(dbWorkouts)
            res.json(dbWorkouts)
        })
        .catch(err =>{
            res.json(err)
        })
});

router.delete("/api/workouts", ({ body }, res) =>{
    Workout.findByIdAndDelete(body.id)
        .then(() =>{
            res.json(true)
        })
        .catch(err => {
            res.json(err)
        })
});

module.exports = router;