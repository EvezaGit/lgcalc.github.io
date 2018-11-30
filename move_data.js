var MOVES_RBY = {
	'(No Move)': {
		bp: 0,
		type: 'Normal',
		category: 'Physical'
	},
	'Acid': {
		bp: 40,
		type: 'Poison',
		category: 'Special'
	},
	'Agility': {
		bp: 0,
		type: 'Psychic'
	},
	'Amnesia': {
		bp: 0,
		type: 'Psychic'
	},
	'Aurora Beam': {
		bp: 65,
		type: 'Ice',
		category: 'Special',
		hasSecondaryEffect: true
	},
	'Barrier': {
		bp: 0,
		type: 'Psychic'
	},
	'Bind': {
		bp: 15,
		type: 'Normal'
	},
	'Blizzard': {
		bp: 120,
		type: 'Ice',
		category: 'Special',
		hasSecondaryEffect: true,
		isSpread: true
	},
	'Body Slam': {
		bp: 85,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true
	},
	'Bone Club': {
		bp: 65,
		type: 'Ground',
		category: 'Physical',
		hasSecondaryEffect: true
	},
	'Bubble Beam': {
		bp: 65,
		type: 'Water',
		category: 'Special'
	},
	'Clamp': {
		bp: 35,
		type: 'Water'
	},
	'Crabhammer': {
		bp: 90,
		type: 'Water',
		category: 'Physical',
		makesContact: true,
		alwaysCrit: true
	},
	'Confuse Ray': {
		bp: 0,
		type: 'Ghost'
	},
	'Defense Curl': {
		bp: 0,
		type: 'Normal'
	},
	'Dig': {
		bp: 100,
		type: 'Ground',
		makesContact: true
	},
	'Disable': {
		bp: 0,
		type: 'Normal'
	},
	'Double Kick': {
		bp: 30,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		isTwoHit: true
	},
	'Double-Edge': {
		bp: 100,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		hasRecoil: 25
	},
	'Double Team': {
		bp: 0,
		type: 'Normal'
	},
	'Dream Eater': {
		bp: 100,
		type: 'Psychic',
		category: 'Special',
		givesHealth: true,
		percentHealed: 0.5
	},
	'Drill Peck': {
		bp: 80,
		type: 'Flying',
		category: 'Physical',
		makesContact: true
	},
	'Earthquake': {
		bp: 100,
		type: 'Ground',
		category: 'Physical',
		isSpread: true
	},
	'Explosion': {
		bp: 170,
		type: 'Normal',
		category: 'Physical',
		isSpread: true
	},
	'Fire Blast': {
		bp: 120,
		type: 'Fire',
		category: 'Special',
		hasSecondaryEffect: true
	},
	'Fire Punch': {
		bp: 75,
		type: 'Fire',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isPunch: true
	},
	'Fire Spin': {
		bp: 15,
		type: 'Fire',
		category: 'Special'
	},
	'Flamethrower': {
		bp: 95,
		type: 'Fire',
		category: 'Special',
		hasSecondaryEffect: true
	},
	'Fly': {
		bp: 70,
		type: 'Flying',
		category: 'Physical',
		makesContact: true
	},
	'Fury Swipes': {
		bp: 18,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		isMultiHit: true
	},
	'Glare': {
		bp: 0,
		type: 'Normal'
	},
	'Gust': {
		bp: 40,
		type: 'Normal',
		category: 'Special'
	},
	'Haze': {
		bp: 0,
		type: 'Ice'
	},
	'High Jump Kick': {
		bp: 85,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		hasRecoil: 'crash'
	},
	'Hydro Pump': {
		bp: 120,
		type: 'Water',
		category: 'Special'
	},
	'Hyper Beam': {
		bp: 150,
		type: 'Normal',
		category: 'Special'
	},
	'Hyper Fang': {
		bp: 80,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true
	},
	'Ice Beam': {
		bp: 95,
		type: 'Ice',
		category: 'Special',
		hasSecondaryEffect: true
	},
	'Ice Punch': {
		bp: 75,
		type: 'Ice',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isPunch: true
	},
	'Jump Kick': {
		bp: 70,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		hasRecoil: 'crash'
	},
	'Leech Life': {
		bp: 20,
		type: 'Bug',
		category: 'Physical',
		makesContact: true,
		givesHealth: true,
		percentHealed: 0.5
	},
	'Leech Seed': {
		bp: 0,
		type: 'Grass'
	},
	'Light Screen': {
		bp: 0,
		type: 'Psychic'
	},
	'Lovely Kiss': {
		bp: 0,
		type: 'Normal'
	},
	'Mega Drain': {
		bp: 40,
		type: 'Grass',
		givesHealth: true,
		percentHealed: 0.5
	},
	'Mirror Move': {
		bp: 0,
		type: 'Flying'
	},
	'Night Shade': {
		bp: 100,
		type: 'Ghost',
		category: 'Special'
	},
	'Pin Missile': {
		bp: 14,
		type: 'Bug',
		category: 'Physical',
		isMultiHit: true
	},
	'Psychic': {
		bp: 90,
		type: 'Psychic',
		category: 'Special',
		hasSecondaryEffect: true
	},
	'Quick Attack': {
		bp: 40,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		hasPriority: true
	},
	'Razor Leaf': {
		bp: 55,
		type: 'Grass',
		category: 'Physical',
		alwaysCrit: true
	},
	'Recover': {
		bp: 0,
		type: 'Normal'
	},
	'Reflect': {
		bp: 0,
		type: 'Psychic'
	},
	'Rest': {
		bp: 0,
		type: 'Psychic'
	},
	'Roar': {
		bp: 0,
		type: 'Normal'
	},
	'Rock Slide': {
		bp: 75,
		type: 'Rock',
		category: 'Physical',
		hasSecondaryEffect: true,
		isSpread: true
	},
	'Rock Throw': {
		bp: 50,
		type: 'Rock',
		category: 'Physical'
	},
	'Seismic Toss': {
		bp: 100,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true
	},
	'Self-Destruct': {
		bp: 130,
		type: 'Normal',
		category: 'Physical',
		isSpread: true
	},
	'Sing': {
		bp: 0,
		type: 'Normal'
	},
	'Sky Attack': {
		bp: 200,
		type: 'Flying',
		category: 'Physical',
		hasSecondaryEffect: true
	},
	'Skull Bash': {
		bp: 100,
		type: 'Normal',
		category: 'Physical',
		makesContact: true
	},
	'Slash': {
		bp: 70,
		type: 'Normal',
		alwaysCrit: true,
		makesContact: true
	},
	'Sludge': {
		bp: 65,
		type: 'Poison',
		category: 'Special'
	},
	'Soft-Boiled': {
		bp: 0,
		type: 'Normal'
	},
	'Spore': {
		bp: 0,
		type: 'Grass'
	},
	'Struggle': {
		bp: 50,
		type: 'Normal',
		category: 'Physical',
		hasRecoil: 50
	},
	'Submission': {
		bp: 80,
		type: 'Fighting',
		makesContact: true,
		hasRecoil: 25
	},
	'Substitute': {
		bp: 0,
		type: 'Normal'
	},
	'Super Fang': {
		bp: 0,
		type: 'Normal',
		makesContact: true
	},
	'Surf': {
		bp: 95,
		type: 'Water',
		category: 'Special',
		isSpread: true
	},
	'Swift': {
		bp: 60,
		type: 'Normal',
		category: 'Special',
		isSpread: true
	},
	'Swords Dance': {
		bp: 0,
		type: 'Normal'
	},
	'Tackle': {
		bp: 35,
		type: 'Normal',
		category: 'Physical',
		makesContact: true
	},
	'Take Down': {
		bp: 90,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		hasRecoil: 25
	},
	'Thrash': {
		bp: 90,
		type: 'Normal',
		category: 'Physical',
		makesContact: true
	},
	'Thunder': {
		bp: 120,
		type: 'Electric',
		category: 'Special',
		hasSecondaryEffect: true
	},
	'Thunderbolt': {
		bp: 95,
		type: 'Electric',
		category: 'Special',
		hasSecondaryEffect: true
	},
	'Thunder Punch': {
		bp: 75,
		type: 'Electric',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isPunch: true
	},
	'Thunder Wave': {
		bp: 0,
		type: 'Electric'
	},
	'Toxic': {
		bp: 0,
		type: 'Poison'
	},
	'Tri Attack': {
		bp: 80,
		type: 'Normal',
		category: 'Special'
	},
	'Twineedle': {
		bp: 25,
		type: 'Bug',
		isTwoHit: true
	},
	'Waterfall': {
		bp: 80,
		type: 'Water',
		category: 'Physical',
		makesContact: true
	},
	'Water Gun': {
		bp: 40,
		type: 'Water',
		category: 'Special'
	},
	'Wing Attack': {
		bp: 35,
		type: 'Flying',
		category: 'Physical',
		makesContact: true
	},
	'Wrap': {
		bp: 15,
		type: 'Normal'
	},
	'Whirlwind': {
		bp: 0,
		type: 'Normal'
	}
};

var MOVES_GSC = $.extend(true, {}, MOVES_RBY, {
	'Bite': {
		bp: 60,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true
	},
	'Crabhammer': {alwaysCrit: false},
	'Crunch': {
		bp: 80,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		isBite: true
	},
	'Destiny Bond': {
		bp: 0,
		type: 'Ghost'
	},
	'Dig': {bp: 60},
	'Double-Edge': {bp: 120},
	'Encore': {
		bp: 0,
		type: 'Normal'
	},
	'Explosion': {bp: 250},
	'Gust': {type: 'Flying'},
	'Headbutt': {
		bp: 70,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true
	},
	'Iron Tail': {
		bp: 100,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true
	},
	'Megahorn': {
		bp: 120,
		type: 'Bug',
		category: 'Physical',
		makesContact: true
	},
	'Protect': {
		bp: 0,
		type: 'Normal'
	},
	'Razor Leaf': {alwaysCrit: false},
	'Self-Destruct': {bp: 200},
	'Shadow Ball': {
		bp: 80,
		type: 'Ghost',
		category: 'Special',
		hasSecondaryEffect: true,
		isBullet: true
	},
	'Slash': {alwaysCrit: false},
	'Sludge Bomb': {
		bp: 90,
		type: 'Poison',
		category: 'Special',
		hasSecondaryEffect: true,
		isBullet: true
	},
	'Solar Beam': {
		bp: 120,
		type: 'Grass',
		category: 'Special'
	},
	'Struggle': {type: 'None', hasRecoil: 25},
	'Tri Attack': {hasSecondaryEffect: true},
	'Wing Attack': {bp: 60},
});

/*delete MOVES_GSC['Acid'];
delete MOVES_GSC['Mega Drain'];*/

var MOVES_ADV = $.extend(true, {}, MOVES_GSC, {
	'Bonemerang': {
		bp: 50,
		type: 'Ground',
		category: 'Physical',
		isTwoHit: true
	},
	'Brick Break': {
		bp: 75,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true
	},
	'Bulk Up': {
		bp: 0,
		type: 'Fighting'
	},
	'Calm Mind': {
		bp: 0,
		type: 'Psychic'
	},
	'Double-Edge': {hasRecoil: 33},
	'Facade': {
		bp: 70,
		type: 'Normal',
		category: 'Physical',
		makesContact: true
	},
	'Fake Out': {
		bp: 40,
		type: 'Normal',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		hasPriority: true
	},
	'Heat Wave': {
		bp: 100,
		type: 'Fire',
		category: 'Special',
		hasSecondaryEffect: true,
		isSpread: true
	},
	'Helping Hand': {
		bp: 0,
		type: 'Normal'
	},
	'Low Kick': {
		bp: 1,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true
	},
	'Superpower': {
		bp: 120,
		type: 'Fighting',
		category: 'Physical',
		makesContact: true,
		dropsStats: 1
	},
	'Taunt': {
		bp: 0,
		type: 'Dark'
	},
	'Will-O-Wisp': {
		bp: 0,
		type: 'Fire'
	},
	'Yawn': {
		bp: 0,
		type: 'Normal'
	}
});

var MOVES_DPP = $.extend(true, {}, MOVES_ADV, {
	'Air Slash': {
		bp: 75,
		type: 'Flying',
		category: 'Special',
		hasSecondaryEffect: true
	},
	'Aqua Jet': {
		bp: 40,
		type: 'Water',
		category: 'Physical',
		makesContact: true,
		hasPriority: true
	},
	'Bug Buzz': {
		bp: 90,
		type: 'Bug',
		category: 'Special',
		hasSecondaryEffect: true,
		isSound: true
	},
	'Dark Pulse': {
		bp: 80,
		type: 'Dark',
		category: 'Special',
		hasSecondaryEffect: true,
		isPulse: true
	},
	'Dig': {bp: 80},
	'Dragon Pulse': {
		bp: 90,
		type: 'Dragon',
		category: 'Special',
		isPulse: true
	},
	'Feint': {
		bp: 50,
		type: 'Normal',
		category: 'Physical',
		bypassesProtect: true
	},
	'Flare Blitz': {
		bp: 120,
		type: 'Fire',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true,
		hasRecoil: 33
	},
	'Flash Cannon': {
		bp: 80,
		type: 'Steel',
		category: 'Special',
		hasSecondaryEffect: true
	},
	'Fly': {bp: 90},
	'High Jump Kick': {bp: 100},
	'Ice Shard': {
		bp: 40,
		type: 'Ice',
		category: 'Physical',
		hasPriority: true
	},
	'Jump Kick': {bp: 85},
	'Nasty Plot': {
		bp: 0,
		type: 'Dark'
	},
	'Outrage': {
		bp: 120,
		type: 'Dragon',
		category: 'Physical',
		makesContact: true
	},
	'Poison Jab': {
		bp: 80,
		type: 'Poison',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true
	},
	'Power Whip': {
		bp: 120,
		type: 'Grass',
		category: 'Physical',
		makesContact: true
	},
	'Roost': {
		bp: 0,
		type: 'Flying'
	},
	'Stealth Rock': {
		bp: 0,
		type: 'Rock'
	},
	'Struggle': {hasRecoil: 'Struggle'},
	'Sucker Punch': {
		bp: 80,
		type: 'Dark',
		category: 'Physical',
		makesContact: true,
		hasPriority: true
	},
	'U-turn': {
		bp: 70,
		type: 'Bug',
		category: 'Physical',
		makesContact: true
	},
	'Waterfall': {hasSecondaryEffect: true},
	'X-Scissor': {
		bp: 80,
		type: 'Bug',
		category: 'Physical',
		makesContact: true
	}
});

var MOVES_BW = $.extend(true, {}, MOVES_DPP, {
	'Clear Smog': {
		bp: 50,
		type: 'Poison',
		category: 'Special'
	},
	'Dragon Tail': {
		bp: 60,
		type: 'Dragon',
		category: 'Physical',
		makesContact: true
	},
	'Drill Run': {
		bp: 80,
		type: 'Ground',
		category: 'Physical',
		makesContact: true
	},
	'Feint': {bp: 30},
	'High Jump Kick': {bp: 130},
	'Jump Kick': {bp: 100},
	'Petal Dance': {
		bp: 120,
		type: 'Grass',
		category: 'Special',
		makesContact: true
	},
	'Quiver Dance': {
		bp: 0,
		type: 'Bug'
	},
	'Shell Smash': {
		bp: 0,
		type: 'Normal'
	},
	'Tackle': {bp: 50},
	'Thrash': {bp: 120},
	'Whirlpool': {bp: 35},
});

var MOVES_XY = $.extend(true, {}, MOVES_BW, {
	'Blizzard': {bp: 110},
	'Crabhammer': {bp: 100},
	'Dazzling Gleam': {
		bp: 80,
		type: 'Fairy',
		category: 'Special',
		isSpread: true
	},
	'Dragon Pulse': {bp: 85},
	'Facade': {ignoresBurn: true},
	'Fire Blast': {bp: 110},
	'Flamethrower': {bp: 90},
	'Heat Wave': {bp: 95},
	'Ice Beam': {bp: 90},
	'Moonblast': {
		bp: 95,
		type: 'Fairy',
		category: 'Special',
		hasSecondaryEffect: true
	},
	'Pin Missile': {bp: 25},
	'Play Rough': {
		bp: 90,
		type: 'Fairy',
		category: 'Physical',
		makesContact: true,
		hasSecondaryEffect: true
	},
	'Skull Bash': {bp: 130},
	'Surf': {bp: 90},
	'Thunder': {bp: 110},
	'Thunderbolt': {bp: 90},
});

var ZMOVES_TYPING = {
	'Bug': 'Savage Spin-Out',
	'Dark': 'Black Hole Eclipse',
	'Dragon': 'Devastating Drake',
	'Electric': 'Gigavolt Havoc',
	'Fairy': 'Twinkle Tackle',
	'Fighting': 'All-Out Pummeling',
	'Fire': 'Inferno Overdrive',
	'Flying': 'Supersonic Skystrike',
	'Ghost': 'Never-Ending Nightmare',
	'Grass': 'Bloom Doom',
	'Ground': 'Tectonic Rage',
	'Ice': 'Subzero Slammer',
	'Normal': 'Breakneck Blitz',
	'Poison': 'Acid Downpour',
	'Psychic': 'Shattered Psyche',
	'Rock': 'Continental Crush',
	'Steel': 'Corkscrew Crash',
	'Water': 'Hydro Vortex'
};

var MOVES_SM = $.extend(true, {}, MOVES_RBY, {
	'Absorb': {
		bp: 40,
		type: 'Grass',
		category: 'Special',
		givesHealth: true,
		percentHealed: 0.5
	},
	'Mega Drain': {bp: 75},
	'Sky Attack': {bp: 200},
	'Solar Beam': {bp: 200},
	'Air Slash': {zp: 140},
	'Aqua Jet': {zp: 100},
	'Aurora Beam': {zp: 120},
	'Scald': {
		bp: 80,
		type: 'Water',
		category: 'Special'
	},
	'Beak Blast': {
		bp: 100,
		type: 'Flying',
		category: 'Physical',
		zp: 180,
		isBullet: true
	},
	'Baddy Bad': {
		bp: 90,
		type: 'Dark',
		category: 'Special'
	},
	'Bouncy Bubble': {
		bp: 90,
		type: 'Water',
		category: 'Special',
		givesHealth: true,
		percentHealed: 0.5
	},
	'Buzzy Buzz': {
		bp: 90,
		type: 'Electric',
		category: 'Special'
	},
	'Double Iron Bash': {
		bp: 60,
		type: 'Steel',
		category: 'Physical',
		makesContact: true,
		isTwoHit: true
	},
	'Floaty Fall': {
		bp: 90,
		type: 'Flying',
		category: 'Physical'
	},
	'Freezy Frost': {
		bp:90,
		type: 'Ice',
		category: 'Special'
	},
	'Glitzy Glow': {
		bp:90,
		type: 'Psychic',
		category: 'Special'
	},
	'Pika Papow': {
		bp:102,
		type: 'Electric',
		category: 'Special'
	},
	'Sappy Seed': {
		bp:90,
		type: 'Grass',
		category: 'Physical'
	},
	'Sizzly Slide': {
		bp:90,
		type: 'Fire',
		category: 'Physical'
	},
	'Sparkly Swirl': {
		bp:90,
		type: 'Fairy',
		category: 'Special'
	},
	'Splishy Splash': {
		bp:90,
		type: 'Water',
		category: 'Special'
	},
	'Veevee Volley': {
		bp:102,
		type: 'Normal',
		category: 'Physical',
		makesContact: true
	},
	'Zippy Zap': {
		bp:50,
		type: 'Electric',
		category: 'Physical',
		alwaysCrit: true
	},	
	'Bite': {zp: 120},
	'Blizzard': {zp: 185},
	'Body Slam': {zp: 160},
	'Bone Club': {zp: 120},
	'Bonemerang': {zp: 100},
	'Brick Break': {zp: 140},
	'Bubble Beam': {zp: 120},
	'Bug Buzz': {zp: 175},
	'Clear Smog': {zp: 100},
	'Crabhammer': {zp: 180},
	'Crunch': {zp: 160},
	'Crush Claw': {zp: 140},
	'Dark Pulse': {zp: 160},
	'Dazzling Gleam': {zp: 160},
	'Dig': {zp: 160},
	'Drill Peck': {zp: 160},
	'Double-Edge': {zp: 190},
	'Double Kick': {zp: 100},
	'Dragon Pulse': {zp: 160},
	'Dragon Tail': {zp: 120},
	'Dream Eater': {zp: 180},
	'Drill Run': {zp: 160},
	'Earthquake': {zp: 180},
	'Explosion': {zp: 200},
	'Fake Out': {zp: 100},
	'Facade': {zp: 140},
	'Feint': {zp: 100},
	'Fire Blast': {zp: 185},
	'Fire Punch': {zp: 140},
	'Fire Spin': {zp: 100},
	'Flamethrower': {zp: 175},
	'Flare Blitz': {zp: 190},
	'Flash Cannon': {zp: 160},
	'Fly': {zp: 175},
	'Fury Swipes': {zp: 100},
	'Gunk Shot': {zp: 190},
	'Gust': {zp: 100},
	'Headbutt': {zp: 140},
	'Heat Wave': {zp: 175},
	'High Jump Kick': {zp: 195},
	'Hydro Pump': {zp: 185},
	'Hyper Beam': {zp: 200},
	'Ice Beam': {zp: 175},
	'Ice Punch': {zp: 140},
	'Ice Shard': {zp: 100},
	'Iron Tail': {zp: 180},
	'Jump Kick': {zp: 180},
	'Leech Life': {bp: 80, zp: 160},
	'Low Kick': {zp: 160},
	'Megahorn': {zp: 190},
	'Moonblast': {zp: 175},
	'Night Shade': {zp: 100},
	'Nuzzle': {zp: 100},
	'Outrage': {zp: 190},
	'Petal Dance': {zp: 190},
	'Pin Missile': {zp: 140},
	'Play Rough': {zp: 175},
	'Poison Jab': {zp: 160},
	'Power Whip': {zp: 190},
	'Psychic': {zp: 175},
	'Quick Attack': {zp: 100},
	'Razor Leaf': {zp: 120},
	'Rock Slide': {zp: 140},
	'Rock Throw': {zp: 100},
	'Seismic Toss': {zp: 100},
	'Self-Destruct': {zp: 200},
	'Shadow Sneak': {zp: 100},
	'Shadow Strike': {zp: 160},
	'Shadow Ball': {zp: 160},
	'Skull Bash': {zp: 195},
	'Sky Attack': {zp: 200},
	'Slash': {zp: 140},
	'Sludge': {zp: 120},
	'Sludge Bomb': {zp: 175},
	'Solar Beam': {zp: 190},
	'Submission': {zp: 160},
	'Sucker Punch': {bp: 70, zp: 140},
	'Super Fang': {zp: 100},
	'Superpower': {zp: 190},
	'Surf': {zp: 175},
	'Swift': {zp: 120},
	'Tackle': {bp: 40, zp: 100},
	'Take Down': {zp: 160},
	'Thrash': {zp: 190},
	'Thunder': {zp: 185},
	'Thunderbolt': {zp: 175},
	'Thunder Punch': {zp: 140},
	'Tri Attack': {zp: 160},
	'Twineedle': {zp: 100},
	'U-turn': {zp: 140},
	'Waterfall': {zp: 160},
	'Wing Attack': {zp: 120},
	'X-Scissor': {zp: 160},
});
