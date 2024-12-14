const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();                                                    // as the name suggests it connects to MongoDB database
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());                                        // built-in middleware that provides JSON parser for request
app.use("/api/contact", require("./routes/contactRoutes"));     // /api/contact is prefix to all routes under the mentioned router
app.use("/api/users", require("./routes/userRoutes"));          // similarly here as well
app.use(errorHandler);                                          // to handle errors and return a JSON response instead of a HTML response

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});