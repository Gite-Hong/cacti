const bcrypt = require('bcrypt');
bcrypt.hash('Admin@1234', 10, (err, hash) => {
  if (err) throw err;
  console.log("해시값:", hash);
});
