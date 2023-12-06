// query
const knex = require('../../db');

/* 
    table.increments('id');
    table.string('name');
    table.string('email');
*/

// api controller logic
const getStudents = async (req, res) => {
    let students = await knex('students').select('*');
    res.status(200).send(students);
};

const getStudentById = async (req, res) => {
    let id = parseInt(req.params.id);

    const student = knex('students').where('id', id).select().first;

    res.status(200).send(student);
};

const addStudent = async (req, res) => {
    // const {name, email} = req.body;
    const student = req.body;
    let dbRes = await knex('students').insert(student);
    // TODO: error handling if email exist in database
    console.log(dbRes);

    res.send(`Student added. ${dbRes}`);
};

const delStudent = async (req, res) => {
    let id = parseInt(req.params.id);
    let dbRes = await knex('students').where('id', id).delete();

    // dbRes returns 1 or 0
    if (dbRes) {
        res.send('Student deleted.');
    } else {
        res.send('error occured');
    }
};

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    delStudent,
};
