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
						<div class="rounded py-3 text-light mx-auto og-header">Player Shop 3</div>
					</div>

					<div class="pro-graph-container col-12 p-3">
						<table class="table">
						    <thead>
						        <tr>
						            <th scope="col">Type</th>
						            <th scope="col">Name</th>
						            <th scope="col">Cost</th>
						            <th scope="col">Value</th>
						            <th scope="col">Farming</th>
						            <th scope="col">Processing</th>
						            <th scope="col">Foraging</th>
						            <th scope="col">Others</th>
						            <th scope="col">Profit</th>
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
			<script src='js/profit.js?v=1653284088'></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	</body>
</html>