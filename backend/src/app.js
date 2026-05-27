
require('dotenv').config();
require('./db/config');

const express = require('express');
const app = express();

app.use(express.json());

const authroutes = require("./routers/auth.routes");
const userRoutes = require('./routers/user.routes');
const { mongo } = require('mongoose');
app.use("/users", userRoutes);
app.use("/auth", authroutes);


app.get('/', (req, res) => {
    res.send('servidor funcionando correctamente');
}
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor funcionando en el puerto ${PORT}`));
console.log(' http://localhost:' + PORT);
