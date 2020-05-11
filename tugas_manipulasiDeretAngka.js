function deretAngka(n) {
  var hasilDeretangka = "";
  for(var i=1; i<=n; i++){
    if(i%3 === 0 && i%5 === 0){
      hasilDeretangka += "NIOMIC ";
    }else if(i%3 !== 0 && i%5 === 0){
      hasilDeretangka += "MIC ";
    }else if(i%3 === 0 && i%5 !== 0){
      hasilDeretangka += "NIO ";
    }else{
      hasilDeretangka += i+ " ";
    }
  }
  return hasilDeretangka;
}
console.log(deretAngka(10));
console.log(deretAngka(20));
console.log(deretAngka(30));
