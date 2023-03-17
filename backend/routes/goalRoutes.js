const express = require('express')
const router = express.Router()
const {getGoals, setGoals, deleteGoals, createGoals} = require('../controllers/goalController.js')

router.get('/', getGoals)

router.post('/', createGoals)

router.put('/:id', setGoals)

router.delete('/:id', deleteGoals)

module.exports = router