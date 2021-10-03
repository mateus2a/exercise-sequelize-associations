const bodyParser = require('body-parser');

const express = require('express');
const { Patient, Plan } = require('./models');
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = 3000;

app.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.findAll();
    return res.json(patients);
  } catch (error) {}
});

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
