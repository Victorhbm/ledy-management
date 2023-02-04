'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerID: {
        type: Sequelize.INTEGER,
        field: 'customer_id',
        references: {
          model: 'Customers',
          key: 'id'
        }
      },
      discount: {
        type: Sequelize.INTEGER,
      },
      paymentMethod: {
        type: Sequelize.STRING,
        field: 'payment_method'
      },
      price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Sales');
  }
};
