import { BoatBuilder } from "./BoatBuilder.js";

const boat = new BoatBuilder()
    .withMotor(2, 'Kumins')
    .witCabin()
    .withMotorModel(1996)
    .build();

console.log(boat);