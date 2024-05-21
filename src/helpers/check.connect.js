'use strict'

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000;
// count connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections: ${numConnection}`);
};

// check overload connect
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // in case of maximum number of connections based on number of cores
    const maxConnections = numCores * 5;
    console.log(`Active numConnection ${numConnection}`);
    console.log(`memoryUsage ${memoryUsage / 1024 / 1024} MB`);
    if (numConnection > maxConnections) {
      console.log('connection overload detected');
      // notify.send()
    }
  }, _SECONDS); // MONITOR EVERY 5 SECONDS
}

module.exports = {
  countConnect,
  checkOverload
}
