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
for (var i = 0; i < dnastrand.length; i = i+3) {
  let codon = mrnastrand[i]+mrnastrand[i+1]+mrnastrand[i+2];
  switch(codon){
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
