const app = require('./app');

app.set('port',7777); //escolha de uma porta padrao
const server = app.listen(app.get('port'),()=>{
    console.log("Servidor rodando na porta: " + server.address().port);
});