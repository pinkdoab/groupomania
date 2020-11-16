const express = require('express')
const router = express.Router();

const postCtrl = require("../controllers/post.js");
const multer = require('../middleware/multer-config');

  // Récupérer tous les posts
  router.get("/", postCtrl.findAll);

  // Récupérer un simple post avec customerId
  router.get("/:customerId", postCtrl.findOne);

  // Création d'un nouveau post
  router.post("/", multer, postCtrl.create);

  // Supprimer un post avec Id
  router.delete("/:postId", postCtrl.delete);

module.exports = router;










// Update a Customer with customerId
//app.put("/customers/:customerId", customers.update);

// Create a new Customer  <= erreurrrrrrrrrrrrrrrrrrrrrrrr
//app.delete("/customers", customers.deleteAll);