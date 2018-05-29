class User {
    constructor (private _name: string, private _phoneNumber: string) { }

    set name(value: string) {
        this._name = value;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }
}