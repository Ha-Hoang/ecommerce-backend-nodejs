'use strict';

const mongoose = require('mongoose');

const connectString = 'mongodb://localhost:27017/shopDEV';

mongoose.connect(connectString)
  .then(_ => console.log('Connect mongodb success'))
  .catch(err => console.log('Error connect!'));

if(1 === 0) {
  mongoose.set('debug', true); 
  mongoose.set('debug', { color: true });
}

module.exports = mongoose;

/**
 * Nhuoc diem cua cach set up nay:
 * nodeJs nho vao file require da dang ky va catch lai nen k goi nua
 * java, php kho khan, goi nua => tao ra ket noi toi 1 database o 1 moi truong khac ma k phai la nodejs
 * => nhieu ket noi duoc tao ra cho cung 1 co so du lieu => gay ra su co tao ket noi
 */