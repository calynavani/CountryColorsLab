class Country{
 constructor(name, language, helloWorld, flagColors){

this.name = name;
this.language = language;
this.helloWorld = helloWorld;
this.flagColors = flagColors;
     }
  DisplayColors(){
      let color1, color2, color3;

    color1 = document.getElementById("Color1");
    color2 = document.getElementById("Color2");
    color3 = document.getElementById("Color3");
    color1.style.backgroundColor = this.flagColors[0];
    color2.style.backgroundColor = this.flagColors[1];
    color3.style.backgroundColor = this.flagColors[2];
    
    document.getElementById("CountryName").innerText = this.name;
    document.getElementById("OfficialLanguage").innerText = this.language;
    document.getElementById("HelloWorld").innerText = this.helloWorld;

    }
            

}
let usa = new Country("USA", "English","Hello World", ["red", "white", "blue"]);
let spain = new Country("Spain", "Spanish", "Hola Mundo",["red","yellow", "red"]);
let france = new Country("France","French","Bonjour le monde",["blue", "white", "red"]);
let japan = new Country("Japan", "Japanese","Kon'nichiwa sekai",["white","red","white"]);
let china = new Country("China", "Mandarin","Nǐ hǎo shìjiè",["yellow", "red", "red"]);

function ChooseCountry(){

    let country;
    let input = document.getElementById("CountryList").value
    //let title = document.getElementById("CountryName");
    //let lang = document.getElementById("OfficialLanguage");
   // let greeting = document.getElementById("HelloWorld");
    
  
    if (input === "USA") {

        //title.innerText = usa.name;
        //langh2.innerText = usa.lang;
        //helwh2.innerText = usa.greeting;
        //usa.displayColors;
        country = usa;
      
    }
    else if (input === "Spain") {
        country = spain;
    }
    else if (input === "France") {
        country = france;
    }
    else if (input === "Japan"){
        country = japan;
    }
    else if (input === "China"){
        country = china;
    }

   country.DisplayColors();
   
   
}

