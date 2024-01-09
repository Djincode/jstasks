
let birthdate = prompt("Dogum tarixinizi (il-ay-gun) daxil edin");

let birthdateconvert = new Date(birthdate);

let today = new Date();

let numofdays = Math.floor((today - birthdateconvert) / (1000 * 60 * 60 * 24));

alert("bu gune qeder yasadiginiz gun sayi: " + numofdays + "gün");