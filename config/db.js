const mongoose = require('mongoose');

mongoose.connect(
  process.env.DBURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  error => {
    if (error) return console.error(error);
    console.log(`connected`);
  }
);
