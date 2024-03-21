const {read,write} = require("./domasno4Index");

const getAllCars = async() => {
    return await read();
}

const getSingleCar = async(id) => {
    let cars = await read();
    cars.push(newCar);
    await write(cars);
}

const addNewCar = async(newCar) => {
    let cars = await read();
    cars.push(newCar);
    await write(cars);
}

const deleteCar = async(id) => {
    let cars = await read();
    cars = cars.filter((car) => car.id !== id)
    await write(cars);
}

const editCar = async(id, editCars) => {
    let cars =  await read();
    cars = cars.map((car) => {
        if(car.id === id){
            return {
                ...car,
                ...editCars,
            };
        }
        return car;
    });
    await write(cars);
};

module.exports ={
    getAllCars,
    getSingleCar,
    addNewCar,
    deleteCar,
    editCar,
}
