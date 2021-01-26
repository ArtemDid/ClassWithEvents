const { EventEmitter } = require("events");

const eventUserName = "eventUserName";
const eventUserTitle = "eventUserTitle";
const eventAnimalName = "eventAnimalName";
const eventAnimalKind = "eventAnimalKind";

class User extends EventEmitter {
    constructor(name, title) {
        super();

        this.name = name;
        this.title = title;
    }

    setName = (name) => {
        let oldName = this.name;
        let newName = name;
        this.name = name;

        //еще отправляем то, что может быть полезно получателю события
        this.emit(eventUserName, {
            oldName: oldName,
            newName: newName
        })
    }

    setTitle = (title) => {
        let oldTitle = this.title;
        let newTitle = title;
        this.title = title;

        this.emit(eventUserTitle, {
            oldTitle: oldTitle,
            newTitle: newTitle
        })
    }
}

class Animal extends User {

    constructor(name, kind) {
        super();

        this.name = name;
        this.kind = kind;

    }

    setAnimalName = (name) => {

        let oldAnimalName = this.name;
        let newAnimalName = name;
        this.name = name;

        this.emit(eventAnimalName, {
            oldAnimalName: oldAnimalName,
            newAnimalName: newAnimalName,
            info: `The user now has an animal named ${newAnimalName}.`
        })

    }

    setAnimalKind = (kind) => {

        let oldAnimalKind = this.kind;
        let newAnimalKind = kind;
        this.kind = kind;

        this.emit(eventAnimalKind, {
            oldAnimalKind: oldAnimalKind,
            newAnimalKind: newAnimalKind,
            info: `The user now has an animal ${newAnimalKind}.`

        })

    }

}




module.exports.Animal = Animal;
module.exports.User = User;

module.exports.eventUserName = eventUserName;
module.exports.eventUserTitle = eventUserTitle;
module.exports.eventAnimalName = eventAnimalName;
module.exports.eventAnimalKind = eventAnimalKind;

