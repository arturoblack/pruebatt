const db = require('../app/models');

async function createSchema() {
  console.log('Iniciando la creacion de tablas');
  console.log('-----------------------------');
  try {
    // Definicion de modelos en orden de creacion
    await db.User.sync({force: true});
    await db.Product.sync({force: true});
    await db.Order.sync({force: true});

  } catch(err) {
    console.log('ERROR: ', err);
  }
  console.log('-----------------------------');
  console.log('Creacion de tablas finalizado');
}
// ejecucion de la funcion
createSchema();
