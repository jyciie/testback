'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      userID: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      FName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      MName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      LName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      BDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      ContactNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
