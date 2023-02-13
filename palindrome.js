function palindrome(str) {
    const awal = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();;
    const balik = awal.split("").reverse().join("");
    console.log(awal, balik)
    let hasil = 0;
    for(let i=0;i<awal.length;i++){
      if(balik[i] !== awal[i]){
        hasil = 0;
        break;
      }else{ 
        hasil = 1;
      }
    }
    if(hasil === 1){
      return true;
    }else{
      return false
    }
  }
  
  console.log(palindrome("almostomla"));