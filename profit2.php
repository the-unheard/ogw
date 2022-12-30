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

                    <div class="form-check form-switch">
                        <label class="form-check-label" for="profitCompact">Compact Mode</label>
                        <input class="form-check-input" type="checkbox" id="profitCompact" checked>
                    </div>

					<!-- PLENNY START -->
					<div class="pro-graph-container col-xl-6 col-12 p-3">
                        <div class="pro-graph-header text-center my-3 p-2">
                            <div class="rounded py-3 text-light mx-auto og-header">Plenny's</div>
                        </div>
						<table class="table">
						    <thead>
						        <tr>
						            <th scope="col" class="playerProfitTypes">Lvl</th>
						            <th scope="col">Item</th>
						            <th scope="col" class="playerProfitCosts text-end d-none">Cost</th>
						            <th scope="col" class="playerProfitValues text-end d-none">Sell</th>
						            <th scope="col" class="text-center"></th>
						            <th scope="col" class="text-center"></th>
						            <th scope="col" class="text-center"></th>
						            <th scope="col" class="text-end">Profit</th>
						            <th scope="col"></th>
						        </tr>
						    </thead>
						    <tbody>
						            <?php include('php/profitPlenny.php'); ?>
						    </tbody>
						</table>
					</div>

					<!-- PLAYER SHOP START -->
					<div class="pro-graph-container col-xl-6 col-12 p-3">
                        <div class="pro-graph-header text-center my-3 p-2">
                            <div class="rounded py-3 text-light mx-auto og-header">Player Shop</div>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" class="playerProfitTypes">Type</th>
                                    <th scope="col">Item</th>
                                    <th scope="col" class="playerProfitCosts text-end d-none">Cost</th>
                                    <th scope="col" class="playerProfitValues text-end d-none">Sell</th>
                                    <th scope="col" class="text-center"></th>
                                    <th scope="col" class="text-center"></th>
                                    <th scope="col" class="text-center"></th>
                                    <th scope="col" class="text-center"></th>
                                    <th scope="col" class="text-end">Profit</th>
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
			<script src='js/profit2.js?v=1672362286'></script>
	</body>
</html>