function Album(title,artist,year){
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.play = function(){
        let x = `The name of the album is ${this.title} by the artist ${this.artist} from the year ${this.year}`;
        console.log(x);
    };
}

let darkside = new Album("Dark side of the Cheese","Pink Mouse", 1971);
darkside.play();