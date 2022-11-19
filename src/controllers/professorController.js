import ProfesorRepository from '../repository/professorRepository.js'

const create = async (req,res) => {
    
    const result = await ProfesorRepository.create(req.body);

    return sendResponse(result,res);
}

const findAll = async(req,res) => {

    const professor = await ProfesorRepository.findAll();

    return sendResponse(professor,res);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const professor = await ProfesorRepository.findOne(id);

    return sendResponse(professor,res);
}

const update = async(req,res) => {
    const professor = await ProfesorRepository.update(req.body);

    return sendResponse(professor,res);
}

const remove = async(req,res) => {

    const id = req.params.id;

    const professor = await ProfesorRepository.remove(id);

    return sendResponse(professor,res);
}

const sendResponse = (result,res) => {
if (result)
    return res.status(200).json(result)
else
    return res.status(500).json({message: 'An error has ocurred.'})
}

const ProfessorController = { create, findAll, findOne, update, remove }

export default ProfessorController