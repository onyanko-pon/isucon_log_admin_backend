'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date;
    await queryInterface.bulkInsert('logs', [
      { name: 'test01', body: 'test-body01', type: "none", createdAt: now, updatedAt: now },
      { name: 'test02', body: 'test-body02', type: "nginx", createdAt: now, updatedAt: now },
      { name: 'test03', body: 'test-body03', type: "none", createdAt: now, updatedAt: now },
      { name: 'test04', body: 'test-body04', type: "none", createdAt: now, updatedAt: now },
      { name: 'test05', body: 'test-body05', type: "none", createdAt: now, updatedAt: now }
    ], {});
  }
};
