const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    taskTitle: { type: String, required: true},
    taskStatus: {
        type: String,
        enum: ['Planning', 'In Progress', 'Stuck', 'Complete']
    },
    dueDate: {type: Date, required: true},
    owner: {type: String, required: true}
},{
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);