const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pagina_audio',
    password: 'admin20',  
    port: 5432,
});

// Verificar conexión al iniciar
pool.connect((err, client, release) => {
    if (err) {
        console.error('❌ Error conectando a PostgreSQL:', err.message);
        console.log('Verifica que:');
        console.log('  1. PostgreSQL esté corriendo (services.msc)');
        console.log('  2. La contraseña sea correcta');
        console.log('  3. La base de datos "pagina_audio" exista');
        process.exit(1);
    } else {
        console.log('✅ Conectado a PostgreSQL correctamente');
        release();
    }
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: 'Servidor funcionando' });
});

// Ruta para guardar comentarios
app.post('/api/comentarios', async (req, res) => {
    console.log('📥 Datos recibidos:', req.body);
    
    const { nombre, email, mensaje } = req.body;
    
    if (!nombre || !email || !mensaje) {
        return res.status(400).json({ 
            success: false, 
            error: 'Faltan campos requeridos' 
        });
    }
    
    try {
        const result = await pool.query(
            'INSERT INTO comentarios (nombre, email, mensaje) VALUES ($1, $2, $3) RETURNING *',
            [nombre, email, mensaje]
        );
        console.log('✅ Comentario guardado:', result.rows[0]);
        res.json({ success: true, data: result.rows[0] });
    } catch (err) {
        console.error('❌ Error al guardar:', err.message);
        res.status(500).json({ success: false, error: err.message });
    }
});

// Ruta para ver comentarios
app.get('/api/comentarios', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM comentarios ORDER BY fecha DESC');
        res.json({ success: true, data: result.rows });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
    console.log(`📋 Prueba GET:  http://localhost:${port}/api/comentarios`);
    console.log(`📝 Guardar POST: http://localhost:${port}/api/comentarios`);
});