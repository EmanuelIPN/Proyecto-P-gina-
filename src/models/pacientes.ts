import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Paciente = db.define('Paciente', {

    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        field: 'idPaciente'
    },
    name: {
        type: DataTypes.STRING,
        field: 'nom_pac'
    },
    primerApellido: {
        type: DataTypes.STRING,
        field: 'app_pac'
    },
    segundoApellido: {
        type: DataTypes.BOOLEAN,
        field: 'apm_pac'
    },
    fechaAfiliacion: {
        type: DataTypes.DATEONLY,
        field: 'fecha_afil'
    },
}, {
    timestamps: false
});

export default Paciente;