function ordonne(tab1) {
  var tab2 = [tab1[0]];
  for (let i = 1; i < tab1.length; i++) {
    var j = 0;
    while (tab1[i] > tab2[j]) {
      j += 1;
    }
    tab2.splice(j, 0, tab1[i]);
  }
  return tab2;
}

var tab1 = [0, 5, 3, 7, 1, 8, 4];

console.log(ordonne(tab1));
