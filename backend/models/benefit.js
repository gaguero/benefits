const mongoose = require('mongoose');

const benefitSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Benefit', benefitSchema);
