const Patient = require('../models/Patient')
const bcrypt = require('bcrypt')

const loginUser = async (req,res) => {
    const {email, password} = req.body

    try {
        const patient = Patient.findOne({email})
        if (!patient) {
            return res.status(400).json({message:'Credenciales Invalidas'})
        }

        const isMatch = await bcrypt.compare(password, patient.password)
        if (!isMatch) {
            return res.status(400).json({message:'Credenciales Invalidas'})
        }

        return res.json({message:'Autenticacion correcta'})
    } catch (error) {
        res.status(500).json({message:'Error del servidor'})
    }
}

module.exports = {
    loginUser
}