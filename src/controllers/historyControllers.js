const historyModel = require('../models/historyModel')
const getAll = async (req, res) =>{
    const history = await historyModel.getAll();
    return(
        res.status(200).json({
            status: true,
            description:'get Success ',
            data: [history]
        })
    )
};

const createOne = async (req, res) =>{
    
    const history = await historyModel.createOne(req.query);
    return(
        res.status(200).json({
            status: true,
            description:'Create Success ',
            data: [history]
        })
    )
};
const editOne = async (req, res) =>{
    
    const history = await historyModel.editOne(req.query);
    return(
        res.status(200).json({
            status: true,
            description:'Edit Success ',
            data: [history]
        })
    )
};

const deleteOne = async (req, res) =>{    
    const history = await historyModel.deleteOne(req.query);
    return(
        res.status(200).json({
            status: true,
            description:'Delete Success ',
            data: [history]
        })
    )
};
module.exports = {
    getAll,
    createOne, 
    deleteOne,
    editOne
}