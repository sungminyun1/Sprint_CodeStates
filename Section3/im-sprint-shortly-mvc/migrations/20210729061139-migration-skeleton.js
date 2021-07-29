'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('urls', 'userId', Sequelize.DataTypes.INTEGER);
    await queryInterface.addConstraint('urls', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_name',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('urls', 'userId');
    await queryInterface.removeConstraint('urls', 'custom_fkey_constraint_name');
  }
};
