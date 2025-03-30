app.post('/usuarios', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.nome,  // Corrigido de "name" para "nome"
                age: req.body.idade,  // Corrigido de "age" para "idade"
                email: req.body.email
            }
        });

        res.status(201).json(user);
    } catch (error) {
        console.error(error); // Log do erro no console
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});



//get é pra lista, post = cria,put = edita varios, delete = deleta
//quando eu acessar /usuarios vou cair ai



/*

1)tipo de Rota/ método HTTP
2)endereço

*/

//senha banco: teste
// nOHgajtaRU8UMyEO