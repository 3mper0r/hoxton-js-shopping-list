/*  a) Use these items and their respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
    b) Store this information using the most appropriate data structures we've studied so far
    c) Have a prompt to add an item to the list (you can have two prompts for the item and its price)
    d) Output a list displaying each item and its price
    e) Output the total at the end */

let item = String(prompt("Add an item to your card"));
let price = Number(prompt("Price the item"));

let shoppingList = ['Milk', 'Cocoa', 'Salad', 'Carrots', 'Tomatoes', 'Ready Meals'];
let itemPrices = [1.20, 2.00, 2.00, 2.00, 2.50, 5.00];

shoppingList.push(item);
itemPrices.push(price);

for (const element of shoppingList) {
    console.log(` ${element} costs  £${itemPrices.shift().toFixed(2)} `);

}







