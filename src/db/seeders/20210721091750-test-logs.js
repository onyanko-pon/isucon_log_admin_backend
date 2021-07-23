'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date;
    await queryInterface.bulkInsert('logs', [
      { name: 'test01', body: 'test-body01', createdAt: now, updatedAt: now },
      { name: 'test02', body: 'test-body02', createdAt: now, updatedAt: now },
      { name: 'test03', body: 'test-body03', createdAt: now, updatedAt: now },
      { name: 'test04', body: 'test-body04', createdAt: now, updatedAt: now },
      { name: 'test05', body: 'test-body05', createdAt: now, updatedAt: now }
    ], {});
  },

  // down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  // }
};
