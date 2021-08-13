export class BoatBuilder {

    withMotor(motorCount, motorBrand) {
        this.hasMotor = true;
        this.motorCount = motorCount;
        this.motorBrand = motorBrand;
        return this;
    }

    witCabin() {
        this.hasCabin = true;
        return this;
    }

    withMotorModel(model) {
        this.motorModel = model;
        return this;
    }

    build() {
      return new Boat({
        hasMotor: this.hasMotor,
        motorCount: this.motorCount,
        motorBrand: this.motorBrand,
        hasCabin: this.hasCabin,
        motorModel: this.motorModel
      })
    }
}

class Boat {
    constructor(params) {
        this.hasMotor = params.hasMotor || false;
        this.motorCount = params.motorCount;
        this.motorBrand = params.motorBrand;
        this.motorModel = params.motorModel;
        this.hasCabin = params.hasCabin;
    }
}

