const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const utilisateurRoute=require('./utilisateurRoute')
const magasiRoute=require('./magasiRoute')
const produitRoute=require('./produitRoute')
const {sequelize}=require('./models')

const port=3500;
app.set('views', './vues');
app.set('view engine', 'ejs');

app.use('/static', express.static(__dirname+'/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
/*
app.get('/', (req, res)=>{
   // res.send("Hello tout le monde");
   const personne=[{nom: "Ali", age: 34}, {nom: "Sani", age: 65}, {nom: "Hassane", age: 23}];
   res.render('index', {nom: "Ali", age: 34, personnes: personne});
})

app.get('/liste/:test', function(req, res){
    const value=req.params.test;
    console.log(value);
    res.send('La liste des utilisateurs');
})

app.get('/form', (req, res)=>{
    res.send('le formulaire');
})


app.post('/users/envoie-form', (req, res)=>{
    console.log(req.body);
    //const mat=req.body.matricule;
    //const tel=req.body.tel;
    const {matricule, tel}=req.body;
    //res.render('liste', {matricule: matricule, telephone: tel})
    res.redirect('/form');

})

*/



app.use('/users', utilisateurRoute);
app.use('/magasin', magasiRoute);
app.use('/produit', produitRoute)




app.listen(port, ()=>{
    //sequelize.sync({alter: true});
    console.log("App started on port "+port);
})
