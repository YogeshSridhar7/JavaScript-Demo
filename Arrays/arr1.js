let a = [1,2,3,4];
console.log(a[0]);

 let num = a[2];
 console.log(num);

 a[0] = 5;
 console.log(a);

 let length= a.length;
 console.log(length);

function makePhrases(){
    let words = ["24/7", "multi-tear", "30,000 foot", "B-to-B", "win-win"];
    let words2 = ["eat", "sleep", "exercise", "run"];
    let words3 = ["process", "dance", "fly-fly", "vision"];

    let index =  Math.floor(Math.random() * words.length);
    let index2 = Math.floor(Math.random() * words2.length);
    let index3 = Math.floor(Math.random() * words3.length);
 
    return words[index] +" " + words2[index2] + " " + words3[index3] ;

  }
 document.write(makePhrases());
 