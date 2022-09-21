let scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

    let costs = [.25, .27, .25, .25, .25, .25,
		.33, .31, .25, .29, .27, .22,
		.31, .25, .25, .33, .21, .25,
		.25, .25, .28, .25, .24, .22,
		.20, .25, .30, .25, .24, .25,
		.25, .25, .27, .25, .26, .29];

function print(scores){
    let max = scores[1];
    let maxIndex = [];
    for( let i=0; i < scores.length; i++){ 
        
        if(scores[i] > max){
            max = scores[i];   
        }
        console.log("Solution #" + i + " has score " + scores[i] + "<br>");
    }
    console.log("Maximum is : " + max + "<br>");

    for( let i=0; i < scores.length; i++){
        if( scores[i]==max){
            maxIndex.push(i);
        }
    }
    console.log("Maximum index is:" + maxIndex);
    return maxIndex;

    // let maximum = Math.max(...scores);
    // let index = scores.indexOf(maximum);
    // document.write("Maximum index is : " + index + "<br>");
}
 print(scores);
 console.log("Total number of solutions : " + scores.length);


function getOptimumSolution(scores, costs, max) {
    let low = 100;
    let index = 0;
    for( let i=0; i < scores.length; i++){
        if( scores[i]==max){
            if( costs[i] < low){
                low = costs[i];
                index=i;
            }
        }
 }
 console.log("Optimum sollution is at index :" + index +"<br>" +"Lowest cost at :" + low +"<br>" + "At score :" + max);
 
}
 let max = print(scores);
getOptimumSolution(scores, costs);
