<?php

	// connect to database
	$db = mysqli_connect('server54.web-hosting.com', 'ooblzwqi', 'WHpcWuYDudUI', 'ooblzwqi_ooblets');

	// page event - almanac
	$host = $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
	if (stripos($_SERVER['REQUEST_URI'], 'almanac')){
		$query = "SELECT * FROM almanac ORDER BY name";
		$result = mysqli_query($db, $query);
	}

	// page event - unlockables
	if (stripos($_SERVER['REQUEST_URI'], 'unlockables')){
		$recipequery = "SELECT * FROM recipes ORDER BY name";
		$reciperesult = mysqli_query($db, $recipequery);

		$slurryquery = "SELECT * FROM slurry ORDER BY amount, item";
		$slurryresult = mysqli_query($db, $slurryquery);

		$wishywellquery = "SELECT * FROM wishywell ORDER BY type, wish";
		$wishywellresult = mysqli_query($db, $wishywellquery);

		$wildlandsquery = "SELECT * FROM wildlands ORDER BY level";
		$wildlandsresult = mysqli_query($db, $wildlandsquery);

		$backpacksquery = "SELECT * FROM backpacks ORDER BY slots";
		$backpacksresult = mysqli_query($db, $backpacksquery);

		$dribblerquery = "SELECT * FROM dribbler ORDER BY uses";
		$dribblerresult = mysqli_query($db, $dribblerquery);

		$badgetownoobletsquery = "SELECT * FROM badgetownooblets ORDER BY id";
		$badgetownoobletsresult = mysqli_query($db, $badgetownoobletsquery);
	}

	// page event - fishing
	if (stripos($_SERVER['REQUEST_URI'], 'fishing')){

		$fishingBadgetown = array();
		$fishingWildlands = array();
		$fishingPortforward = array();

		$fishingBadgetownBasicquery = "SELECT * FROM fishing WHERE location='badgetown' AND bait='basic' ORDER BY type, item";
		$fishingBadgetown[] = ['Basic', mysqli_query($db, $fishingBadgetownBasicquery)];

		$fishingBadgetownHqquery = "SELECT * FROM fishing WHERE location='badgetown' AND bait='hq' ORDER BY type, item";
		$fishingBadgetown[] = ['High Quality', mysqli_query($db, $fishingBadgetownHqquery)];

		$fishingBadgetownSuperquery = "SELECT * FROM fishing WHERE location='badgetown' AND bait='super' ORDER BY type, item";
		$fishingBadgetown[] = ['Super', mysqli_query($db, $fishingBadgetownSuperquery)];

		$fishingWildlandsBasicquery = "SELECT * FROM fishing WHERE location='wildlands' AND bait='basic' ORDER BY type, item";
		$fishingWildlands[] = ['Basic', mysqli_query($db, $fishingWildlandsBasicquery)];

		$fishingWildlandsHqquery = "SELECT * FROM fishing WHERE location='wildlands' AND bait='hq' ORDER BY type, item";
		$fishingWildlands[] = ['High Quality', mysqli_query($db, $fishingWildlandsHqquery)];

		$fishingWildlandsSuperquery = "SELECT * FROM fishing WHERE location='wildlands' AND bait='super' ORDER BY type, item";
		$fishingWildlands[] = ['Super', mysqli_query($db, $fishingWildlandsSuperquery)];

		$fishingPortBasicquery = "SELECT * FROM fishing WHERE location='portforward' AND bait='basic' ORDER BY type, item";
		$fishingPortforward[] = ['Basic', mysqli_query($db, $fishingPortBasicquery)];

		$fishingPortHqquery = "SELECT * FROM fishing WHERE location='portforward' AND bait='hq' ORDER BY type, item";
		$fishingPortforward[] = ['High Quality', mysqli_query($db, $fishingPortHqquery)];

		$fishingPortSuperquery = "SELECT * FROM fishing WHERE location='portforward' AND bait='super' ORDER BY type, item";
		$fishingPortforward[] = ['Super', mysqli_query($db, $fishingPortSuperquery)];
	}

	// page event - furniture
	if (stripos($_SERVER['REQUEST_URI'], 'furnitures')){

		$furnitureTypes = array();

		$furnTrinketsquery = "SELECT * FROM furnitures WHERE type='trinkets' ORDER BY name";
		$furnitureTypes[] = ['Trinkets', mysqli_query($db, $furnTrinketsquery)];

		$furnArmchairsquery = "SELECT * FROM furnitures WHERE type='armchairs' ORDER BY name";
		$furnitureTypes[] = ['Arm Chairs', mysqli_query($db, $furnArmchairsquery)];
		
		$furnChairsquery = "SELECT * FROM furnitures WHERE type='chairs' ORDER BY name";
		$furnitureTypes[] = ['Chairs', mysqli_query($db, $furnChairsquery)];
		
		$furnCouchesquery = "SELECT * FROM furnitures WHERE type='couches' ORDER BY name";
		$furnitureTypes[] = ['Couches', mysqli_query($db, $furnCouchesquery)];

		$furnTablesquery = "SELECT * FROM furnitures WHERE type='tables' ORDER BY name";
		$furnitureTypes[] = ['Tables', mysqli_query($db, $furnTablesquery)];

		$furnBedsquery = "SELECT * FROM furnitures WHERE type='beds' ORDER BY name";
		$furnitureTypes[] = ['Beds', mysqli_query($db, $furnBedsquery)];

		$furnLightingsquery = "SELECT * FROM furnitures WHERE type='lightings' ORDER BY name";
		$furnitureTypes[] = ['Lightings', mysqli_query($db, $furnLightingsquery)];

		$furnShelvesquery = "SELECT * FROM furnitures WHERE type='shelves' ORDER BY name";
		$furnitureTypes[] = ['Shelves', mysqli_query($db, $furnShelvesquery)];

		$furnDrawersquery = "SELECT * FROM furnitures WHERE type='drawers' ORDER BY name";
		$furnitureTypes[] = ['Drawers', mysqli_query($db, $furnDrawersquery)];

		$furnChestsquery = "SELECT * FROM furnitures WHERE type='chests' ORDER BY name";
		$furnitureTypes[] = ['Chests', mysqli_query($db, $furnChestsquery)];

		$furnKitchenquery = "SELECT * FROM furnitures WHERE type='kitchen' ORDER BY name";
		$furnitureTypes[] = ['Kitchen', mysqli_query($db, $furnKitchenquery)];

		$furnWalldecorsquery = "SELECT * FROM furnitures WHERE type='walldecors' ORDER BY name";
		$furnitureTypes[] = ['Wall Decors', mysqli_query($db, $furnWalldecorsquery)];

		$furnOthersquery = "SELECT * FROM furnitures WHERE type='others' ORDER BY name";
		$furnitureTypes[] = ['Others', mysqli_query($db, $furnOthersquery)];

		$furnCarpetsquery = "SELECT * FROM furnitures WHERE type='carpets' ORDER BY name";
		$furnitureTypes[] = ['Carpets', mysqli_query($db, $furnCarpetsquery)];

		$furnFlooringsquery = "SELECT * FROM furnitures WHERE type='floorings' ORDER BY name";
		$furnitureTypes[] = ['Floorings', mysqli_query($db, $furnFlooringsquery)];

		$furnWallpapersquery = "SELECT * FROM furnitures WHERE type='wallpapers' ORDER BY name";
		$furnitureTypes[] = ['Wallpapers', mysqli_query($db, $furnWallpapersquery)];

		$furnPaintsquery = "SELECT * FROM furnitures WHERE type='paints' ORDER BY name";
		$furnitureTypes[] = ['Paints', mysqli_query($db, $furnPaintsquery)];
	}

	// page event - clothings - tops
	if (stripos($_SERVER['REQUEST_URI'], 'clothings/tops')){

		$clothingTypes = array();

		$clothingsTopsquery = "SELECT * FROM clothings WHERE type='tops' ORDER BY name";
		$clothingTypes[] = ['Tops', mysqli_query($db, $clothingsTopsquery)];

	}

	// page event - clothings - bottoms
	if (stripos($_SERVER['REQUEST_URI'], 'clothings/bottoms')){

		$clothingTypes = array();

		$clothingsBottomsquery = "SELECT * FROM clothings WHERE type='bottoms' ORDER BY name";
		$clothingTypes[] = ['Bottoms', mysqli_query($db, $clothingsBottomsquery)];

	}

	// page event - clothings - outfits
	if (stripos($_SERVER['REQUEST_URI'], 'clothings/outfits')){

		$clothingTypes = array();

		$clothingsOutfitsquery = "SELECT * FROM clothings WHERE type='outfits' ORDER BY name";
		$clothingTypes[] = ['Outfits', mysqli_query($db, $clothingsOutfitsquery)];

	}

	// page event - clothings - shoes
	if (stripos($_SERVER['REQUEST_URI'], 'clothings/shoes')){

		$clothingTypes = array();

		$clothingsShoesquery = "SELECT * FROM clothings WHERE type='shoes' ORDER BY name";
		$clothingTypes[] = ['Shoes', mysqli_query($db, $clothingsShoesquery)];

	}

	// page event - clothings - backpacks
	if (stripos($_SERVER['REQUEST_URI'], 'clothings/backpacks')){

		$clothingTypes = array();

		$clothingsBagsquery = "SELECT * FROM clothings WHERE type='backpacks' ORDER BY name";
		$clothingTypes[] = ['Backpacks', mysqli_query($db, $clothingsBagsquery)];

	}

	// page event - clothings - accessories
	if (stripos($_SERVER['REQUEST_URI'], 'clothings/accessories')){

		$clothingTypes = array();

		$clothingsAccsquery = "SELECT * FROM clothings WHERE type='accessories' ORDER BY name";
		$clothingTypes[] = ['Accessories', mysqli_query($db, $clothingsAccsquery)];

	}

	// page event - clothings - oobaccessories
	if (stripos($_SERVER['REQUEST_URI'], 'clothings/oobaccessories')){

		$clothingTypes = array();

		$clothingsOobGlassesquery = "SELECT * FROM oobaccessories WHERE type='glasses' ORDER BY name";
		$clothingTypes[] = ['Glasses', mysqli_query($db, $clothingsOobGlassesquery)];

		$clothingsOobHatsquery = "SELECT * FROM oobaccessories WHERE type='hats' ORDER BY name";
		$clothingTypes[] = ['Hats', mysqli_query($db, $clothingsOobHatsquery)];

		$clothingsOobNecksquery = "SELECT * FROM oobaccessories WHERE type='necks' ORDER BY name";
		$clothingTypes[] = ['Necks', mysqli_query($db, $clothingsOobNecksquery)];

		$clothingsOobShoesquery = "SELECT * FROM oobaccessories WHERE type='shoes' ORDER BY name";
		$clothingTypes[] = ['Shoes', mysqli_query($db, $clothingsOobShoesquery)];

		$clothingsOobWandsquery = "SELECT * FROM oobaccessories WHERE type='wands' ORDER BY name";
		$clothingTypes[] = ['Wands', mysqli_query($db, $clothingsOobWandsquery)];

	}

	// page event - profit
    	if (stripos($_SERVER['REQUEST_URI'], 'profit2')){

    		$profitPlayerShopItems = array();

    		$profitPlayerShopquery = "SELECT * FROM profitplayershop ORDER BY type, name";
    		$profitPlayerShopItems[] = ['Player Shop', mysqli_query($db, $profitPlayerShopquery)];

            $profitPlennyItems = array();

            $profitPlennyquery = "SELECT * FROM profitplenny ORDER BY type, name";
            $profitPlennyItems[] = ['Player Shop', mysqli_query($db, $profitPlennyquery)];

        }

?>