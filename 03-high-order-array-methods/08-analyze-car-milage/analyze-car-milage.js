function analyzeCarMileage(cars) {
	let totalMileage = 0;
	let highestMileageCar, lowestMileageCar;

	for (const car of cars) {
		totalMileage += car.mileage;

		if (!highestMileageCar || highestMileageCar.mileage < car.mileage) {
			highestMileageCar = car;
		} else {
			lowestMileageCar = car;
		}
	}

	return {
		totalMileage,
		averageMileage: totalMileage / cars.length,
		highestMileageCar,
		lowestMileageCar,
	};
}

module.exports = analyzeCarMileage;
