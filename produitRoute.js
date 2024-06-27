const express=require('express')

const route=express.Router();




route.get('/listeproduit', (request, response)=>{
    response.send("liste produit")
})

route.post('/saveproduit', ()=>{
    response.send("ajout produit")
})


module.exports=route