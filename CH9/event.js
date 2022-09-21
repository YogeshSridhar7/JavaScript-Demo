let images = document.getElementsByTagName("img");

for (let image of images){
     
    image.onclick = clear;
}

function clear(e){
    let img = e.target;
    let id = img.id;
    img.setAttribute("src", "./" + id + ".jpg");
    setTimeout(showBlur, 2000,img)
}
 function showBlur(img){
    
    img.setAttribute("src","./" + img.id +"blur.jpg");
 }


