import { Request, Response } from "express";
import Paciente from "../models/pacientes";


export const getPacientes = async( req: Request, res: Response ) => {
    try {
        const pacientes = await Paciente.findAll();
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        });
    }
}

export const getPaciente = async( req: Request, res: Response ) => {
    const { id } = req.params;
    try {
        const paciente = await Paciente.findByPk(id);
        if (paciente) {
            res.json(paciente);
        } else {
            res.status(404).json({
                msg: `Paciente with id ${id} not found`
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        });
    }
}

export const createPaciente = async( req: Request, res: Response ) => {
    const { body } = req;
    try {
        const paciente = await Paciente.create({
            name: body.name,
            primerApellido: body.primerApellido,
            segundoApellido: body. segundoApellido,
            fechaAfiliacion: body.fechaAfiliacion,
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        });
    }
}

export const updatePaciente = async( req: Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const result = await Paciente.update({
            name: body.name,
            primerApellido: body.primerApellido,
            segundoApellido: body. segundoApellido,
            fechaAfiliacion: body.fechaAfiliacion,
        }, {
            where: {
              id
            }
        });
        if ( Number(result) === 1 ) {
            res.json({
                msg: `Pacient with id ${id} updated`
            })
        } else {
            res.status(404).json({
                msg: `Pacient with id ${id} not found`
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        });
    }
}

export const deletePaciente = async( req: Request, res: Response ) => {
    const { id } = req.params;
    try {
        const result = await Paciente.destroy({
            where: {
                id
            }
        });
        console.log('Result: ' + result);
        if ( result ) {
            res.json({
                msg: `Paciente with id ${id} deleted`
            })
        } else {
            res.status(404).json({
                msg: `Paciente with id ${id} not found`
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Internal server error, contact API administrator'
        });
    }
}