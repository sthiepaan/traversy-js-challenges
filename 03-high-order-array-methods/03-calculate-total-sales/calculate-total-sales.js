function calculateTotalSalesWithTax(products, taxRate) {
	const totalPrice = products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
	const totalPriceTax = (totalPrice * taxRate) / 100;

	return totalPrice + totalPriceTax;
}

module.exports = calculateTotalSalesWithTax;
