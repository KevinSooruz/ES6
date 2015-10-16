"use strict";function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function swap(x,y){var varGlobale="Je suis une variable globale à ma fonction";if(x===y){var _varLocale="Je suis la variable locale si x = y";return void console.log(_varLocale,varGlobale)}var varLocale="Je suis la variable locale si x != y";console.log(varLocale,varGlobale)}function nameAge(name,age){console.log("Je suis "+name+" et j'ai "+age+" ans")}function futurAge(age,yearPlus){console.log("Dans "+yearPlus+" "+afficheYear(yearPlus)+" j'aurais "+calculAge(age,yearPlus)+" ans")}function calculAge(age,yearPlus){return age+yearPlus}function afficheYear(yearPlus){var year="an";if(yearPlus>1){var _year="ans";return _year}return year}function arr(){var regions=["Gironde","Landes","Pyrénées","Dordogne"],_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=regions[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var region=_step.value;console.log("let region of regions",region)}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator["return"]&&_iterator["return"]()}finally{if(_didIteratorError)throw _iteratorError}}var _iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0;try{for(var _step2,_iterator2=regions.entries()[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){var _step2$value=_slicedToArray(_step2.value,2),index=_step2$value[0],region=_step2$value[1];console.log("let [index, region] of regions.entries()",index,region)}}catch(err){_didIteratorError2=!0,_iteratorError2=err}finally{try{!_iteratorNormalCompletion2&&_iterator2["return"]&&_iterator2["return"]()}finally{if(_didIteratorError2)throw _iteratorError2}}var i=0,_iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0;try{for(var _step3,_iterator3=regions[Symbol.iterator]();!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0){var region=_step3.value;console.log("let region of regions + i++",region,i++)}}catch(err){_didIteratorError3=!0,_iteratorError3=err}finally{try{!_iteratorNormalCompletion3&&_iterator3["return"]&&_iterator3["return"]()}finally{if(_didIteratorError3)throw _iteratorError3}}console.log(regions[2]);var regions2=[{dept:33,name:"Gironde"},{dept:40,name:"Landes"},{dept:65,name:"Pyrénées"}],_iteratorNormalCompletion4=!0,_didIteratorError4=!1,_iteratorError4=void 0;try{for(var _step4,_iterator4=regions2[Symbol.iterator]();!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=!0){var region=_step4.value;console.log(region.dept,region.name);for(var prop in region)console.log("var prop in region clé - valeur","Clé : "+prop+" => Valeur : "+region[prop])}}catch(err){_didIteratorError4=!0,_iteratorError4=err}finally{try{!_iteratorNormalCompletion4&&_iterator4["return"]&&_iterator4["return"]()}finally{if(_didIteratorError4)throw _iteratorError4}}}function lambda(){var values=[65,7,78,1,32,66];values.sort(function(a,b){console.log(a-b)})}var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{!_n&&_i["return"]&&_i["return"]()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr))return arr;if(Symbol.iterator in Object(arr))return sliceIterator(arr,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_get=function(_x,_x2,_x3){for(var _again=!0;_again;){var object=_x,property=_x2,receiver=_x3;desc=parent=getter=void 0,_again=!1,null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0!==desc){if("value"in desc)return desc.value;var getter=desc.get;return void 0===getter?void 0:getter.call(receiver)}var parent=Object.getPrototypeOf(object);if(null===parent)return void 0;_x=parent,_x2=property,_x3=receiver,_again=!0}},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();swap(1,3);var nameUser="Kevin",ageUser=28;nameAge(nameUser,ageUser),futurAge(ageUser,3),arr();var ObjLit={initialize:function(){console.log(this),this.display("Init")},display:function(message){console.log(message)}};ObjLit.initialize(),lambda();var Engine2={initialize:function(){var _this=this,elem=document.getElementById("clic");elem.addEventListener("click",function(e){_this.display(e.type)},!1)},display:function(message){alert(message)}};Engine2.initialize();var Person=function(){function Person(name,age){_classCallCheck(this,Person),this.name=name,this.age=age}return _createClass(Person,[{key:"toString",value:function(){return"Hi, my name is "+this.name+" and I'm "+this.age+" year old !"}}]),Person}(),pers=new Person("Kévin",28);console.log(pers.toString());var Developer=function(_Person){function Developer(name,age,langage){_classCallCheck(this,Developer),_get(Object.getPrototypeOf(Developer.prototype),"constructor",this).call(this,name,age),this.langage=langage}return _inherits(Developer,_Person),_createClass(Developer,[{key:"toString",value:function(){return _get(Object.getPrototypeOf(Developer.prototype),"toString",this).call(this)+(" I'm a "+this.langage+" developer !")}}]),Developer}(Person),dev=new Developer("Kévin",28,"Javascript");console.log(dev.toString());var dev2=new Developer("Arnaud",26,"Prestashop");console.log(dev2.toString());