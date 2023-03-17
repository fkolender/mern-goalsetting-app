const asyncHandler = require('express-async-handler')

// desc - Get goals
// route - GET /api/goals
// access - private

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

// desc - Update goal 
// route - PUT /api/goals
// access - private

const setGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Updated goal ${req.params.id}`})
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
    res.status(200).json({message: `Create goal`})
})

// desc - Delete goal
// route - DELETE /api/goals
// access - private

const deleteGoals = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Deleted goal ${req.params.id}`})
})

module.exports = {
    getGoals, setGoals, createGoals, deleteGoals
}