const Benefit = require('../models/benefit');

exports.getBenefits = async (req, res) => {
    const query = req.query.query || '';
    try {
        const benefits = await Benefit.find({
            title: { $regex: query, $options: 'i' }
        });
        res.json(benefits);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createBenefit = async (req, res) => {
    const benefit = new Benefit({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const newBenefit = await benefit.save();
        res.status(201).json(newBenefit);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
