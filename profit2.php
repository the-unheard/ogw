<?php include('php/server.php');?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
	<title>Ooblets Guide | Profit</title>
		<?php include('php/meta.php'); ?>
	</head>
	<body>
		<?php include('php/header.php'); ?>

		<main>
			<div class="row p-2 bg-light mx-auto">

				<div class="pro-main row m-0 py-4">

					<!-- PLAYER SHOP START -->
					<div class="pro-graph-header text-center my-3 p-2">
						<div class="rounded py-3 text-light mx-auto og-header">Player Shop</div>
					</div>

					<div class="pro-graph-container col-12 p-3">
						<table class="table">
						    <thead>
						        <tr>
						            <th scope="col" class="d-sm-none">Type</th>
						            <th scope="col">Name</th>
						            <th scope="col" class="d-sm-none text-end">Cost <i class="fa-solid fa-circle-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Cost is how much an item costs in gummies. Crop costs are calculated by seed price divided by number of crops per harvest."></i></th>
						            <th scope="col" class="d-sm-none text-end">Value  <i class="fa-solid fa-circle-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Value is how much the item sells for on a fully-upgraded player shop, during an event (if applicable), and great haggle."></i></th>
						            <th scope="col" class="text-center"><i class="fa-solid fa-circle-info" data-bs-toggle="tooltip" data-bs-placement="top" title="If acquiring the item involves growing a crop."></i></th>
						            <th scope="col" class="text-center"><i class="fa-solid fa-circle-info" data-bs-toggle="tooltip" data-bs-placement="top" title="If acquiring the item involves using the crunchster or swooshler."></i></th>
						            <th scope="col" class="text-center"><i class="fa-solid fa-circle-info" data-bs-toggle="tooltip" data-bs-placement="top" title="If acquiring the item involves foraging."></i></th>
						            <th scope="col" class="text-center"><i class="fa-solid fa-circle-info" data-bs-toggle="tooltip" data-bs-placement="top" title="If an item is acquired by any other means, like fishing. "></i></th>
						            <th scope="col" class="text-end">Profit <i class="fa-solid fa-circle-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Profit is calculated by subtracting the cost from the sale price."></i></th>
						            <th scope="col"></th>
						        </tr>
						    </thead>
						    <tbody>
						            <?php include('php/profitPlayerShop.php'); ?>
						    </tbody>
						</table>

					</div>

				</div>
				

			</div>
		</main>

		<?php include('php/footer.php'); ?>

			<script src='js/jquery-3.2.1.min.js'></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
			<script src='js/profit2.js?v=1653284088'></script>
	</body>
</html>