const app = require('./src/app.js');

app.listen(process.env.PORT, () => {
  console.log(
    `server started at http://${process.env.HOST}:${process.env.PORT}`
  );
});
