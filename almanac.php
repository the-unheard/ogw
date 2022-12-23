<?php include('php/server.php');?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
	<title>Ooblets Guide | Almanac</title>
		<?php include('php/meta.php'); ?>
	</head>
		
	<body>
		<?php include('php/header.php'); ?>

		<main class="almanac-main">
			<div class="row p-2 bg-light mx-auto">
				<!-- CONTROLS -->
				<div class="main-top col-12 og-bg-gray-300 p-2" style="height: 50px;">
					<!-- control details -->
					<div class="dropdown btn-group">
						<button class="btn btn-sm btn-secondary dropdown-toggle me-2" type="button" id="detailsDropDown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
							Details
						</button>
						<ul class="dropdown-menu checkbox-menu allow-focus" aria-labelledby="detailsDropDown">
							<li><label for="filter-variant"><input type="checkbox" class="filter-details" id="filter-variant" value="variant">Variant</label></li>
							<li><label for="filter-food"><input type="checkbox" class="filter-details" id="filter-food" value="food">Food</label></li>
							<li><label for="filter-bio"><input type="checkbox" class="filter-details" id="filter-bio" value="bio">Bio</label></li>
							<li><label for="filter-cards"><input type="checkbox" class="filter-details" id="filter-cards" value="cards">Cards</label></li>
						</ul>
					</div>
					<!-- control locations -->
					<div class="dropdown btn-group">
						<button class="btn btn-sm btn-secondary dropdown-toggle me-2" type="button" id="detailsDropDown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
							Locations
						</button>
						<ul class="dropdown-menu checkbox-menu allow-focus" aria-labelledby="detailsDropDown">
							<li><label for="filter-badgetown"><input type="checkbox" class="filter-location" id="filter-badgetown" value="badgetown" checked>Badgetown</label></li>
							<li><label for="filter-mamoonia"><input type="checkbox" class="filter-location" id="filter-mamoonia" value="mamoonia" checked>Mamoonia</label></li>
							<li><label for="filter-nullwhere"><input type="checkbox" class="filter-location" id="filter-nullwhere" value="nullwhere" checked>Nullwhere</label></li>
							<li><label for="filter-portforward"><input type="checkbox" class="filter-location" id="filter-portforward" value="portforward" checked>Port Forward</label></li>
							<li><label for="filter-pantsabearhill"><input type="checkbox" class="filter-location" id="filter-pantsabearhill" value="pantsabearhill" checked>Pantsabear Hill</label></li>
							<li><label for="filter-tippytop"><input type="checkbox" class="filter-location" id="filter-tippytop" value="tippytop" checked>Tippy Top</label></li>
							<li><label for="filter-oobtrotter"><input type="checkbox" class="filter-location" id="filter-oobtrotter" value="oobtrotter" checked>Oobtrotter</label></li>
							<li><label for="filter-bunglebeemine"><input type="checkbox" class="filter-location" id="filter-bunglebeemine" value="bunglebeemine" checked>Bunglebee Mine</label></li>
						</ul>
					</div>
					<!-- control wishlist -->
					<div class="btn-group bg-secondary p-1 text-white rounded">
						<input type="checkbox" class="view-wishlist-cb position-relative my-auto mx-0" name="filter-wishlist" id="filter-wishenabled">
						<label class="position-relative" for="filter-wishenabled" style="top: 1px; margin-right: 8px; font-size: .875rem">View Wishlist</label>
						<button type="button" class="btn btn-sm btn-light rounded wishlist-convert" data-bs-toggle="modal" data-bs-target="#almanac-canvasModal" style="padding: 0px 10px;"><i class="fa-solid fa-camera"></i></button>
					</div>
					<!-- control end -->
				</div>
				<!-- MAIN CONTENT -->
				<div class="main-left col-xxl-10 bg-light p-2 almanac-ooblets">
					<div class="row">
						<?php include('php/almanac.php'); ?>

						<!-- FULL SIZE WISHLIST -->
						<div class="almanac-fullwish mx-auto my-0 w-auto text-center">
							<div class="almanac-fullwish-content">
							</div>
							<p class="canvas-credit" style="display: none;">@ ooblets.guide</p>
						</div>
					</div>
				</div>
				<!-- SIDE BAR -->
				<div class="main-right col-xxl-2 p-2">
					<div class="container p-2 mt-1">
						<span class="og-bg-green py-1 px-2 d-flex w-100">Wishlist</span>
						<div class="sidebar-wishes p-2" data-placeholder="Your wishlist is empty. Click an ooblet to add/remove it. To save your wishlist, save or bookmark the URL after you are done."></div>
					</div>
				</div>
			</div>
		</main>

		<?php include('php/footer.php'); ?>

		<!-- Modal for screenshot -->
		<div class="modal fade" id="almanac-canvasModal" tabindex="-1">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Wishlist</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body mx-auto">
						<div class="spinner-border" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>


			<script src='js/jquery-3.2.1.min.js'></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
			<script src='js/html2canvas.js'></script>
			<script src='js/almanac.js?v=1653284088'></script>

	</body>
</html>