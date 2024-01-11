// dersde yazdigimiz kimi gender yoxlayan proqram yazin
//     bu taski hem if else hemde  switch case ile yazin

let name = prompt("adinizi daxil edin");
let gender = prompt("cinsinizi daxil edin (K veya Q");

switch(gender){
    case "k":
    alert(`Xos gelmisiniz cenab ${name}`);
    break;
    case "K":
    alert(`Xos gelmisiniz cenab ${name}`);
    break;
    case "q":
    alert(`Xos gelmisiniz Xanim ${name}`);
    break;
    case "Q":
    alert(`Xos gelmisiniz xanim ${name}`);
    break;
}