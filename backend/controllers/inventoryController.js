const InventoryItem = require('../models/InventoryItem');


exports.getAllItems = async (req, res) => {
  try {
    
    const inventoryItems = await InventoryItem.findAll();

    
    res.json({ inventoryItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};


exports.addItem = async (req, res) => {
  try {
    const { productName, sku, quantity } = req.body;
    const { image } = req.files; 

        if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Acceso no autorizado' });
    }

    
    const newItem = await InventoryItem.create({ productName, sku, quantity });

    
    if (image) {
      const imagePath = `/uploads/${image.name}`;
      newItem.image = imagePath;
      await newItem.save();

      
      await image.mv(`./public${imagePath}`);
    }

    
    res.json({ message: 'Elemento agregado al inventario' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};


exports.deleteItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;

    
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Acceso no autorizado' });
    }

    
    const item = await InventoryItem.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Elemento no encontrado en el inventario' });
    }

    
    await item.destroy();

    
    res.json({ message: 'Elemento eliminado del inventario' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
