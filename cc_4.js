window.location.href = "index.html";
const products = [
  {
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    inventoryCount: 50
  },
  {
    name: "Running Shoes",
    category: "Apparel",
    price: 89.99,
    inventoryCount: 150
  },
  {
    name: "Coffee Maker",
    category: "Home Goods",
    price: 45.50,
    inventoryCount: 75
  },
  {
    name: "Desk Chair",
    category: "Furniture",
    price: 250,
    inventoryCount: 30
  },
  {
    name: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    inventoryCount: 200
  }
];

console.log(products[0].name); // Outputs: "Laptop"
console.log(products[1].category); // Outputs: "Apparel"
console.log(products[2].price); // Outputs: 45.5
for (const product of products) {
  let discount = 0; // Initialize discount percentage

  switch (product.category.toLowerCase()) {
    case "electronics":
      discount = 0.20; // 20% discount
      break;
    case "apparel":
      discount = 0.15; // 15% discount
      break;
    case "groceries":
    case "home goods": // Assuming "home goods" is a category that might have a discount
      discount = 0.10; // 10% discount
      break;
    default:
      discount = 0; // No discount for other categories
  }
  if (discount > 0) {
    // toFixed(2) ensures the price is rounded to two decimal places
    product.discountedPrice = (product.price * (1 - discount)).toFixed(2);
    console.log(`'${product.name}' in '${product.category}' gets a ${discount * 100}% discount. New price: $${product.discountedPrice}`);
  } else {
    product.discountedPrice = product.price.toFixed(2);
    console.log(`'${product.name}' in '${product.category}' has no discount. Price remains: $${product.discountedPrice}`);
  }
}
const getCustomerDiscount = (customerType) => {
  let additionalDiscount = 0;
  if (customerType === "student") {
    additionalDiscount = 0.05; // 5% extra off
  } else if (customerType === "senior") {
    additionalDiscount = 0.07; // 7% extra off
  }
  return additionalDiscount;
};
const customers = [
    { type: "regular", cart: ["Running Shoes", "Organic Apples"] },
    { type: "senior", cart: ["Laptop", "Wireless Mouse"] },
    { type: "student", cart: ["Coffee Maker", "Desk Chair"] }
];

for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
  let cartTotal = 0;

  for (const itemName of customer.cart) {
    const product = products.find(p => p.name === itemName);
    if (product && product.inventoryCount > 0) {
      cartTotal += product.discountedPrice;
      product.inventoryCount--; 
    }
  }

  const additionalDiscountRate = getCustomerDiscount(customer.type);
  const finalTotal = cartTotal * (1 - additionalDiscountRate);

  console.log(`Customer ${i + 1} (${customer.type}): Total cost is $${finalTotal.toFixed(2)}`);
}
for (const key in singleProduct) {
  if (Object.hasOwnProperty.call(singleProduct, key)) {
    const value = singleProduct[key];
    const displayValue = (typeof value === 'number' && key.toLowerCase().includes('price'))
                         ? `$${value.toFixed(2)}`
                         : value;
    console.log(`  ${key}: ${displayValue}`);
  }
}
console.log("\n--- Step 7: All Product Info After Inventory Updates ---");
for (const product of products) {
  console.log(`\nProduct: ${product.name}`);
  // Use Object.entries to get [key, value] pairs and destructure them
  for (const [key, value] of Object.entries(product)) {
      console.log(`  - ${key}: ${value}`);
  }
}