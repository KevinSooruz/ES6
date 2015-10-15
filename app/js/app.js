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
        
        console.log(region);
        
    }
    
    for(let region of regions.entries()){
        
        console.log(region);
        
    }
    
    let i = 0;
    for(let region of regions){
        
        console.log(region, i++);
        
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
        
            console.log(`Clé : ${prop} => Valeur : ${region[prop]}`);
        
        }
        
    }
    
}
arr();