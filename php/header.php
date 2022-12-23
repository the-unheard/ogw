<nav class="header fixed-top navbar navbar-expand-xl navbar-light bg-light p-0 small">
	<div class="container-fluid">
		<a class="py-4 navbar-brand" href="#">
			<img src="https://ooblets.guide//images/layout/logo.png" alt="" width="47" height="28" class="d-inline-block align-text-top"></a>
		<button class="my-3 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-lg-0 w-100">
				<li class="nav-item">
					<a class="nav-link px-4 <?php if ((stripos($_SERVER['REQUEST_URI'], 'index')) || ($_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'] == 'ooblets.guide/')): ?>active<?php endif; ?>" aria-current="page" href="index">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link px-4 <?php if (stripos($_SERVER['REQUEST_URI'], 'almanac')): ?>active<?php endif; ?>" aria-current="page" href="almanac">Almanac</a>
				</li>
				<li class="nav-item">
					<a class="nav-link px-4 <?php if (stripos($_SERVER['REQUEST_URI'], 'farmplanner')): ?>active<?php endif; ?>" aria-current="page" href="farmplanner">Farm Planner</a>
				</li>
				<!-- <li class="nav-item">
					<a class="nav-link px-4 <?php if (stripos($_SERVER['REQUEST_URI'], 'playtest')): ?>active<?php endif; ?>" aria-current="page" href="playtest">Playtest</a>
				</li> -->
				<li class="nav-item">
					<a class="nav-link px-4 <?php if (stripos($_SERVER['REQUEST_URI'], 'map')): ?>active<?php endif; ?>" aria-current="page" href="map">Map</a>
				</li>
				<li class="nav-item">
					<a class="nav-link px-4 <?php if (stripos($_SERVER['REQUEST_URI'], 'fishing')): ?>active<?php endif; ?>" aria-current="page" href="fishing">Fishing</a>
				</li>
				<li class="nav-item">
					<a class="nav-link px-4 <?php if (stripos($_SERVER['REQUEST_URI'], 'profit')): ?>active<?php endif; ?>" aria-current="page" href="profit">Profit</a>
				</li>
				<li class="nav-item">
					<a class="nav-link px-4 <?php if (stripos($_SERVER['REQUEST_URI'], 'tips')): ?>active<?php endif; ?>" aria-current="page" href="tips">Tips</a>
				</li>
				<li class="nav-item">
					<a class="nav-link px-4 <?php if (stripos($_SERVER['REQUEST_URI'], 'unlockables')): ?>active<?php endif; ?>" aria-current="page" href="unlockables">Unlockables</a>
				</li>
				<li class="nav-item">
					<a class="nav-link px-4 <?php if (stripos($_SERVER['REQUEST_URI'], 'furnitures')): ?>active<?php endif; ?>" aria-current="page" href="furnitures">Furnitures</a>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle px-4 <?php if (stripos($_SERVER['REQUEST_URI'], 'clothings')): ?>active<?php endif; ?>" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-current="page" href="#">Clothings</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
						<li class="<?php if (stripos($_SERVER['REQUEST_URI'], 'clothings/oobaccessories')): ?>c-active<?php endif; ?>">
							<a class="dropdown-item py-2" href="clothings/oobaccessories">Ooblet Accessories</a>
						</li>
						<li class="<?php if (stripos($_SERVER['REQUEST_URI'], 'clothings/tops')): ?>c-active<?php endif; ?>">
							<a class="dropdown-item py-2" href="clothings/tops">Tops</a>
						</li>
						<li class="<?php if (stripos($_SERVER['REQUEST_URI'], 'clothings/bottoms')): ?>c-active<?php endif; ?>">
							<a class="dropdown-item py-2" href="clothings/bottoms">Bottoms</a>
						</li>
						<li class="<?php if (stripos($_SERVER['REQUEST_URI'], 'clothings/outfits')): ?>c-active<?php endif; ?>">
							<a class="dropdown-item py-2" href="clothings/outfits">Outfits</a>
						</li>
						<li class="<?php if (stripos($_SERVER['REQUEST_URI'], 'clothings/shoes')): ?>c-active<?php endif; ?>">
							<a class="dropdown-item py-2" href="clothings/shoes">Shoes</a>
						</li>
						<li class="<?php if (stripos($_SERVER['REQUEST_URI'], 'clothings/backpacks')): ?>c-active<?php endif; ?>">
							<a class="dropdown-item py-2" href="clothings/backpacks">Backpacks</a>
						</li>
						<li class="<?php if (stripos($_SERVER['REQUEST_URI'], 'clothings/accessories')): ?>c-active<?php endif; ?>">
							<a class="dropdown-item py-2" href="clothings/accessories">Accessories</a>
						</li>
					</ul>
				</li>
				<form action="https://www.paypal.com/donate" method="post" target="_top" class="ms-xl-auto">
					<input type="hidden" name="cmd" value="_donations">
					<input type="hidden" name="business" value="K7HLS4YNQKF22">
					<input type="hidden" name="currency_code" value="USD">
					<input type="submit" class="nav-link px-4 bg-warning border-0 text-start w-100 fw-bold" name="submit" title="PayPal - The safer, easier way to pay online!" value="Donate">
				</form>
			</ul>
		</div>
	</div>
</nav>