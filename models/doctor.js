const mongoose = require('mongoose');
const Joi = require("joi");

const doctorSchema = new mongoose.Schema({
    docId: { type: String, required: true },
    docName: { type: String, required: true },
    docInfo: { type: String, required: true },
});

// const Doctor = mongoose.model("doctor", doctorSchema);

// const validate = (data) => {
//     const schema = Joi.object({
//         docId: Joi.string().required().label("Doctor ID"),
//         docName: Joi.string().required().label("Doctor Name"),
//         docInfo: Joi.string().required().label("Info"),
//     });
//     return schema.validate(data);
// };

module.exports = mongoose.model("Doctor", doctorSchema);