const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// desc - Get goals
// route - GET /api/goals
// access - private

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})

// desc - Create goal
// route - POST /api/goals
// access - private

const createGoals = asyncHandler(async (req, res) => {
    console.log(req.body)
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a field to create the goal')
    }
    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// desc - Update goal 
// route - PUT /api/goals
// access - private

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error(`Couldn't find your goal`)
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true })

    res.status(200).json(updatedGoal)
})


// desc - Delete goal
// route - DELETE /api/goals
// access - private

const deleteGoal = asyncHandler(async(req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error(`Couldn't find your goal`)
    }

    
    await goal.deleteOne()

    res.status(200).json(`Removed ${req.params.id}`)
})

module.exports = {
    getGoals, updateGoal, createGoals, deleteGoal
}