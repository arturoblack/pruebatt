const db = require('../app/models');
const crypto = require('crypto');

// const now = new Date();
const users = [
  { 
    name: 'Tony Stark',
    email: 'imironman@avenger.org',
    password: '1234',
    rol: 'BOSS',
  },
  { 
    name: 'Peter Parker',
    email: 'spidy@avenger.org',
    password: '1234',
    rol: 'RL',
  },
  { 
    name: 'Bruce Banner',
    email: 'thehulk@avenger.org',
    password: '1234',
    rol: 'RL',
  },
];

const products = [
  {
    name: 'Azucar',
    category: 'abarrotes',
  },
  {
    name: 'Arroz',
    category: 'abarrotes',
  },
  {
    name: 'Aceite',
    category: 'abarrotes',
  },
  {
    name: 'patatas',
    category: 'tuberculos',
  },
];

async function insertData() {
  try {
    
    console.log('Iniciando la insercion de tablas');
    console.log('-----------------------------');
    // usuarios
    for (const user of users) {
      user.password = crypto.createHmac('sha256', 'llavedehash')
      .update(user.password)
      .digest('hex');
      await db.User.create(user);
    }
    // productos
    for (const product of products) {
      await db.Product.create(product);
    }
    console.log('-----------------------------');
    console.log('Insercion de tablas finalizado');
  } catch(err) {
    console.error(err);
  }
}

// ejecucion de la funcion
insertData();
