const mongoose = require('mongoose');

const SanphamSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    masv: {
        type: String,
        required: true
    },

    diemtb: {
        type: Number,
        required: true
    },

    img: {
        type: String
    },

});

const SanphamModel = mongoose.model('sanpham', SanphamSchema);

module.exports = SanphamModel;

