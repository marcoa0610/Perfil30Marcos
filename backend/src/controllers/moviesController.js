//Aqui en el controlador iran todos los metodos
//(Metodos de C R U D)

const moviesController = {};
import moviesModel from "../models/movies.js";
import {v2 as cloudinary} from "cloudinary";
import {config} from "../config.js"

//1-En el controlador, siempre se tiene que configurar cloudinary primero
// Cloudinary primero
cloudinary.config( {
    cloud_name: config.cloudinary.cloud_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret
})


// SELECT
moviesController.getMovie = async (req, res) => {
    const movies = await moviesModel.find();
    res.json(movies)
}

//INSERT 
moviesController.createMovie = async (req, res) => {
    const {tittle, description, director, gender, year, length} = req.body;
    let imageUrl ="";
 
    if(req.file) {
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder:"public",
                allowed_formats: ["jpg", "png", "jpeg", "gif", "webp", "avif"]
 
            }
        )
 
        imageUrl = result.secure_url
    }
 

    const newMovie = new moviesModel({tittle, description, director, gender, year, length, image: imageUrl})

    await newMovie.save();
    res.json({message: "Movie saved"});
}

//DELETE
moviesController.deleteMovie = async(req, res) => {
    const deleteMovie = await moviesModel.findByIdAndDelete (req.params.id);
    res.json({message: "Movie Deleted"})
}

//UPDATE
moviesController.putMovie = async (req, res) => {
    const {tittle, description, director, gender, year, length} = req.body;
    let imageURL = "";
 
    if(req.file) {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "public",
            allowed_formats: ["jpg", "png", "jpeg", "gif", "webp", "avif"],
        });
        imageURL = result.secure_url;
    }
    //actualizar el registro en la base de datos
 
    await moviesModel.findByIdAndUpdate(req.params.id, {tittle, description, director, gender, year, length, image: imageUrl}, {new:true});
 
    res.json({message:"Movie saved"});
};

//SELECT 1 PRODUCT BY ID
moviesController.getMovie = async (req, res) => {
    const movies = await moviesModel.findById(req.params.id);
    res.json(movies);
}

export default moviesController; 