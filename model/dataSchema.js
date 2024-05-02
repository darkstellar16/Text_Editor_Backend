const {mongoose} = require('mongoose')

const dataSchema  = new mongoose.Schema({
    componentId: String,
    text:String
});

const Data = mongoose.model('Data',dataSchema);

module.exports = Data