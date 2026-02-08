export const validateProduct = async (req, res, next) => {
    const { name, price, image } = req.body;

    // Check for Name and Price fields
    if (!name || price === undefined) {
        return res.status(400).json({ 
            error: "Validation failed: 'name' and 'price' are required fields." 
        });
    }

    // Check for postive price 
    if (typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ 
            error: "Validation failed: 'price' must be a number greater than 0." 
        });
    }

    // Validate Name length
    if (name.trim().length < 3) {
        return res.status(400).json({ 
            error: "Validation failed: 'name' must be at least 3 characters long." 
        });
    }

    // Validate Image URL format
    const urlPattern = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i;
    if (image && !urlPattern.test(image)) {
        return res.status(400).json({ 
            error: "Validation failed: 'image' must be a valid image URL." 
        });
    }

    next();
}