<?php include('php/server.php');?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
	    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	    <link rel="stylesheet" type="text/css" href="css/dataTables.bootstrap5.min.css">
        <title>Ooblets Guide | Profit</title>
            <?php include('php/meta.php'); ?>
        </head>
	<body>
		<?php include('php/header.php'); ?>

		<main>
			<div class="row p-2 bg-light mx-auto">
                <div class="profit-topcontrols og-bg-gray-300 mb-2 p-2 rounded" style="height: 50px;">
                    <div class="col-12 position-relative" style="top: 2px;">
                        <div class="form-check form-switch float-start">
                            <label class="form-check-label" for="profitCompact">Compact</label>
                            <input class="form-check-input" type="checkbox" id="profitCompact" checked>
                        </div>
                        <div class="profit-legends float-end">
                            Information
                            <i class="fa-solid fa-circle-info" data-bs-toggle="tooltip" data-bs-html="true" title="
                            <i class='fa-solid fa-seedling'></i> - involves farming<br/>
                            <i class='fa-solid fa-mortar-pestle'></i> - involves processing<br/>
                            <i class='fa-solid fa-tree'></i> - involves foraging<br/>
                            <b>Plenny+</b> - end-game content.<br/>
                            <b>Shop Profits</b> - based on a fully-upgraded shop, during events, at great haggle price."></i>
                        </div>
                    </div>
                </div>

                <!-- LEFT COLUMN START -->
                <div class="profit-group col-xl-6 col-12 p-3">
                    <!-- PLAYER SHOP START -->
                    <div class="text-center my-3 p-2">
                        <div class="rounded py-3 text-light mx-auto og-header og-bg-profitgreen">Player Shop</div>
                    </div>
                    <table id="profit-Player" class="profit-table table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" class="profitToggleable">Type</th>
                                <th scope="col">Item</th>
                                <th scope="col" class="profitToggleable text-end profit-nosort">Cost</th>
                                <th scope="col" class="profitToggleable text-end profit-nosort">Sell</th>
                                <th scope="col" class="text-center profit-nosort"></th>
                                <th scope="col" class="text-center profit-nosort"></th>
                                <th scope="col" class="text-center profit-nosort"></th>
                                <th scope="col" class="text-center d-none profit-nosort"></th>
                                <th scope="col" class="text-end">Profit</th>
                                <th scope="col" class="profit-nosort"></th>
                            </tr>
                        </thead>
                        <tbody>
                                <?php include('php/profitPlayerShop.php'); ?>
                        </tbody>
                    </table>
                    <!-- PLAYER SHOP END -->
                </div>
                <!-- LEFT COLUMN END -->

                <!-- RIGHT COLUMN START -->
                <div class="profit-group col-xl-6 col-12 p-3">
                    <!-- PLENNY START -->
                    <div class="text-center my-3 p-2">
                        <div class="rounded py-3 text-light mx-auto og-header og-bg-profitgreen">Plenny's</div>
                    </div>
                    <table id="profit-Plenny" class="profit-table table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" class="profitToggleable">Lvl</th>
                                <th scope="col">Item</th>
                                <th scope="col" class="profitToggleable text-end profit-nosort">Cost</th>
                                <th scope="col" class="profitToggleable text-end profit-nosort">Sell</th>
                                <th scope="col" class="text-center profit-nosort"></th>
                                <th scope="col" class="text-center profit-nosort"></th>
                                <th scope="col" class="text-center profit-nosort"></th>
                                <th scope="col" class="text-end">Profit</th>
                                <th scope="col" class="profit-nosort"></th>
                            </tr>
                        </thead>
                        <tbody>
                                <?php include('php/profitPlenny.php'); ?>
                        </tbody>
                    </table>
                    <!-- PLENNY END -->
                    <!-- MEED START -->
                    <div class="text-center my-3 p-2">
                        <div class="rounded py-3 text-light mx-auto og-header og-bg-profitgreen">Meed's Seeds</div>
                    </div>
                    <table id="profit-Meed" class="profit-table table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" class="profitToggleable">Type</th>
                                <th scope="col">Item</th>
                                <th scope="col" class="profitToggleable text-end profit-nosort">Cost</th>
                                <th scope="col" class="profitToggleable text-end profit-nosort">Sell</th>
                                <th scope="col" class="text-center profit-nosort"></th>
                                <th scope="col" class="text-center profit-nosort"></th>
                                <th scope="col" class="text-center profit-nosort"></th>
                                <th scope="col" class="text-end">Profit</th>
                                <th scope="col" class="profit-nosort"></th>
                            </tr>
                        </thead>
                        <tbody>
                                <?php include('php/profitMeed.php'); ?>
                        </tbody>
                    </table>
                    <!-- MEED END -->
                    <!-- CAFE START -->
                    <div class="text-center my-3 p-2">
                        <div class="rounded py-3 text-light mx-auto og-header og-bg-profitgreen">Cuddlecups Cafe</div>
                    </div>
                    <table id="profit-Cafe" class="profit-table table table-striped">
                        <thead>
                            <tr>
                                <th scope="col" class="profitToggleable">Type</th>
                                <th scope="col">Item</th>
                                <th scope="col" class="profitToggleable text-end profit-nosort">Cost</th>
                                <th scope="col" class="profitToggleable text-end profit-nosort">Sell</th>
                                <th scope="col" class="text-center profit-nosort"></th>
                                <th scope="col" class="text-center profit-nosort"></th>
                                <th scope="col" class="text-center profit-nosort"></th>
                                <th scope="col" class="text-end">Profit</th>
                                <th scope="col" class="profit-nosort"></th>
                            </tr>
                        </thead>
                        <tbody>
                                <?php include('php/profitCafe.php'); ?>
                        </tbody>
                    </table>
                    <!-- CAFE END -->
                </div>
                <!-- RIGHT COLUMN END -->

            </div>
		</main>

		<?php include('php/footer.php'); ?>

			<script src='js/jquery-3.6.3.min.js'></script>
			<script src='js/jquery.dataTables.min.js'></script>
			<script src='js/dataTables.bootstrap5.min.js'></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
			<script src='js/profit.js?v=1672553263'></script>
	</body>
</html>