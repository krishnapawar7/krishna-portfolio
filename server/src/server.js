const express = require('express');
const path = require('path');
const app = require('./app');

const PORT = process.env.PORT || 5000;
const clientDistPath = path.join(__dirname, '../../client/dist');

app.use(express.static(clientDistPath));

app.get('*', (req, res, next) => {
  if (req.url.startsWith('/api')) {
    return next();
  }
  const indexPath = path.join(clientDistPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.send(`MERN Portfolio Backend Running on Port ${PORT}`);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Krishna Pawar MERN API Server running on port ${PORT}`);
  console.log(`API Base: http://localhost:${PORT}/api`);
});
