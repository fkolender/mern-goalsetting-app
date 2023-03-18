const express = require('express')
const router = express.Router()
const {getGoals, updateGoal, deleteGoal, createGoals} = require('../controllers/goalController.js')

router.get('/', getGoals)

router.post('/', createGoals)

router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)

module.exports = router