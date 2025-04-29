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
    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Metodo não permido' });
    }
    const { id } = req.body;
    console.log(req.body)
    if (!id) {
        return res.status(400).json({ error: 'O id não é obrigatório no request body. '});
    }

    try { 
        const connection = await connectToDataBase();

        const [result] = await connection.execute('DELETE FROM users WHERE id = ?', [id]);

        await connection.end();

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado. '});
        }

        res.status(200).json({ menssage: 'Usuário deletado com sucesso!' });
    } catch (error) {
        console.error('Error de conexão com banco:', error);
        res.status(500).json({ error: 'Erro interno de servidor'});
    }
}