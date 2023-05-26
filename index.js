const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.port || 1430


const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')

app.use(cors())

app.get('/', (req, res)=>{
    res.send('server is running')
})

app.get('/chefs', (req, res)=>{
    res.send(chefs)
})
app.get('/recipes', (req, res)=>{
    res.send(recipes)
})


app.get('/chefs/:id', (req, res)=>{
    const id = req.params.id
    const selectChef = recipes.filter(p => p.recipe_id == id)
    res.send(selectChef)
})
app.get('/recipes/:id', (req, res)=>{
    const id = req.params.id
    const selectRecipes = recipes.find(p => p.id === id)
    res.send(selectRecipes)
})


app.listen(port , ()=>{
    console.log(`server is running on port : ${port}`)
})