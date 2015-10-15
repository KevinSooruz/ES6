"use strict";
// https://www.wanadev.fr/introduction-a-ecmascript-6-le-javascript-de-demain/

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

let add = function(x, y){
    
    let var1 = typeof(x) === "number" ? x : 0;
    let var2 = typeof(y) === "number" ? y : 0;
    
    if(typeof(y) !== "number"){
        
        console.log("y is a string");
        
    }
    
    return x + y;
    
};
console.log("Number", add(3, 1));
console.log("String", add(3, "test"));