
import Profesor from '../models/professor.js'

const create = async (professor) => {

    try {
        console.log(professor)
        
        const newProfesor = await Profesor.create(professor);
            
        return newProfesor;

    } catch(error) {
        console.error(error)

        return null;
    }

}

const findAll = async() => {

    try {
        return await Profesor.findAll();
    } catch(error) {
        console.error(error)
        return null
    }

}

const findOne = async(id) => {

    try {
        return await Profesor.findOne({
            where: {
                id
            }
        })
    } catch (error) {
        console.error(error)
        return null;
    }

}

const update = async(professor) => {
    try {
        const foundProfessor = await Profesor.findOne({
            where: {
                id: professor.id
            }
        })

        foundProfessor.set(professor);

        await foundProfessor.save();

        return foundProfessor;

    } catch(error) {
        console.error(error)
        return null;
    }
}

const remove = async (id) => {

    try {
        await Profesor.destroy({
            where: {
                id
            }
        })

        return true;

    } catch(error) {
        console.error(error);
        return false;
    }
}

const ProfesorRepository = { create, findAll, findOne, update, remove }

export default ProfesorRepository