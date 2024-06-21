import express from 'express';
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoContoller, updateProductController } from '../controllers/productController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddlewares.js'
import formidable from 'express-formidable';


const router = express.Router();

//router
router.post('/create-product',
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController);

//router
router.put('/update-product/:pid',
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController);


//get products 
router.get("/get-product", getProductController);

// single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoContoller);

// delete product
router.delete("/delete-product/:pid", deleteProductController);


export default router;