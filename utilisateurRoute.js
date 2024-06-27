const express=require('express')
const route=express.Router();
const {Region, Utilisateur, sequelize, QueryTypes}=require('./models')




route.get('/index', async (request, response)=>{
    //const regions= await Region.findAll();
    const regions= await sequelize.query('select * from region', {replacements: [], type: QueryTypes.SELECT });
    const updRegion= await sequelize.query('update region set libelle= :libelle where code= :code', 
        {
            replacements: {libelle: 'DIFFA', code: '2'},
             type: QueryTypes.SELECT 
            }
        );

        const delUti= await sequelize.query('delete from utilisateur where id=:id', 
            {
                replacements: {id: '1'},
                 type: QueryTypes.DELETE 
                }
            );
    console.log(delUti);
    response.render('users/users', {message:'', regions: regions });
})

route.post('/saveutilisateur', ()=>{
    response.send("ajout utilisateur")
})

route.post('/save-region', (req, res)=>{
    try {
        Region.create(req.body);
        res.render('users/users', {message: 'Ajout faite avec success', regions: Region.findAll()})
    } catch (error) {
        res.render('users/users', {message: 'erreur ajout region '+error,  regions: Region.findAll() })
    }
})

route.post('/save-users', async(req, res)=>{
    try {
       await Utilisateur.create(req.body);
        res.render('users/users', {message: 'Ajout faite avec success', regions: await Region.findAll()})
    } catch (error) {
        res.render('users/users', {message: 'erreur ajout region '+error, regions: await Region.findAll()})
    }
})




module.exports=route