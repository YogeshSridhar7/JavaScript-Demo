function init() {
    let images = document.getElementsByTagName("img");
    for( let i =0;i<images.length; i++) {
        img.onclick = () => {
            images[i].setAttribute("src","./Img/" + images[i].id + ".jpg");
            setTimeout( ()=> {
                images[i].setAttribute("src","./Img/" + images[i].id + "blur.jpg");
            },2000);
          };
    }
    
  }
  
  window.onload = init;