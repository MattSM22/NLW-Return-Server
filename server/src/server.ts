import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/* SQLITE = Não é preciso instalar nenhuma outra ferramenta, o que facilita para desenvolvimento em vários ambientes
            Utilização do PRISMA, que é um ORM que muda a forma de fazer queries para o banco de dados
            A utilização do PRISMA, também facilita a integração para vários bancos de dados pois ele suporta todos eles
*/

// GET, POST, PUT, PATCH E DELETE

// GET = BUSCAR INFORMAÇÕES
// POST = CADASTRAR INFORMAÇÕES
// PUT = ATUALIZAR INFORMAÇÕES DE UMA ENTIDADE
// PATCH = ATUALIZAR UMA INFORMAÇÃO UNICA
// DELETE = DELETAR UMA INFORMAÇÃO

app.listen(process.env.PORT || 3333, () => {
    console.log("HTTP server running")
});


