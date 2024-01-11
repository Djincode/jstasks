// heftenin gunlerini tapan proqram yaziriq
// prompt ile heftenin necenci gunu oldugunu aliriq (1-7 arasinda reqem olmalidir)
// eger deyer === 1 ekrana yazdirin bu gun bazar ertesidir ve.s

// bu taski hem if else hemde  switch case ile yazin


let day = prompt("heftenin necenci gunu oldugunu daxil edin");

if(day=== "1"){
    alert("Bazar ertesi");

}else if(day === "2"){
    alert("cersembe axsami");
} else if (day === "3") {
    alert("Cersembe");
}else if(day === "4") {
    alert("Cume axsami")
} else if(day === "5"){
    alert("Cume")
}else if(day === "6"){
    alert("Senbe")
} else if(day === "7"){
    alert("Bazar")
}