const connection = require('./connection ');

const getAll = async () => {
  const [bugs] = await connection.execute('SELECT * FROM buguinhus.bugs')
  return bugs;
}

const create = async (name) => {
  const [bugs] = await connection.execute('INSERT INTO buguinhus.bugs (nome) VALUES (?)', [name])
}

const update = async (name, id) => {
  const [bugs] = await connection.execute('UPDATE buguinhus.bugs SET nome = ? WHERE id = ?', [name, id,])
  return bugs;
}

const remove = async (id) => {
  const [bugs] = await connection.execute('DELETE FROM buguinhus.bugs WHERE id = ?', [id]);
  return bugs;
}

module.exports = {
  getAll,
  create,
  update,
  remove
};