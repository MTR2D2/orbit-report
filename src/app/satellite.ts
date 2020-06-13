export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        name = name;
        type = orbitType;
        launchDate = launchDate;
        orbitType = type;
        operational = operational;
    }
}

