const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: 'foo.db',
    },
});

async function initTable() {
    try {
        const tableExist = await knex.schema.hasTable('students');
        if (tableExist) return;

        await knex.schema.createTableIfNotExists('students', (table) => {
            table.increments('id');
            table.string('name');
            table.string('email');
        });

        const mockStudent1 = {
            name: 'john',
            email: 'john@gmail.com',
        };
        await knex('students').insert(mockStudent1);
    } catch (err) {
        console.log(err);
    }
}
initTable();

module.exports = knex;
