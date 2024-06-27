const express=require('express')

const route=express.Router();




route.get('/listemagasin', (request, response)=>{
    response.send("liste magasin")
})

route.post('/savemagasin', ()=>{
    response.send("ajout magasin")
})

module.exports=route