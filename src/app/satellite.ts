export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = orbitType;
        this.launchDate = launchDate;
        this.orbitType = type;
        this.operational = operational;
    }
}

