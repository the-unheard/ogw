<?php include('php/server.php');?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
	<title>Ooblets Guide | Fishing</title>
		<?php include('php/meta.php'); ?>
	</head>
	<body>
		<?php include('php/header.php'); ?>

		<main>
			<div class="row p-2 bg-light mx-auto">

				<!-- CONTROLS -->
				<div class="fh-topcontrols og-bg-gray-300 mb-2 p-2 rounded" style="height: 50px;">
					<div class="col-xl-5 col-lg-7 col-md-9 col-12 position-relative" style="top: 2px;">
						<div class="input-group">
							<span>TRY</span>
							<select class="form-select form-select-sm" id="fh-calc-loc">
								<option value="" disabled selected>Dangling Spot</option>
								<option value="badgetown">Badgetown</option>
								<option value="wildlands">Wildlands</option>
								<option value="portforward">Port Forward</option>
							</select>
							<select class="form-select form-select-sm" id="fh-calc-bait">
								<option value="" disabled selected>Bait Type</option>
								<option value="basic">Basic</option>
								<option value="hq">High Quality</option>
								<option value="super">Super</option>
							</select>
							<input  id="fh-calc-qty" type="number" class="form-control form-control-sm d-inline-block" placeholder="Quantity">
							<button class="fh-calculate rounded-end rounded-end btn btn-sm" data-bs-toggle="modal" data-bs-target="#fh-modal"><i class="fa-solid fa-fish"></i></button>
						</div>
					</div>
				</div>

				<!-- MAIN CONTENT -->
				<div class="bg-light mt-0 pt-2 pb-5 text-center">
					<div class="fh-spot mx-auto my-3 og-bg-cyan rounded py-3 text-light og-header-wide">Badgetown Sea Dangling</div>	
					<div class="fsh-group">
						<div class="row">
							<?php include('php/fishingBadgetown.php'); ?>
						</div>
					</div>
					<div class="fh-spot mx-auto my-3 og-bg-cyan rounded py-3 text-light og-header-wide">Wildlands Droneydrip Pond</div>	
					<div class="fsh-group">
						<div class="row">
							<?php include('php/fishingWildlands.php'); ?>
						</div>
					</div>
					<div class="fh-spot mx-auto my-3 og-bg-cyan rounded py-3 text-light og-header-wide">Port Forward</div>	
					<div class="fsh-group">
						<div class="row">
							<?php include('php/fishingPortforward.php'); ?>
						</div>
					</div>
				</div>

			</div>
		</main>

		<?php include('php/footer.php'); ?>

		<!-- Modal for fishing simulation -->
		<div class="modal fade" id="fh-modal" tabindex="-1">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Result</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body mx-auto text-center">
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

			<script src='js/jquery-3.2.1.min.js'></script>
			<script src='js/fishing.js?v=1653284088'></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	</body>
</html>