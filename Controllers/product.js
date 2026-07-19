import Product from "../Models/Product.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    const productFiltered = products.map((pr) => ({
      ...pr._doc,
      id: pr._id,
    }));

    res.json(productFiltered);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching products",
    });
  }
};

async function addProduct(req, res) {
  try {
    const { title, imageURL, description, token } = req.body;
    if (!token) {
      return res.status(401).json({ error: "Token required" });
    }
    const decoded = verifyJWT(token);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid token" });
    }
    if (!title || !imageURL || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newProduct = new Product({
      title,
      imageURL,
      description,
      ownerUsername: decoded.username,
    });
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export { addProduct, getAllProducts };