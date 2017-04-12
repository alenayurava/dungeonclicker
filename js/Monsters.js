var cave = {
	1: {x:3, y:210, scaleX:1, scaleY:1, width:65, height:65, texture:'cave2', textureExtra:'cave2', lock:'', monster:'', maxHealth:30, resource:'goldLittle'},
	2: {x:3, y:277, scaleX:1, scaleY:1, width:65, height:65, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'', maxHealth:30, resource:'goldLittle'},
	3: {x:48, y:142, scaleX:1, scaleY:1, width:160, height:65, texture:'cave3', textureExtra:'cave1', lock:'silverLock', monster:'kingSnake', maxHealth:560},
	4: {x:69, y:210, scaleX:1, scaleY:1, width:95, height:130, texture:'cave3', textureExtra:'cave1', lock:'silverLock', monster:'ghost', maxHealth:400},
	5: {x:40, y:345, scaleX:1, scaleY:1, width:125, height:100, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'', maxHealth:130, resource:'goldBig'},
	6: {x:151, y:40, scaleX:1, scaleY:1, width:100, height:100, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'', maxHealth:60, resource:'goldMiddle'},
	7: {x:253, y:75, scaleX:1, scaleY:1, width:65, height:65, texture:'cave3', textureExtra:'cave2', lock:'goldenLock', monster:'', maxHealth:90, resource:'goldLittle'},
	8: {x:210, y:142, scaleX:0.5, scaleY:0.5, width:65, height:65, texture:'cave3', textureExtra:'cave1', lock:'silverLock', monster:'beholder', maxHealth:64},
	9: {x:277, y:142, scaleX:1, scaleY:1, width:65, height:65, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'blob', maxHealth:64},
	10: {x:166, y:210, scaleX:1, scaleY:1, width:100, height:100, texture:'cave3', textureExtra:'cave1', lock:'silverLock', monster:'halfaGolem', maxHealth:275},
	11: {x:166, y:312, scaleX:0.7, scaleY:0.7, width:100, height:65, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'', maxHealth:80, resource:'goldMiddle'},
	12: {x:166, y:379, scaleX:1, scaleY:1, width:65, height:65, texture:'cave3', textureExtra:'cave2', lock:'goldenLock', monster:'', maxHealth:80, resource:'goldLittle'},
	13: {x:268, y:210, scaleX:1, scaleY:1, width:65, height:130, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'giantWorm', maxHealth:95},
	14: {x:334, y:210, scaleX:1, scaleY:1, width:65, height:100, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'angryRectangularJellyfish', maxHealth:80},
	15: {x:268, y:342, scaleX:1, scaleY:1, width:100, height:100, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'halfaGolem', maxHealth:80}
}

var library = {
	1: {x:3, y:210, scaleX:1, scaleY:1, width:65, height:65, texture:'cave2', textureExtra:'cave2', lock:'', monster:'', maxHealth:30, resource:'goldLittle'},
	2: {x:3, y:277, scaleX:1, scaleY:1, width:65, height:65, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'', maxHealth:30, resource:'goldLittle'},
	3: {x:48, y:142, scaleX:1, scaleY:1, width:160, height:65, texture:'cave3', textureExtra:'cave1', lock:'silverLock', monster:'kingSnake', maxHealth:560},
	4: {x:69, y:210, scaleX:1, scaleY:1, width:95, height:130, texture:'cave3', textureExtra:'cave1', lock:'silverLock', monster:'ghost', maxHealth:400},
	5: {x:40, y:345, scaleX:1, scaleY:1, width:125, height:100, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'', maxHealth:130, resource:'goldBig'},
	6: {x:151, y:40, scaleX:1, scaleY:1, width:100, height:100, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'', maxHealth:60, resource:'goldMiddle'},
	7: {x:253, y:75, scaleX:1, scaleY:1, width:65, height:65, texture:'cave3', textureExtra:'cave2', lock:'goldenLock', monster:'', maxHealth:90, resource:'goldLittle'},
	8: {x:210, y:142, scaleX:0.5, scaleY:0.5, width:65, height:65, texture:'cave3', textureExtra:'cave1', lock:'silverLock', monster:'beholder', maxHealth:64},
	9: {x:277, y:142, scaleX:1, scaleY:1, width:65, height:65, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'blob', maxHealth:64},
	10: {x:166, y:210, scaleX:1, scaleY:1, width:100, height:100, texture:'cave3', textureExtra:'cave1', lock:'silverLock', monster:'halfaGolem', maxHealth:275},
	11: {x:166, y:312, scaleX:0.7, scaleY:0.7, width:100, height:65, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'', maxHealth:80, resource:'goldMiddle'},
	12: {x:166, y:379, scaleX:1, scaleY:1, width:65, height:65, texture:'cave3', textureExtra:'cave2', lock:'goldenLock', monster:'', maxHealth:80, resource:'goldLittle'},
	13: {x:268, y:210, scaleX:1, scaleY:1, width:65, height:130, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'giantWorm', maxHealth:95},
	14: {x:334, y:210, scaleX:1, scaleY:1, width:65, height:100, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'angryRectangularJellyfish', maxHealth:80},
	15: {x:268, y:342, scaleX:1, scaleY:1, width:100, height:100, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'halfaGolem', maxHealth:80}
}

var swamp = {
	1: {x:3, y:210, scaleX:1, scaleY:1, width:65, height:65, texture:'cave2', textureExtra:'cave2', lock:'', monster:'', maxHealth:30, resource:'goldLittle'},
	2: {x:3, y:277, scaleX:1, scaleY:1, width:65, height:65, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'', maxHealth:30, resource:'goldLittle'},
	3: {x:48, y:142, scaleX:1, scaleY:1, width:160, height:65, texture:'cave3', textureExtra:'cave1', lock:'silverLock', monster:'kingSnake', maxHealth:560},
	4: {x:69, y:210, scaleX:1, scaleY:1, width:95, height:130, texture:'cave3', textureExtra:'cave1', lock:'silverLock', monster:'ghost', maxHealth:400},
	5: {x:40, y:345, scaleX:1, scaleY:1, width:125, height:100, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'', maxHealth:130, resource:'goldBig'},
	6: {x:151, y:40, scaleX:1, scaleY:1, width:100, height:100, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'', maxHealth:60, resource:'goldMiddle'},
	7: {x:253, y:75, scaleX:1, scaleY:1, width:65, height:65, texture:'cave3', textureExtra:'cave2', lock:'goldenLock', monster:'', maxHealth:90, resource:'goldLittle'},
	8: {x:210, y:142, scaleX:0.5, scaleY:0.5, width:65, height:65, texture:'cave3', textureExtra:'cave1', lock:'silverLock', monster:'beholder', maxHealth:64},
	9: {x:277, y:142, scaleX:1, scaleY:1, width:65, height:65, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'blob', maxHealth:64},
	10: {x:166, y:210, scaleX:1, scaleY:1, width:100, height:100, texture:'cave3', textureExtra:'cave1', lock:'silverLock', monster:'halfaGolem', maxHealth:275},
	11: {x:166, y:312, scaleX:0.7, scaleY:0.7, width:100, height:65, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'', maxHealth:80, resource:'goldMiddle'},
	12: {x:166, y:379, scaleX:1, scaleY:1, width:65, height:65, texture:'cave3', textureExtra:'cave2', lock:'goldenLock', monster:'', maxHealth:80, resource:'goldLittle'},
	13: {x:268, y:210, scaleX:1, scaleY:1, width:65, height:130, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'giantWorm', maxHealth:95},
	14: {x:334, y:210, scaleX:1, scaleY:1, width:65, height:100, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'angryRectangularJellyfish', maxHealth:80},
	15: {x:268, y:342, scaleX:1, scaleY:1, width:100, height:100, texture:'cave3', textureExtra:'cave2', lock:'silverLock', monster:'halfaGolem', maxHealth:80}
}