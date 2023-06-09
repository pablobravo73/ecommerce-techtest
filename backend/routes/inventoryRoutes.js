const express = require("express");
const router = express.Router();

const inventoryController = require("../controllers/inventoryController");
const isAdmin = require("../middleware/isAdmin");

router.get('/inventory', inventoryController.getAllItems);
router.post('/inventory', isAdmin, inventoryController.addItem);
router.delete('/inventory/:itemId', isAdmin, inventoryController.deleteItem);

module.exports = router;
