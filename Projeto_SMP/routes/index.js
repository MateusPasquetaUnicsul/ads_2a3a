const express = require('express');



const router = express.Router();
router.get('/json',(req,res)=>{
    //res.send('Olá turma de ADS de SMP da manhã!!');
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    res.json({
        nomeCompleto: nome+ ' ' +sobrenome

    });
});

router.get('/sobre',(req,res)=>{
    res.send('Pagina sobre o Projeto');
});

router.get('/posts/:id',(req,res)=>{
    let id = req.params.id;
    res.send('ID do post ' + id);
});

router.get('/json2',(req,res)=>{
   res.json(req.query);
});

module.exports = router;