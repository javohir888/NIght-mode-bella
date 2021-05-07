let circle = document.querySelector(".circle");
let knock = document.querySelector(".knock");
let insta = document.querySelector(".insta");



circle.addEventListener("click", ()=> {
    circle.classList.toggle("go-toggle");
    knock.classList.toggle("go-knock");
    insta.classList.toggle("go-insta");
});

insta.addEventListener("click", ()=> {
    insta.classList.toggle("go-insta");
})












































// function Dog (name, age, zoti) {
//     this.name = name;
//     this.age = age;
//     this.zoti = zoti;
// }

// let artos = new Dog("Artos", 4, "Alabay");
// let charli = new Dog("Charli", 3, "tozi");

// console.log(charli.age);

// Dog.prototype.bark = function() {
//     console.log("WOW");
// }

// console.log(artos.bark());
// console.log(charli.bark());