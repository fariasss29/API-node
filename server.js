import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Rota para criar um usuário
app.post('/usuarios', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});

// Rota para listar todos os usuários
app.get('/usuarios', async (req, res) => {
    try {
        const users = await prisma.user.findMany(); // Busca do banco de dados
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
});



//get é pra lista, post = cria,put = edita varios, delete = deleta
//quando eu acessar /usuarios vou cair ai



/*

1)tipo de Rota/ método HTTP
2)endereço

*/

//senha banco: teste
// nOHgajtaRU8UMyEO
