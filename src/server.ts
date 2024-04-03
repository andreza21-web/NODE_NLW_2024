import fastify from 'fastify';

const app = fastify();
// METODOS HTTP POST, GET, PUT, DELETE
// CORPO DA REQUEST
// PARAMETROS DE BUSCA
// PARAMETRO DE ROTA
// CABEÇALHO

app.get('/', () => {
    return "NLW UNITE"
});

// CONFIGURAÇÃO DA ROTA 36:35
app.listen({ port: 3333 }).then(() => {
    console.log('listening on port');
});