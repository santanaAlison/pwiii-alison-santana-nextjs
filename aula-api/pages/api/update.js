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
    if (req.method !== 'PUT') {
        return res.status(405).json({ error: 'Metodo não permitido' });
    }

    const { id, name, email } = req.body;
    console.log(req.body);

    if (!id || !name || !email) {
        return res.status(400).json({ error: 'id, name, and email são obrigatórias no request body. '});
    }
    try {
        const connection = await connectToDataBase();
        const [result] = await connection.execute(
            'UPDATE users SET name = ?, email = ? WHERE id = ?',
            [name, email, id]
        );

        await connection.end();
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        res.status(200).json({ message: 'Usuário atualizado com suscesso' });
    } catch (error) {
        console.error('error de conexão com banco:', error);
        res.stutus(500).json({ error: 'erro interno de servidor'});
    }
}