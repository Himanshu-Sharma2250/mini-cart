export const validateCartItem = (req, res, next) => {
    const {productId} = req.params;
    const {quantity} = req.body;

    // Check if fields exist
    if (!productId || quantity === undefined) {
        return res.status(400).json({ 
            error: "Missing required fields: productId and quantity are required." 
        });
    }

    // Validate quantity is a positive number
    if (typeof quantity !== 'number' || quantity <= 0) {
        return res.status(400).json({ 
            error: "Invalid quantity. Must be a number greater than 0." 
        });
    }

    next();
};