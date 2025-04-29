import { createConnection } from 'mysql2/promise';

async function connectToDataBase() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'teste-api',
    });
}
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Metodo não permitido' });
    }
    const userdata = req.body;
    console.log(userdata)

    const { name, email} = userdata;

    if (!name || !email ) {
        return res.status(400).json({ error: 'name e email são obrigatórios no request body'});
    }
    try {
        const connection = await connectToDataBase();

        const [result] = await connection.execute('INSERT INTO users (name, email) VALUES (?, ?)', [
            name,
            email,
        ]);
        
        await connection.end();

        res.status(201).json({ id: result.InsertId, message: 'Usuário criado com suscesso'});
    } catch (error) {
        console.error('Error de conexão com o banco: ',error);
        res.status(500).json({ error: 'Erro Interno de Servidor' });
    }
}