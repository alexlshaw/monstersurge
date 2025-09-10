$(document).ready(function () {
	//monster data
	const monsters = ["Avian Thrall",
		"Byakhee",
		"Carrier Nightgaunt",
		"Child of the Goat",
		"Colour Out Of Space",
		"Crawling One",
		"Crazed Mob",
		"Cthonian",
		"Cultist",
		"Cultist",
		"Cultist",
		"Cultist",
		"Cultist",
		"Cultist",
		"Cultist",
		"Cultist",
		"Cultist",
		"Cultist",
		"Cultist",
		"Cultist",
		"Cultist",
		"Cultist",
		"Dark Young",
		"Deep One",
		"Deep One Hybrid",
		"Dhole",
		"Dimensional Shambler",
		"Elder Thing",
		"Fire Vampire",
		"Firebug",
		"Flying Polyp",
		"Formless Spawn",
		"Ghast",
		"Ghost",
		"Ghoul",
		"Ghoul",
		"Ghoul Priest",
		"Giant Penguin",
		"Gnoph-Keh",
		"Goat Spawn",
		"Goat Spawn",
		"Gug",
		"Honoured Dead",
		"Hound of Tindalos",
		"Hunting Byakhee",
		"Jiangshi",
		"Leng Spider",
		"Leng Spider",
		"Leopardman",
		"Lloigor",
		"Maniac",
		"Mi-Go",
		"Mi-go",
		"Moon Beast",
		"Mummy",
		"Nightgaunt",
		"Poltergeist",
		"Proto-Shoggoth",
		"Rat-thing",
		"Ravening Gug",
		"Riot",
		"Sand Dweller",
		"Serpent People",
		"Servitor of the Outer Gods",
		"Shan",
		"Shoggoth",
		"Shoggoth",
		"Skeleton",
		"Spawn of Sebak",
		"Star Spawn",
		"Star Vampire",
		"Star Vampire",
		"Tcho-tcho",
		"Thrall",
		"Vampire",
		"Warlock",
		"Wendigo",
		"Werewolf",
		"Witch",
		"Wraith",
		"Yithian",
		"Young Cthonian",
		"Zombie",
		"Zombie",
		"Zoog"];
		
	//sorting helper
	function sortContainers() {
		[$("#left"), $("#spawned-col")].forEach($container => {
			$container.children(".button-wrapper").sort((a, b) => {
				return $(a).data("order") - $(b).data("order");
			}).appendTo($container);
		});
	}
	//initialise
	monsters.forEach((monster, index) => {
		const wrapper = $("<div>")
			.addClass("button-wrapper")
			.attr("data-order", index);
		const btn = $("<button>")
			.text(monster)
			.addClass(".monster-btn");
		wrapper.append(btn);
		$("#left").append(wrapper);
	});
	
	//handler for monster buttons
	$(document).on("click", "button:not(#spawn):not(#reset)", function () {
		const $wrapper = $(this).parent();
		if ($wrapper.parent().attr("id") === "left")
		{
			const $target = $("#spawned-col");
			txt = monsters[$wrapper.data("order")];
			$("#spawned-label").text(txt);
			$target.append($wrapper);
		}
		else
		{
			const $target = $("#left");
			$target.append($wrapper);
		}
		sortContainers();
	});
	
	//handler for spawn button
	$("#spawn").on("click", function () {
		const $unspawned = $("#left").children(".button-wrapper");
		if ($unspawned.length > 0) {
			const idx = Math.floor(Math.random() * $unspawned.length);
			$monster = $unspawned.eq(idx);
			txt = monsters[$monster.data("order")];
			$("#spawned-label").text(txt);
			$("#spawned-col").append($monster);
			sortContainers();
		}
	});
	
	//handler for reset button
	$("#reset").on("click", function () {
		$("#left").append($("#spawned-col").children(".button-wrapper"));
		$("#spawned-label").text("");
		sortContainers();
	});
});