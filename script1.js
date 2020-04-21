let tmpstrand = prompt("Write 15 DNA bases");
let dnastrand = strand.toLowerCase();
localStorage.setItem("dnastrand",dnastrand);
var mrnastrand;
for (var i = 0; i < dnastrand.length; i++) {
  switch(dnastrand[i]){
    case "a":
      mrnastrand=mrnastrand+"u";
      break;
    case "t":
      mrnastrand=mrnastrand+"a";
      break;
    case "c":
      mrnastrand=mrnastrand+"g";
      break;
    case "g":
      mrnastrand=mrnastrand+"c";
      break;
    default:
      mrnastrand=mrnastrand+"X";
  }
}
localStorage.setItem("mrnastrand",mrnastrand);

