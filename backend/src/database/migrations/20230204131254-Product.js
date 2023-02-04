'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      categoryID: {
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: {
          model: 'Categories',
          key: 'id'
        },
        allowNull: true,
      },
      subcategoryID: {
        type: Sequelize.INTEGER,
        field: 'subcategory_id',
        references: {
          model: 'Subcategories',
          key: 'id'
        },
        allowNull: true
      },
      size: {
        type: Sequelize.STRING,
        allowNull: false
      },
      salePrice: {
        type: Sequelize.INTEGER,
        field: 'sale_price',
        allowNull: false
      },
      costPrice: {
        type: Sequelize.INTEGER,
        field: 'cost_price',
        allowNull: false
      },
      percentage: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      color: {
        type: Sequelize.STRING,
        allowNull: true
      },
      observation: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: Sequelize.DATE
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
