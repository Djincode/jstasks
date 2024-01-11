// heftenin gunlerini tapan proqram yaziriq
// prompt ile heftenin necenci gunu oldugunu aliriq (1-7 arasinda reqem olmalidir)
// eger deyer === 1 ekrana yazdirin bu gun bazar ertesidir ve.s

// bu taski hem if else hemde  switch case ile yazin

let day = prompt("Heftenin necenci gunu oldugunu qeyd edin");

switch (day) {
    case "1":
    alert('Bazar Ertesi');
    break;
    case "2":
    alert('Cersembe Axsami');
    break;
    case "3":
    alert('Cersembe');
    break;
    case "4":
    alert('Cume Axsami');
    break;
    case "5":
    alert('Cume');
    break;
    case "6":
    alert('Senbe');
    break;
    case "7":
    alert('Bazar');
    break;

    default:
    alert("gunu daxil edin")
}