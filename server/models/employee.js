module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      fullName: {
        type: Sequelize.STRING
      },
      jobTitle: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      email:{
        type: Sequelize.STRING
      },
      address:{
        type: Sequelize.STRING
      },
      city:{
        type: Sequelize.STRING
      },
      state:{
        type: Sequelize.STRING
      },
      primaryEmergencyContactName:{
        type: Sequelize.STRING
      },
      primaryEmergencyContactPhoneNumber:{
        type: Sequelize.STRING
      },
      primaryEmergencyContactRelationship:{
        type: Sequelize.STRING
      },
      secondaryEmergencyContactName:{
        type: Sequelize.STRING
      },
      primaryEmergencyContactRelationship:{
        type: Sequelize.STRING
      },
      secondaryEmergencyContactPhoneNumber:{
        type: Sequelize.STRING
      }
    });
  
    return Employee;
  };