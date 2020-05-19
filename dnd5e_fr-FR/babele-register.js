
import ActorSheet5eCharacter from "../../systems/dnd5e/module/actor/sheets/character.js";

Hooks.once('init', () => {

	var typeAlignement = {
		"chaotic evil": "Chaotique Mauvais",	
		"chaotic neutral":"Chaotique Neutre",	
		"chaotic good":"Chaotique Bon",	
		"neutral evil":"Neutre Mauvais",	
		"true neutral":"Neutre",	
		"neutral":"Neutre",	
		"neutral good":"Neutre Bon",	
		"lawful evil":"Loyal Mauvais",	
		"lawful neutral":"Loyal Neutre",	
		"lawful good":"Loyal Bon",
		"chaotic good evil":"Chaotique Bon/Mauvais",
		"lawful chaotic evil":"Loyal/Chaotique Mauvais",	
		"unaligned":"Sans alignement"	
	}
		
	var typeCreature = {
		"aberration (shapechanger)":"Aberration (métamorphe)",         
		"aberration":"Aberration",                          
		"beast":"Bête",
		"celestial (titan)":"Céleste (titan)",                  
		"celestial":"Céleste",                          
		"construct":"Créature artificielle",                          
		"dragon":"Dragon",                              
		"elemental":"Élémentaire",                          
		"fey":"Fée",                                
		"fiend (demon)":"Fiélon (démon)",                      
		"fiend (demon, orc)":"Fiélon (démon, orc)",                  
		"fiend (demon, shapechanger)":"Fiélon (démon, métamorphe)",        
		"fiend (devil)":"Fiélon (diable)",                      
		"fiend (devil, shapechanger)":"Fiélon (diable, métamorphe)",        
		"fiend (gnoll)":"Fiélon (gnoll)",                      
		"fiend (shapechanger)":"Fiélon (métamorphe)",                
		"fiend (yugoloth)":"Fiélon (yugoloth)",                    
		"fiend":"Fiélon",                              
		"giant (cloud giant)":"Géant (géant des nuages)",                
		"giant (fire giant)":"Géant (géant du feu)",                  
		"giant (frost giant)":"Géant (géant du givre)",                
		"giant (hill giant)":"Géant (géant des collines)",                  
		"giant (stone giant)":"Géant (géant des pierres)",                
		"giant (storm giant)":"Géant (géant des tempêtes)",                
		"giant":"Géant",                              
		"humanoid (aarakocra)":"Humanoïde (aarakocra)",                
		"humanoid (any race)":"Humanoïde (toute race)",                
		"humanoid (bullywug)":"Humanoïde (brutacien)",                
		"humanoid (dwarf)":"Humanoïde (nain)",                    
		"humanoid (elf)":"Humanoïde (elfe)",                      
		"humanoid (firenewt)":"Humanoïde (triton du feu)",                
		"humanoid (gith)":"Humanoïde (gith)",                    
		"humanoid (gnoll)":"Humanoïde (gnoll)",                    
		"humanoid (gnome)":"Humanoïde (gnome)",                    
		"humanoid (goblinoid)":"Humanoïde (gobelinoïde)",                
		"humanoid (grimlock)":"Humanoïde (torve)",                
		"humanoid (grung)":"Humanoïde (grung)",                    
		"humanoid (human)":"Humanoïde (humain)",                    
		"humanoid (human, shapechanger)":"Humanoïde (humain, métamorphe)",      
		"humanoid (kenku)":"Humanoïde (kenku)",                    
		"humanoid (kobold)":"Humanoïde (kobold)",                  
		"humanoid (kuo-toa)":"Humanoïde (kuo-toa)",                  
		"humanoid (lizardfolk)":"Humanoïde (homme-lézard)",              
		"humanoid (merfolk)":"Humanoïde (homme-poisson)",                  
		"humanoid (orc)":"Humanoïde (orc)",                      
		"humanoid (quaggoth)":"Humanoïde (quaggoth)",                
		"humanoid (sahuagin)":"Humanoïde (sahuagin)",                
		"humanoid (shapechanger)":"Humanoïde (métamorphe)",           
		"humanoid (thri-kreen)":"Humanoïde (thri-kreen)",              
		"humanoid (troglodyte)":"Humanoïde (troglodyte)",              
		"humanoid (xvart)":"Humanoïde (xvart)",                    
		"humanoid (yuan-ti)":"Humanoïde (yuan-ti)",                  
		"humanoid":"Humanoïde",		                            
		"monstrosity (shapechanger)":"Créature monstrueuse (métamorphe)",          
		"monstrosity (shapechanger, yuan-ti)":"Créature monstrueuse (métamorphe, yuan-ti)",
		"monstrosity (titan)":"Créature monstrueuse (titan)",                
		"monstrosity":"Créature monstrueuse",                        
		"ooze":"Vase",                                
		"plant":"Plante",                              
		"swarm of Tiny beasts":"Nuée de bêtes",                
		"undead (shapechanger)":"Mort-vivant (métamorphe)",              
		"undead":"Mort-vivant"        
	};
	
	function rempl(chaine) {
			var regexp = /([0-9]+)/gi; // recherche des valeurs numériques
			if (chaine.includes('ft')) { 
	 	 		chaine = chaine.replace(/ft/gi, 'm'); // toutes les occurences en ft
	 	 		chaine = chaine.replace(/Walk/gi, 'Marche');
	 	 		chaine = chaine.replace(/Fly/gi, 'Vol'); 	 		
	 	 		chaine = chaine.replace(/Swim/gi, 'Nage');
	 	 		chaine = chaine.replace(/Climb/gi, 'Escalade');  
	 			chaine = chaine.replace(/Burrow/gi, 'Creuse');  
	 	 		chaine = chaine.replace((chaine.match(regexp)), parseInt(chaine.match(regexp))*0.3);
  		return chaine;
  	};
	  console.log("non transco =>" + chaine + "<<");
	  return chaine;
	}
	
	function remplSens(chaine) {
		var regexp = /([0-9]+)/gi; // recherche des valeurs numériques
 	 	chaine = chaine.replace(/ft/gi, 'm'); // toutes les occurences en ft
 	 	chaine = chaine.replace(/feet/gi, 'm'); // toutes les occurences en feet (pfff)
 	 	chaine = chaine.replace(/Darkvision/gi, "Vision dans le noir"); 
 	 	chaine = chaine.replace(/Darvision/gi, "Vision dans le noir"); //bug ^^
 		chaine = chaine.replace(/Blindsight/gi, "Vision aveugle");
 		chaine = chaine.replace(/Truesight/gi, "Vision véritable"); 	 		
 		chaine = chaine.replace(/tremorsense/gi, "Perception des vibrations");
 		chaine = chaine.replace((chaine.match(regexp)), parseInt(chaine.match(regexp))*0.3);
 	 	chaine = chaine.replace("(blind beyond this radius)", "(aveugle au-delà de ce rayon)");
		return chaine;
	}

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'dnd5e_fr-FR',
			lang: 'fr',
			dir: 'compendium'
		});

		Babele.get().registerConverters({
			"weight": (value) => { return parseInt(value)/2 },
			"range": (range) => {
				if(range) {
					if(range.units === 'ft') {
						if(range.long) {
							range = mergeObject(range, { long: range.long*0.3 });
						}
						return mergeObject(range, { value: range.value*0.3 });
					}
					if(range.units === 'mi') {
						if(range.long) {
							range = mergeObject(range, { long: range.long*1.5 });
						}
						return mergeObject(range, { value: range.value*1.5 });
					}
					return range;
				}
			},
			"alignement": (alignement) => {
	   			return typeAlignement[alignement.toLowerCase()];
    	},
			"type": (typeC) => {
					return typeCreature[typeC.toLowerCase()];
			},	
			"speed": (testV) => {
					//console.log(JSON.parse(JSON.stringify(testV))); //{value: "Fly 80 ft.", special: "Walk 10 ft."}
					if (testV.special) {
						const testVspecial = testV.special.split('. ');
						var vitesseSpe = '';
						testVspecial.forEach(function(el){
							vitesseSpe = rempl(el) + ' ' + vitesseSpe;
							//console.log(JSON.parse(JSON.stringify(vitesseSpe)));
							}	
						);
						testV = mergeObject(testV, { special: vitesseSpe });
				  }
					const testVval = testV.value.split('. ');
					var vitesse = '';
					testVval.forEach(function(el){
						vitesse = rempl(el) + ' ' + vitesse;
						//console.log(JSON.parse(JSON.stringify(vitesse)));
							}	
					);
					return	mergeObject(testV, { value: vitesse });
			},
			"senses": (sens) => {
				if (sens != null ) {
					//console.log(JSON.parse(JSON.stringify(sens)));
					const sensSplit = sens.split(', ');
					//console.log(JSON.parse(JSON.stringify(sensSplit)));
					var sensTr = '';
					sensSplit.forEach(function(el){
						//console.log(JSON.parse(JSON.stringify(el))); 
						sensTr = remplSens(el) + ' ' + sensTr;
						}	
					);
					return sensTr; 
				}
			}
	});
	CONFIG.DND5E.encumbrance.currencyPerWeight = 100;
	CONFIG.DND5E.encumbrance.strMultiplier = 7.5;
	}
});
