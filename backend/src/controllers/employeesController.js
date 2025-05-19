//Aqui en el controlador iran todos los metodos
//(Metodos de C R U D)

const employeesController = {};
import employeesModel from "../models/employees.js";

// SELECT
employeesController.getEmployee = async (req, res) => {
    const employees = await employeesModel.find();
    res.json(employees)
}

//INSERT 
employeesController.createEmployees = async (req, res) => {
    const {name,email,password,phone,addres,workPosition,hiringDate,salary, DUI} = req.body;

    const newEmployee = new employeesModel({name,email,password,phone,addres,workPosition,hiringDate,salary, DUI })

    await newEmployee.save();
    res.json({message: "Employee saved"});
}

//DELETE
employeesController.deleteEmployees = async(req, res) => {
    const deleteEmployees = await employeesModel.findByIdAndDelete (req.params.id);
    res.json({message: "Employee Deleted"})
}

//UPDATE
employeesController.updateEmployees = async(req, res) => {
    const {name,email,password,phone,addres,workPosition,hiringDate,salary, DUI} = req.body;
    const updatedEmployees = await employeesModel.findByIDAndUpdate(req.params.id,
        {name,email,password,phone,addres,workPosition,hiringDate,salary, DUI}, {new: true}
    );

    res.json ({message: "Employee Updated"})

}

//SELECT 1 PRODUCT BY ID
employeesController.getEmployees = async (req, res) => {
    const employee = await employeesModel.findById(req.params.id);
    res.json(employee);
}

export default employeesController;
