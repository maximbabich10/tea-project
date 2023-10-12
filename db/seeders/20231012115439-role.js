

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});

    await queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        email: 'admin@admin',
        password: '123',
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
