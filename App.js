const {Animal, User, eventUserName, eventUserTitle, eventAnimalName, eventAnimalKind} = require("./User")

const myUser = new User("Andrew", "Mr.");
const myAnimal = [new Animal("Jeck", "Dog"), new Animal("Tom", "Cat")]

myUser.on(eventUserName, function(changeSet){
    console.log("User name update");
    console.dir(changeSet);
})

myUser.on(eventUserTitle, function(changeSet){
    console.log("User title update");
    console.dir(changeSet);
})

myAnimal[0].on(eventAnimalName, function(changeSet){
    console.log("Animal name user`s update");
    console.dir(changeSet);
})

myAnimal[1].on(eventAnimalName, function(changeSet){
    console.log("Animal name user`s update");
    console.dir(changeSet);
})

myAnimal[0].on(eventAnimalKind, function(changeSet){
    console.log("Animal kind user`s update");
    console.dir(changeSet);
})


myAnimal[1].on(eventAnimalKind, function(changeSet){
    console.log("Animal kind user`s update");
    console.dir(changeSet);
})




myUser.setName("Peter");
myUser.setTitle("Sir");
myAnimal[0].setAnimalName("Rich");
myAnimal[0].setAnimalKind("Mouse");
