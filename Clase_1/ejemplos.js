class Animal {
    constructor(name){
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
   const animal = new Animal('Kratos');
   console.log(animal.name);  