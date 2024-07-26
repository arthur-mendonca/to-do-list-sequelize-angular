"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        // return queryInterface.bulkInsert('ExampleTable', [
        //     {
        //         name: 'User example 1',
        //         mail: 'team@gopn.ai',
        //         password: '$2b$08$x6S26shgpYsyR82lPmIOFOlQguthZITvDtKg6a.g3YYLdU56WkZ4K',
        //     },
        //     {
        //         name: 'User example 2',
        //         mail: 'team@gopn.ai',
        //         password: '$2b$08$x6S26shgpYsyR82lPmIOFOlQguthZITvDtKg6a.g3YYLdU56WkZ4K',
        //     }
        // ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
