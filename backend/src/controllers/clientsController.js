//Aqui en el controlador iran todos los metodos
//(Metodos de C R U D)

const clientsController = {};
import clientsModel from "../models/clients.js";

// SELECT
clientsController.getclients = async (req, res) => {
    const clients = await clientsModel.find();
    res.json(clients)
}

//INSERT 
clientsController.createclients = async (req, res) => {
    const {name ,email, password, phone, addres, DUI} = req.body;

    const newclients = new clientsModel({name ,email, password, phone, addres, DUI})

    await newclients.save();
    res.json({message: "clients saved"});
}

//DELETE
clientsController.deleteclients = async(req, res) => {
    const deleteclients = await clientsModel.findByIdAndDelete (req.params.id);
    res.json({message: "clients Deleted"})
}

//UPDATE
clientsController.updateclients = async(req, res) => {
    const {name ,email, password, phone, addres, DUI} = req.body;
    const updatedclients = await clientsModel.findByIDAndUpdate(req.params.id,
        {name ,email, password, phone, addres, DUI}, {new: true}
    );

    res.json ({message: "clients Updated"})

}

//SELECT 1 PRODUCT BY ID
clientsController.getclients = async (req, res) => {
    const clients = await clientsModel.findById(req.params.id);
    res.json(clients);
}

export default clientsController;