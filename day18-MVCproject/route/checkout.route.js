import express from "express";
import checkoutController from "../controller/checkout.control.js";


const router=express.Router();

const {placeOrder,payment}=checkoutController

router.get("/checkout/place-order",placeOrder);

router.get("/checkout/payments",payment);

export default router


//all the routes and controller are difine as checkout controller