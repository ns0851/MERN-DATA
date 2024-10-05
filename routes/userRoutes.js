import express from 'express'
import userModel from '../DB/models/usermodel.js'

const router = express.Router()

// Create
router.post('/', async (req,res) => {
    try {
        const {name,email,age} = req.body
        const userAdded = await userModel.create({
            name: name,
            email: email,
            age: age
        });
        res.status(201).json(userAdded)
    } catch (error) {
        res.status(400)
        res.send("Error")
    }
})

// Single Read
router.get('/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const showSingle = await userModel.findById({_id: id })
        res.status(201).json(showSingle)
        
    } catch (error) {
        res.status(400)
    }
})

// Read
router.get('/', async(req,res) => {
    try {
        const showAll = await userModel.find()
        res.status(201).json(showAll)
        
    } catch (error) {
        res.status(400)
    }
})

// Delete
router.delete('/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const showSingle = await userModel.findByIdAndDelete({_id: id })
        res.status(201).json(showSingle)
        
    } catch (error) {
        res.status(400)
    }
})

// Update
router.patch('/:id', async(req,res) => {
    const {id} = req.params;
    try {
        const updateUser = await userModel.findByIdAndUpdate(id, req.body, {new: true})
        res.status(201).json(updateUser)
        
    } catch (error) {
        res.status(400)
    }
})

export default router