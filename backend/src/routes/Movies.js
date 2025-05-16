import express from "express";
import moviesController from "../controllers/moviesController.js"
import multer from "multer";
 
const router = express.Router();
 
//configurar una carpeta en local que guarde el registro de las imagenes subidas
 
const upload = multer({dest: "public/"})
 
router.route("/")
.get(moviesController.getMovie)
.post (upload.single("image"), moviesController.createMovie)
router.route("/:id").put(upload.single("image"), moviesController.putMovie)
 
 
 
export default router;