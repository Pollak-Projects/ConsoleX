const express = require('express');
const cors = require('cors');
const app = express();
const orderRoutes = require('./routes/orderRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', orderRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
