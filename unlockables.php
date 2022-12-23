<?php include('php/server.php');?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
	<title>Ooblets Guide | Unlockables</title>
		<?php include('php/meta.php'); ?>
	</head>
	<body>
		<?php include('php/header.php'); ?>

		<main>
			<div class="row p-2 bg-light mx-auto">
				<div class="upgrades-main row m-0 py-4">
					<!-- COLUMN 1 -->
					<div class="col-md-6 col-12 px-lg-5 px-3">
						<!-- SLURRY START -->
							<div class="upgrades-slurry upgrades-container">
								<div class="upgrades-header text-center my-3 p-2">
									<div class="rounded py-3 text-light mx-auto og-header">Slurry</div>
								</div>
								<table cellspacing="0" cellpadding="0"  class="table table-striped">
									<tr>
										<th>Item</th>
										<th>Slurry Obtained</th>
									</tr>
									<?php include('php/slurry.php'); ?>
								</table>
							</div>
						<!-- END -->
					</div>
					<!-- COLUMN 2 -->
					<div class="col-md-6 col-12 px-lg-5 px-3">
						<!-- WISHY WELL START -->
							<div class="upgrades-wishywell upgrades-container">
								<div class="upgrades-header text-center my-3 p-2">
									<div class="rounded py-3 text-light mx-auto og-header">Wishy Well</div>
								</div>
								<table cellspacing="0" cellpadding="0" class="table table-striped">
									<tr>
										<th>Wish</th>
										<th>Type</th>
										<th>Cost</th>
									</tr>
									<?php include('php/wishywell.php'); ?>
								</table>
							</div>
						<!-- END -->
					</div>
					<!-- COLUMN 3 -->
					<div class="col-md-6 col-12 px-lg-5 px-3">
						<!-- RECIPES START -->
							<div class="upgrades-recipe upgrades-container">
								<div class="upgrades-header text-center my-3 p-2">
									<div class="rounded py-3 text-light mx-auto og-header">Recipes</div>
								</div>
								<table cellspacing="0" cellpadding="0" class="table table-striped">
									<tr>
										<th>Recipe</th>
										<th>How To Obtain</th>
									</tr>
									<?php include('php/recipes.php'); ?>
								</table>
							</div>
						<!-- END -->
						<!-- DRIBBLER START -->
							<div class="upgrades-dribbler upgrades-container">
								<div class="upgrades-header text-center my-3 p-2">
									<div class="rounded py-3 text-light mx-auto og-header">Dribbler</div>
								</div>
								<table cellspacing="0" cellpadding="0" class="table table-striped">
									<tr>
										<th>Type</th>
										<th>Uses</th>
										<th>Cost</th>
									</tr>
									<?php include('php/dribbler.php'); ?>
								</table>
							</div>
						<!-- END -->
					</div>	
					<!-- COLUMN 4 -->
					<div class="col-md-6 col-12 px-lg-5 px-3">
						<!-- BADGETOWN OOBLETS START -->
							<div class="upgrades-badgetown upgrades-container">
								<div class="upgrades-header text-center my-3 p-2">
									<div class="rounded py-3 text-light mx-auto og-header">Badgetown Ooblets</div>
								</div>
								<table cellspacing="0" cellpadding="0" class="table table-striped">
									<tr>
										<th>Ooblets</th>
										<th>Unlocked By</th>
									</tr>
									<?php include('php/badgetownooblets.php'); ?>
								</table>
							</div>
						<!-- END -->
						<!-- WILDLANDS START -->
							<div class="upgrades-wildlands upgrades-container">
								<div class="upgrades-header text-center my-3 p-2">
									<div class="rounded py-3 text-light mx-auto og-header">Wildlands</div>
								</div>
								<table cellspacing="0" cellpadding="0" class="table table-striped">
									<tr>
										<th>Unlockables</th>
										<th>Type</th>
										<th>Level</th>
									</tr>
									<?php include('php/wildlands.php'); ?>
								</table>
							</div>
						<!-- END -->
						<!-- BACKPACK START -->
							<div class="upgrades-backpack upgrades-container">
								<div class="upgrades-header text-center my-3 p-2">
									<div class="rounded py-3 text-light mx-auto og-header">Backpacks</div>
								</div>
								<table cellspacing="0" cellpadding="0" class="table table-striped">
									<tr>
										<th>Type</th>
										<th>Overall Slots</th>
										<th>Cost</th>
									</tr>
									<?php include('php/backpacks.php'); ?>
								</table>
							</div>
						<!-- END -->	
					</div>
				</div>
			</div>
		</main>

		<?php include('php/footer.php'); ?>

			<script src='js/jquery-3.2.1.min.js'></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	</body>
</html>