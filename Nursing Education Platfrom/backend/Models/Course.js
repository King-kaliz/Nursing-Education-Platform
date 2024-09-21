const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    videos: [String],
    quizzes: [
        {
            question: String,
            options: [String],
            answer: String,
        }
    ],
    semester: String,
});

module.exports = mongoose.model('Course', courseSchema);
