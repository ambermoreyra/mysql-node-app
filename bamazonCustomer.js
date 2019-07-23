var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "",

    database: "bamazon"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("You're connected!");
    getProductInfo();
    displayProducts();
            
})

function displayProducts(){
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
// console.log(res);
        for (var i = 0; i < res.length; i++) {
            console.log(`${res[i].item_id} | ${res[i].product_name} | $${res[i].price}`)
            }
    
    })
};

function getProductInfo(){


    inquirer.prompt([
    {
      name: "id",
      type: "number",
      message: "What is the ID number of the product you would like to buy?",
    }, 
    {
    name: "quantity",
    type: "number",
    message: "How many units of the product would you like to buy?"
    }
]).then(function(answers) {
      console.log(`Product ID of ${answers.id} in the quantity of ${answers.quantity} has been requested.`);
      connection.query("SELECT item_id, stock_quantity FROM products WHERE ?",[
          {
          item_id: answers.id},
         
      ], 
      function(err, data){
          if (err) throw err;
       console.log(data);
      })
  });
};




