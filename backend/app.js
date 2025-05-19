//Importar todo lo de la libreria "express"

import express from "express";
import clientRoutes from "./src/routes/Clients.js"
import employeeRoutes from "./src/routes/Employees.js"
import registerEmployeeRoutes from "./src/routes/RegisterEmployee.js";
import cookieParser from "cookie-parser";
import loginRoute from "./src/routes/Login.js"
import logoutRoute from "./src//routes/Logout.js"
import registerClientsRoutes from "./src/routes/RegisterClients.js"
import recoveryPasswordRoutes from "./src/routes/RecoveryPassword.js"
import moviesRoutes from "./src/routes/Movies.js"


//Creo una const que es igual a la libreria "express"
//acabo de importar y lo ejecuto
const app = express();
// middleware para aceptar datos desde postman
app.use(express.json());
app.use(cookieParser());
app.use("/api/clients", clientRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/registerEmployee", registerEmployeeRoutes);
app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRoute);
app.use("/api/registerClients", registerClientsRoutes);
app.use("/api/recoveryPassword", recoveryPasswordRoutes);
app.use("/api/movies", moviesRoutes);

//Exporto toda la constante para poder usar express en otros archivos

export default app;