const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    //This is the central schema that this program will use.
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter a valid exercise"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter the name of the exercise"
                },
                duration: {
                    type: Number,
                    required: "Please enter the duration"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            //this includes any virtual properties upon data request
            virtuals: true
        }
    }
);

exerciseSchema.virtual("totalDuration").get(function () {
    
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });

  const Workout = mongoose.model("Workout", exerciseSchema);

  module.exports = Workout;