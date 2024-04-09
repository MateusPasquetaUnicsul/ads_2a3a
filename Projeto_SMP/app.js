//Fazer a importaçao do express

const express = require('express');

//rotas (quando o servidor for acessado, para onde ele vai???)

const router = express.Router();
router.get('/',(resq,res)=>{
    res.send('Olá turma de ADS de SMP da manhã!!');
});

//configuraçoes basicas do aplicativo

const app = express();
app.use('/',router);

module.exports = app; //exportando o app, pois iremos importa-lo