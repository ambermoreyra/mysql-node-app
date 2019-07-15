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
    getProductInfo();
})



function getProductInfo(){
connection.query("SELECT item_id, product_name FROM products", function(err, data){
    if (err) throw err;
    console.table(data);
}
)
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
      connection.query("SELECT * FROM products WHERE ?",{
          item_id: answers.id &&
          stock_quantity > answers.quantity,
      }, 
      function(err, data){
          if (err) throw err;
          console.table(data);
      })
  });
}




