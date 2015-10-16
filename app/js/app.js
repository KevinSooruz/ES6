"use strict";
// https://www.wanadev.fr/introduction-a-ecmascript-6-le-javascript-de-demain/
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Nouveaut%C3%A9s_et_historique_de_JavaScript/Support_ECMAScript_6_par_Mozilla

///// Variables locales / globales /////
function swap(x, y){
    
    const varGlobale = `Je suis une variable globale à ma fonction`;
    
    if(x === y){
        
        let varLocale = `Je suis la variable locale si x = y`;
        
        console.log(varLocale, varGlobale);
        
        return;
        
    }
    
    let varLocale = `Je suis la variable locale si x != y`;
    
    console.log(varLocale, varGlobale);
    
}
swap(1, 3);

///// Function nameAge /////
let nameUser = "Kevin";
let ageUser = 28;

function nameAge(name, age){
    
    console.log(`Je suis ${name} et j'ai ${age} ans`);
    
}
nameAge(nameUser, ageUser);

///// function futurAge /////
function futurAge(age, yearPlus){
    
    console.log(`Dans ${yearPlus} ${afficheYear(yearPlus)} j'aurais ${calculAge(age, yearPlus)} ans`);
    
}
futurAge(ageUser, 3);

// calcul de l'age
function calculAge(age, yearPlus){
    
    return age + yearPlus;
    
}

// Modification de l'orthographe en fonction du nombre d'années demandées
function afficheYear(yearPlus){
    
    let year = "an";
    
    if(yearPlus > 1){
        
        let year = "ans";
        
        return year;
        
    }
    
    return year;
    
}

///// Parcourir un tableau /////
function arr(){
    
    let regions = ["Gironde", "Landes", "Pyrénées", "Dordogne"];
    
    for(let region of regions){
        
        console.log("let region of regions", region);
        
    }
    
    for(let [index, region] of regions.entries()){
        
        console.log("let [index, region] of regions.entries()", index, region);
        
    }
    
    let i = 0;
    for(let region of regions){
        
        console.log("let region of regions + i++", region, i++);
        
    }
    
    console.log(regions[2]);
    
    let regions2 = [
        
        {
            dept: 33,
            name: "Gironde"
        },
        {
            dept: 40,
            name: "Landes"
        },
        {
            dept: 65,
            name: "Pyrénées"
        }
        
    ];
    
    // On parcour le tableau regions2
    for(let region of regions2){
        
        console.log(region.dept, region.name);
        
        // Pour chacune des entrées du tableau régions2 on parcour ses entrée et on affiche clé => valeur
        for(var prop in region){
        
            console.log("var prop in region clé - valeur", `Clé : ${prop} => Valeur : ${region[prop]}`);
        
        }
        
    }
    
}
arr();

///// Objets littéraux /////
let ObjLit = {
    
    initialize(){
        
        console.log(this);
        this.display("Init");
        
    },
    display(message){
        
        console.log(message);
        
    }
    
};
ObjLit.initialize();

///// Fonctions lambda /////
function lambda(){
    
    let values = [65, 7, 78, 1, 32, 66];
    
    values.sort((a, b) => {
            
        console.log(a - b);
            
    });
    
}
lambda();

let Engine2 = {
    
    initialize(){
        
        let elem = document.getElementById("clic");
        
        elem.addEventListener("click", (e) => {
            
            this.display(e.type);
            
        }, false);
        
    },
    
    display(message){
        
        alert(message);
        
    }
    
};
Engine2.initialize();

///// Classes /////
class Person{
    
    constructor(name, age){
        
        this.name = name;
        this.age = age;
        
    }
    
    toString(){
        
        return `Hi, my name is ${this.name} and I'm ${this.age} year old !`;
        
    }
    
}
let pers = new Person("Kévin", 28);
console.log(pers.toString());

///// Héritage /////
class Developer extends Person{
    
    constructor(name, age, langage){
        
        super(name, age);
        this.langage = langage;
        
    }
    
    toString(){
        
        return super.toString() + ` I'm a ${this.langage} developer !`;
        
    }
    
}
let dev = new Developer("Kévin", 28, "Javascript");
console.log(dev.toString());

let dev2 = new Developer("Arnaud", 26, "Prestashop");
console.log(dev2.toString());