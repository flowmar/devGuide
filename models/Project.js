// The model basically defines all fields we want to collect
// Require mongoose
const mongoose = require("mongoose");
   
// Create a Schema class with mongoose
const { Schema } = mongoose;

//Create ProjectSchema 
const ProjectSchema = new Schema({
    lifecycle: {
        type: String,
        required: true
    },
    todoId: {
        type: Number,
        unique: true,
        required: true
    },
    todo: {
        type: String,
        unique: true,
        required: true
    },
    resource: [{
        name: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        link: {
            type: [String],
            required: false
        }
    }],

});

// Save the "Project" model using the ProjectSchema
const Project = module.exports = mongoose.model("projects", ProjectSchema);

//Export Projects
module.exports.getProjects = (callback) => {
    Project.find(callback);
}

// Get Project by Id
module.exports.getProjectById = (id, callback) => {
	Project.findById(id, callback);
}