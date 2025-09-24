import express from "express"

const web = express.Router()

web.get('/', (req,res) => {
    res.render('index')
})
web.get('/:username', (req, res) => {
    const username = req.params.username
    const bio = req.params.bio
    res.render('public-profile',{
        title:username,
        username: username,
        bio : "Dor dor doriiii"
    })
})



export default web