module.exports = (sequelize, DataTypes) => {
  const PatientSurgiries = sequelize.define(
    'PatientSurgiries',
    {},
    { timestamps: false }
  );

  PatientSurgiries.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgiries',
      through: PatientSurgiries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: PatientSurgiries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };

  return PatientSurgiries;
};
