const app = require("./src/app");

const PORT = 3055;

const server = app.listen(PORT, () => {
  console.log(`eCommerce with ${PORT}`);
});

// process.on('SIGINT', () => {
//   server.close(() => console.log('Exit server express'));
// });