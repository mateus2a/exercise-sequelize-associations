const bodyParser = require('body-parser');

const express = require('express');
const { Patient, Plan, PatientSurgery } = require('./models');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/patients/plans', async (req, res) => {
  try {
    const patients = await Patient.findAll({
      include: { model: Plan, as: 'plans' },
    });
    return res.json(patients);
  } catch (error) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
});

app.get('/patients/surgeries', async (req, res) => {
  try {
    const patients = await PatientSurgery.findAll();
    return res.json(patients);
  } catch (error) {
    console.log(erro);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
});

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
