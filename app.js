const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import books route
const bookRoutes = require('./routes/books');
app.use('/books', bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
