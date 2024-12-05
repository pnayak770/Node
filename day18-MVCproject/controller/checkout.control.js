const placeOrder=(req,res)=>{
    res.json({
        succes:true,
    })
}

const payment=(req,res)=>{
    res.json({
        succes:true,
    })
}

const checkoutController={
    placeOrder,
    payment
}

export default checkoutController