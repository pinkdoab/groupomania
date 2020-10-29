module.exports = app => {
    const post = require("../controllers/post.controller.js");
  
    // Retrieve all Customers
    app.get("/post", post.findAll);

    // Create a new Customer
    app.post("/post", post.create);
  

  
    // Retrieve a single Customer with customerId
    //app.get("/customers/:customerId", customers.findOne);
  
    // Update a Customer with customerId
    //app.put("/customers/:customerId", customers.update);
  
    // Delete a Customer with customerId
    //app.delete("/customers/:customerId", customers.delete);
  
    // Create a new Customer  <= erreurrrrrrrrrrrrrrrrrrrrrrrr
    //app.delete("/customers", customers.deleteAll);
  };