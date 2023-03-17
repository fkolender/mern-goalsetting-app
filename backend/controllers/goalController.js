// desc - Get goals
// route - GET /api/goals
// access - private

const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// desc - Update goal 
// route - PUT /api/goals
// access - private

const setGoals = (req, res) => {
    res.status(200).json({message: `Updated goal ${req.params.id}`})
}

// desc - Create goal
// route - POST /api/goals
// access - private

const createGoals = (req, res) => {
    res.status(200).json({message: `Create goal`})
}

// desc - Delete goal
// route - DELETE /api/goals
// access - private

const deleteGoals = (req, res) => {
    res.status(200).json({message: `Deleted goal ${req.params.id}`})
}

module.exports = {
    getGoals, setGoals, createGoals, deleteGoals
}