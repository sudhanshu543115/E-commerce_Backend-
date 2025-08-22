require('dotenv').config();
const app = require(".");
const connectDb = require("./config/db");

const PORT = process.env.PORT || 9000;

app.listen(PORT, async () => {
    await connectDb();
  console.log(`Server is running on port ${PORT}`);
});