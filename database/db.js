var conn = {
    host: 'sanjna.c7lltaclx4kd.us-east-2.rds.amazonaws.com',
    user: 'root',
    port:3306,
    password: 'sanjna123',
};

var knex = require('knex')({ client: 'mysql', connection: conn });

knex.raw('CREATE DATABASE Hackathon')
    .then((data) => {
        console.log("database created.");
    })
    .catch((err) => {
        console.log("database already exist");
    })

conn.database = 'Hackathon';
knex = require('knex')({ client: 'mysql', connection: conn });

knex.schema
    .createTable('RegistrationForm', function (table) {
        table.increments('Id').primary()
        table.string('FirstName')
        table.string('LastName')
        table.string('BirthDate')
        table.string('Email').unique()
        table.string('Phone ').unique()
        table.string('Company')
        table.string('Country')
        table.string('Mailling_Address')
        table.string('Comment')
        table.string('Current_Date')
    })
    .then((data) => {
        console.log("table Created.");
    })
    .catch((err) => {
        console.log("table already exist.");
    })



module.exports = knex