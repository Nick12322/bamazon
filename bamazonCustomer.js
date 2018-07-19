const cTable = require('console.table');
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "Bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    bamazonStart()
});

function bamazonStart() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.table(res)
        inquirer
            .prompt([
                {
                    name: "itemSelection",
                    type: "input",
                    message: "What is the Item_ID of the item you'd like to buy?",
                },
                {
                    name: "unitSelection",
                    type: "input",
                    message: "How many of the item would you like to buy?"
                },
            ]).then(function (answer) {
                var query = "Select * FROM products WHERE ?"
                connection.query(query, { Item_ID: answer.itemSelection }, function (err, res) {
                    if (err) throw err
                    if (answer.itemSelection > 10) {
                        console.log("Hm, we can't seem to find that product");
                        return bamazonStart();
                    } else if (answer.unitSelection > res[0].Stock_Quantity) {
                        console.log("Sorry, we don't have enough of that product!");
                        return bamazonStart();
                    } else {
                        console.log("Great! We'll have it right out!");
                        var newQuantity = res[0].Stock_Quantity - parseInt(answer.unitSelection);
                        var totalCost = (parseFloat(res[0].Price) * parseInt(answer.unitSelection));
                        console.log("Total Cost will be $" + totalCost +" dollars");
                        connection.query(
                            "UPDATE products SET ? WHERE ?",
                            [
                                {
                                    Stock_Quantity: newQuantity
                                },
                                {
                                    Item_ID: answer.itemSelection
                                }
                            ],
                            function (err) {
                                if (err) throw err
                                inquirer.prompt([
                                    {
                                        type: "list",
                                        message: "What would you like to do next?",
                                        choices: ["Exit Bamazon", "Purchase another item"],
                                        name: "postPurchase"
                                    }
                                ]).then(function (answer) {
                                    if(answer.postPurchase === "Exit Bamazon") {
                                        connection.end();
                                    } else if (answer.postPurchase === "Purchase another item") {
                                        bamazonStart();
                                    }
                                })
                            }
                        )
                    }
                })

            })
    });
}