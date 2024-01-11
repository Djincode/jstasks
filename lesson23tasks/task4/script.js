// . Bir party var.Bu partyde yaxsi qardaslar ve gozel xanimlar istirak edecek.Eger yas 18den boyukdurse ekrana yazilsin salam salam cenab ve ya xanim istifadeciden gelen ad
// --------------------------------------------------------------------


// istifadeciden alacaqlarimiz
// name,gender,age
// ve burda gender yoxlamasini if else ile age yoxlamasini ise ternary operatoru ile edin...


let name = prompt("Adinizi daxil edin");
let gender = prompt("Cinsiyyetinizi daxil edin(k ya q)");
let age = prompt("Yasinizi daxil edin");
 age >= 18 ? alert("Buyurun Kecin") : alert("Teessufler olsun ki partye girmek ucun yasiniz uygun deyil");

 if(gender==="k" || gender === "K"){
    alert(`Xos geldiniz Cenab ${name} `);
    
} else if(gender=== "q" || gender === "Q") {
    alert(`Xos geldiniz ${name} Xanim `);
}