export class User {
    tempName: string;

    tempPhoneNumber: string;

    constructor (private _name: string, private _phoneNumber: string) { 
        this.tempName = _name;
        this.tempPhoneNumber = _phoneNumber;
    }

    set name(value: string) {
        this.tempName = value;
    }

    set phoneNumber(value: string) {
        this.tempPhoneNumber = value;
    }

    get name() {
        return this.tempName;
    }

    get phoneNumber() {
        return this.tempPhoneNumber;
    }

    get originalName() {
        return this._name;
    }

    get originalPhoneNumber() {
        return this._phoneNumber;
    }
}