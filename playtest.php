<!DOCTYPE HTML>
<html lang="en">
	<head>
	<title>Ooblets Guide | Playtest</title>
		<?php include('php/meta.php'); ?>
	</head>
		
	<body>
		<?php include('php/header.php'); ?>

		<main class="pt-main mb-5">
			<div class="p-2 bg-light mx-auto" style="height: 821px; width: 1600px;">

				<!-- game screen -->
				<div class="pt-g position-relative float-start rounded p-4">
					<div class="pt-g-message og-bg-playpurple p-2 rounded position-absolute mx-auto my-0 start-0 end-0 w-25 text-center"></div>
					<div class="pt-g-points float-start h-100 text-center">
						<div class="pt-g-goal text-light fw-bold">0</div>
						<div class="pt-g-bar position-relative og-bg-playpurple">
							<div class="bottom-0 position-absolute"></div>
						</div>
						<div class="pt-g-current text-light fw-bold og-bg-playpurple">0</div>
					</div>
					<div class="pt-g-stats position-absolute text-light text-center fw-bold">
						<div class="pt-g-fluster">
							<div class="rounded-circle position-relative"></div>
							<span class="rounded og-bg-playpurple d-block position-relative">0</span>
						</div>
						<div class="pt-g-hype">
							<div class="rounded-circle position-relative"></div>
							<span class="rounded og-bg-playpurple d-block position-relative">0</span>
						</div>
						<div class="pt-g-beats position-relative">
							<span class="rounded og-bg-playpurple d-block position-relative">BEATS</span>
							<div class="rounded-circle float-end position-relative">0</div>
						</div>
					</div>
					<div class="pt-g-log og-bg-playpurple text-light rounded p-2 position-absolute fw-bold">
						<span>Turn <a>0</a></span>
					</div>
					<div class="pt-g-end og-bg-playpurple text-light rounded p-2 position-absolute fw-bold">end turn</div>
					<div class="pt-g-cardgame position-absolute mx-auto my-0 start-0 end-0 text-center"></div>
				</div>

				<!-- team screen -->
				<div class="pt-t float-start rounded text-center">
					<p class="pt-t-title py-2 rounded w-50 mx-auto og-bg-playyellow">YOUR SQUAD</p>
					<div class="pt-t-members">
						<div class="pt-t-member float-start">
							<div></div>
							<select class="form-select form-select-sm">
								<option disabled selected>Add Ooblet</option>
								<option value="none">Empty</option>
							</select>
						</div>
						<div class="pt-t-member float-start">
							<div></div>
							<select class="form-select form-select-sm">
								<option disabled selected>Add Ooblet</option>
								<option value="none">Empty</option>
							</select>
						</div>
						<div class="pt-t-member float-start">
							<div></div>
							<select class="form-select form-select-sm">
								<option disabled selected>Add Ooblet</option>
								<option value="none">Empty</option>
							</select>
						</div>
						<div class="pt-t-member float-start">
							<div></div>
							<select class="form-select form-select-sm">
								<option disabled selected>Add Ooblet</option>
								<option value="none">Empty</option>
							</select>
						</div>
						<div class="pt-t-member float-start">
							<div></div>
							<select class="form-select form-select-sm">
								<option disabled selected>Add Ooblet</option>
								<option value="none">Empty</option>
							</select>
						</div>
						<div class="pt-t-member float-start">
							<div></div>
							<select class="form-select form-select-sm">
								<option disabled selected>Add Ooblet</option>
								<option value="none">Empty</option>
							</select>
						</div>
					</div>
					<div class="pt-t-control">
						<button class="pt-t-start rounded-pill px-5 py-1 text-light border-5 border-light mt-3">READY</button>
					</div>
				</div>
				<!-- team screen end -->
			</div>
		</main>

			<script src='js/jquery-3.2.1.min.js'></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
			<script src='js/playtest.js?v=1653284088'></script>
			
	</body>
</html>