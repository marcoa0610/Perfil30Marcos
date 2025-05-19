import employeeModel from "../models/employees.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js"

const registerEmployeeController = {};

registerEmployeeController.register =async (req, res) =>{
    //Pedir todos los campos
    const {name,email,password,phone,addres,workPosition,hiringDate,salary, DUI } = req.body; 
    try {
        //Verificar si el empleado ya existe
        const employeeExist = await employeeModel.findOne({email})
        if (employeeExist){
            return res.json ({message: "Employee already exist"});
        }

        const passwordHash = await bcryptjs.hash(password, 10)

        const newEmployee = new employeeModel({
            name,email,password,phone,addres,workPosition,hiringDate,salary, DUI,
        });

        await newEmployee.save();

        jsonwebtoken.sign(
            {id: newEmployee._id},
            config.JWT.secret,
            {expiresIn: config.JWT.expires},
            //Funcion  flecha
            (error, token) => {
                if(error) console.log("error")
                    res.cookie("authToken", token)
                res.json({message: "Employee registered successfully!", token})
                console.log({message:"Nombre:" + name +  "correo" + email + "contraseña" + password})
            }
        )
    } catch (error) {
        console.log ("error"+ error)
        res.json({message: "Sign up error"})
    }
};

export default registerEmployeeController;