<!DOCTYPE HTML>
<html lang="en">
	<head>
	<title>Ooblets Guide | Home</title>
		<?php include('php/meta.php'); ?>
	</head>
	<body>
		<?php include('php/header.php'); ?>

		<main>
			<div class="row p-2 bg-light mx-auto">
				<!-- INTRO -->
				<div class="main-top col-11 py-4">
					<h1 class="display-4 text-center mb-3" style="font-family: 'Fredoka One';color: var(--offblackfont2);">Ooblets Guide</h1>
					<div class="og-bg-gray-300 text-center p-2 rounded">Keeping Ooblets Guide up and updated requires countless hours and, sadly, money.
						<br/>
						You can help me do more by making a small donation. Thank you very much!
					</div>
				</div>
				<!-- MAIN CONTENT -->
				<div class="main-left col-xxl-8 bg-light mt-3 py-5">
					<!-- Showcase: Almanac -->
					<div class="row justify-content-center mb-3">
						<h4 class="text-center">Almanac</h4>
						<div class="text-center mb-2 small">Learn all ooblets color variants, cards, and more spoilers</div>
						<div class="text-center">
							<img src="https://ooblets.guide/images/ooblets/lumpstump_c.png"/><img src="https://ooblets.guide/images/ooblets/shrumbo_c.png"/><img src="https://ooblets.guide/images/ooblets/bristlebud_c.png"/><img src="https://ooblets.guide/images/ooblets/clomper_c.png"/>
						</div>
					</div>
					<!-- Showcase: Farm planner -->
					<div class="row justify-content-center mb-3 pt-3 border-top">
						<h4 class="text-center">Farm Planner</h4>
						<div class="text-center mb-2 small">Plan ahead and design your future farm</div>
						<div style="width:56.5%;">
							<!-- Farm Carousel -->
							<div id="farmCarousel" class="carousel slide" data-bs-ride="carousel">
								<ol class="carousel-indicators">
									<li data-bs-target="#farmCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></li>
									<li data-bs-target="#farmCarousel" data-bs-slide-to="1" aria-label="Slide 2"></li>
									<li data-bs-target="#farmCarousel" data-bs-slide-to="2" aria-label="Slide 3"></li>
								</ol>
								<div class="carousel-inner">
									<div class="carousel-item active">
										<img class="d-block w-100" src="/images/layout/showcase-farm-1.png" alt="First Slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src="/images/layout/showcase-farm-2.png" alt="Second Slide">
									</div>
									<div class="carousel-item">
										<img class="d-block w-100" src="/images/layout/showcase-farm-3.png" alt="Third Slide">
									</div>
								</div>
								<button class="carousel-control-prev" type="button" data-bs-target="#farmCarousel" data-bs-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Previous</span>
								</button>
								<button class="carousel-control-next" type="button" data-bs-target="#farmCarousel" data-bs-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Next</span>
								</button>
							</div>
						</div>
					</div>
					<!-- Showcase: Map -->
					<div class="row justify-content-center mb-3 pt-3 border-top">
						<h4 class="text-center">Map</h4>
						<div class="text-center mb-2 small">Easily find hiding ooblets</div>
						<div class="text-center">
							<img style="width:55%;" src="/images/layout/showcase-map.png"/>
						</div>
					</div>
					<!-- Showcase: More -->
					<div class="row justify-content-center mb-3 pt-3 border-top">
						<h4 class="text-center">And More</h4>
						<div class="text-center mb-2 small">Learn the fishing probabilities, profitable items, and many more!</div>
						<div class="text-center">
							<img src="/images/layout/showcase-fishing.png"/>
						</div>
					</div>

				</div>
				<!-- SIDE BAR -->
				<div class="main-right col-xxl-3 mt-3 bg-light ps-5 py-5">
					<h5 class="og-bg-green p-2 rounded">What's New?</h5>
					<div class="main-changelogGroup py-4">
					    <?php include('php/changelog.php'); ?>
					</div>
					<a type="button" class="btn btn-info btn-sm my-4 mx-2" href="/changelog">Read More <i class="fa-solid fa-angles-right"></i></a>
				</div>
			</div>
		</main>

		<?php include('php/footer.php'); ?>	

			<script src='js/jquery-3.2.1.min.js'></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	</body>
</html>