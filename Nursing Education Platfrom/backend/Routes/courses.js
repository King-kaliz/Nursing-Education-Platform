const express = require('express');
const Course = require('../models/Course');
const router = express.Router();

// Get All Courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching courses' });
    }
});

// Add New Course (admin only)
router.post('/add', async (req, res) => {
    const { title, description, content, videos, semester, quizzes } = req.body;
    try {
        const newCourse = new Course({ title, description, content, videos, semester, quizzes });
        await newCourse.save();
        res.status(201).json({ message: 'Course added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error adding course' });
    }
});

module.exports = router;
