const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
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
                    type: Number,
                    required: "Enter an exercise duration in minutes"
                },
                weight: {
                    type: Number
                }
            }
        ]
    }
)