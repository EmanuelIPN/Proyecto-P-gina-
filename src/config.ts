import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || "8000",
    apiPaths: {
        pacientes: '/api/pacientes',
        medicos: '/api/medicos',
        citas: '/api/citas',
        hospitales: '/api/hospitales'
    },
    dbConfig: {
        db: process.env.DB || '<DB_NAME>',
        user: process.env.DB_USER || '<DB_USER>',
        password: process.env.DB_PASSWORD || '<DB_PASSWORD>',
        host: process.env.DB_HOST || '<DB_HOST>',
        port: Number(process.env.DB_PORT) || 1433,
        dialectOptions: {
            charset: 'utf8mb4'  // Establecer el charset a UTF-8
        }
    }
}