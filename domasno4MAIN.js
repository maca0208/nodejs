const {
    getAllCars,
    getSingleCar,
    addNewCar,
    deleteCar,
    editCar
} = require("./domasno4CRUD");

let cars;

(async () => {
    try{
        await addNewCar({brand: "Mercedes", year: 2017, color:"Black", id: 0});
        await addNewCar({brand: "Mustang", year: 1967, color:"Red", id: 1});
        await addNewCar({brand: "Audi", year: 2010, color:"White", id: 2});

        await deleteCar(1);

        cars = await getAllCars();
        console.log(cars);

        const car = await getSingleCar(2);
        console.log(car);

        await editCar (0, {brand:"Mercedes-Benz", year: 2020});
        
    } catch (err){
        console.log(err);
    }
    finally {
        console.log("Code has finished executing");
    }
})();