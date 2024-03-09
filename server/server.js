const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
