const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true},
    description: String,
    projectOwner: {type: String, required: true},
    status: {
        type: String,
        enum: ['Planning', 'In Progress', 'Stuck', 'Complete']
    },
    projectStartDate: Date,
    projectEndDate: Date
},{
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);