<?php while($row = mysqli_fetch_assoc($result)) {

	$name = $row['name'];
	$town = $row['town'];
	$image = $row['image'];
	$food = $row['food'];
	$move1cost = $row['move1cost'];
	$move1name = $row['move1name'];
	$move1desc = $row['move1desc'];
	$move2cost = $row['move2cost'];
	$move2name = $row['move2name'];
	$move2desc = $row['move2desc'];
	$move3cost = $row['move3cost'];
	$move3name = $row['move3name'];
	$move3desc = $row['move3desc'];
	$description = $row['description'];
	?>

	<div class="almanac-ooblet col-xl-4 col-md-6 col-12 og-bg-gray-300 px-0 py-2 mx-md-0 mx-auto border border-5 border-light rounded">
		<div class="container px-3">
			<div class="row">
				<!-- name and location -->
				<div class="col-12 og-bg-darkpurple text-white py-1">
					<span><?= $name ?></span><span class="float-end almanac-location"><?= $town ?></span>
				</div>
				<!-- images -->
				<div class="col-12">
					<div class="row my-2">
						<div class="col-4 p-0">
							<img class="img-gleamy clickable-oob d-flex my-0 mx-auto" data-action="add" data-oobname="<?= $image ?>" data-oobtype="g" src="images/ooblets/<?= $image ?>_g.png"/>
						</div>
						<div class="col-4 p-0">
							<img class="img-common clickable-oob d-flex my-0 mx-auto" data-action="add" data-oobname="<?= $image ?>" data-oobtype="c" src="images/ooblets/<?= $image ?>_c.png"/>
						</div>
						<div class="col-4 p-0">
							<img class="img-uncommon clickable-oob d-flex my-0 mx-auto" data-action="add" data-oobname="<?= $image ?>" data-oobtype="u" src="images/ooblets/<?= $image ?>_u.png"/>
						</div>
					</div>
				</div>
				<!-- variant -->
				<div class="col-12 almanac-variant mb-2">
					<div class="row text-center">
						<div class="col-4">Gleamy</div>
						<div class="col-4">Common</div>
						<div class="col-4">Uncommon</div>
					</div>
				</div>
				<!-- food -->
				<div class="col-11 og-bg-gray-400 almanac-food py-1 text-center rounded"><?= $food ?></div>
				<!-- bio -->
				<div class="col-11 og-bg-gray-400 almanac-bio py-1 mt-2 mb-1 rounded"><?= $description ?></div>
				<!-- cards -->
				<div class="col-11 almanac-cards">
					<div class="row">
						<!-- card 1 -->
						<div class="col-12">
							<div class="row my-1 almanac-card">
								<div class="col-12 px-1 almanac-costname">
									<div class="almanac-cardcost text-white rounded-circle float-start"><?= $move1cost ?></div>
									<div class="almanac-cardname text-white"><?= $move1name ?></div>
								</div>
								<div class="col-12 almanac-carddesc"><?= $move1desc ?></div>
							</div>
						</div>
						<!-- card 2 -->
						<div class="col-12">
							<div class="row my-1 almanac-card">
								<div class="col-12 px-1 almanac-costname">
									<div class="almanac-cardcost text-white rounded-circle float-start"><?= $move2cost ?></div>
									<div class="almanac-cardname text-white"><?= $move2name ?></div>
								</div>
								<div class="col-12 almanac-carddesc"><?= $move2desc ?></div>
							</div>
						</div>
						<!-- card 3 -->
						<div class="col-12">
							<div class="row my-1 almanac-card">
								<div class="col-12 px-1 almanac-costname">
									<div class="almanac-cardcost text-white rounded-circle float-start"><?= $move3cost ?></div>
									<div class="almanac-cardname text-white"><?= $move3name ?></div>
								</div>
								<div class="col-12 almanac-carddesc"><?= $move3desc ?></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

<?php } ?>
