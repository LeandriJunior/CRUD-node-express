const {connection, DataTypes}= require('./connection');

const Historico = connection.define('historico', {
    id:{type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true },
    transacao:{ type: DataTypes.STRING, allowNull:true },
    valor: { type:DataTypes.DECIMAL, allowNull:true },
    tipo:{ type:DataTypes.STRING, allowNull:true }
},{
    tableName: 'financas_historico'
});


const getAll = async () => {
    const history = Historico.findAll();
    return history
};

const createOne = async (data) => {
    await Historico.create({
        transacao: data.transacao,
        valor: data.valor,
        tipo: data.tipo
    })
    
    history = await getAll()
    return history
}
const editOne = async (data) => {

    var history = await Historico.findByPk(data.id);
    history.transacao = data.transacao?data.transacao:history.transacao
    history.valor = data.valor?data.valor:history.valor
    history.tipo = data.tipo?data.tipo:history.tipo

    await history.save()
    
    history = await getAll()
    return history
}

const deleteOne = async (data) =>{
    await Historico.destroy({where: {id:data.id}})
    history = await getAll()
    return history
}
module.exports = {
    getAll,
    createOne,
    deleteOne,
    editOne
    
};
