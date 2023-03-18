// Defining schema for my goal Model. I just really need text and the user relationship once I add them
const mongoose = require('mongoose')
const goalSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add text to the corresponding field']
    }
},
{
    timestamps: true
}
    )


module.exports = mongoose.model('Goal', goalSchema)