const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    projectTitle: { type: String, required: true},
    description: String,
    projectOwner: {type: String, required: true},
    projectStatus: {
        type: String,
        enum: ['Planning', 'In Progress', 'Stuck', 'Complete']
    },
    projectStartDate: Date,
    projectEndDate: Date
},{
    timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);