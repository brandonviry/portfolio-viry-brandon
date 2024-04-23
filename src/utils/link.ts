const verif_fomat = (lien: string) => {
  if (lien !== "") {
    if (lien[0] == "/") {
      console.log("lien relatif");
    } else if (commences(lien, "https://")) {
      console.log("lien https : ssl");
    }
  }
};

const commences = (lien: string, motif: string) => {
  motif.split("").forEach((elt, index) => {
    if (elt != lien[index]) {
      return false;
    }
  });

  return true;
};

const verif_https = (lien: string) => {
     return commences(lien,"https://")
}

export default verif_https;