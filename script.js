let tmpstrand = prompt("Enter DNA Sequence(spaces allowed)");
let dnasequence = tmpstrand.toUpperCase();
let dnastrand = tmpstrand.toLowerCase();
localStorage.setItem("dnastrand",dnastrand);
localStorage.setItem("dnasequence",dnasequence);

let mrnastrand = "";
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
    case " ":
      break;
    default:
      mrnastrand=mrnastrand+"(incorrect input)";
  }
}
console.log("mrnastrand =" + mrnastrand)
localStorage.setItem("mrnastrand",mrnastrand);
localStorage.setItem("mrna",mrnastrand.toUpperCase());

let aminoacids="";
for (var i = 0; i < mrnastrand.length; i = i+3) {
  let codon = mrnastrand[i]+mrnastrand[i+1]+mrnastrand[i+2];
  switch(codon){
    default:
      aminoacids = aminoacids+"(incorrect input) ";
    case "uuc": case "uuu":
      aminoacids = aminoacids + "Phe ";
      break;
    case "uua": case "uug": case "cuu": case "cuc": case "cua": case "cug":
      aminoacids = aminoacids + "Leu ";
      break;
    case "ucu": case "ucc": case "uca": case "ucg": case "agu": case "agc":
      aminoacids = aminoacids + "Ser ";
      break;
    case "uau": case "uac":
      aminoacids = aminoacids + "Tyr ";
      break;
    case "uaa": case "uag": case "uga":
      aminoacids = aminoacids + "Stop ";
      break;
    case "ugu": case "ugc":
      aminoacids = aminoacids + "Cys ";
      break;
    case "ugg":
      aminoacids = aminoacids + "Trp ";
      break;
    case "ccu": case "ccc": case "cca": case "ccg":
      aminoacids = aminoacids + "Pro ";
      break;
    case "cau": case "cac":
      aminoacids = aminoacids + "His ";
      break;
    case "caa": case "cag":
      aminoacids = aminoacids + "Gln ";
      break;
    case "cgu": case "cgc": case "cga": case "cgg": case "aga": case "agg":
      aminoacids = aminoacids + "Arg ";
      break;
    case "auu": case "auc": case "aua":
      aminoacids = aminoacids + "Ile ";
      break;
    case "aug":
      aminoacids = aminoacids + "Met ";
      break;
    case "acu": case "acc": case "aca": case "acg":
      aminoacids = aminoacids + "Thr ";
      break;
    case "aau": case "aac":
      aminoacids = aminoacids + "Asn ";
      break;
    case "aaa": case "aag":
      aminoacids = aminoacids + "Lys ";
      break;
    case "guu": case "guc": case "gua": case "gug":
      aminoacids = aminoacids + "Val ";
      break;
    case "gcu": case "gcc": case "gca": case "gcg":
      aminoacids = aminoacids + "Ala ";
      break;
    case "gau": case "gac":
      aminoacids = aminoacids + "Asp ";
      break;
    case "gaa": case "gag":
      aminoacids = aminoacids + "Glu ";
      break;
    case "ggu": case "ggc": case "gga": case "ggg":
      aminoacids = aminoacids + "Gly ";
      break;
  }
}
localStorage.setItem("aminoacids",aminoacids);
console.log("aminoacids =" + aminoacids);
location.assign("3.html");
