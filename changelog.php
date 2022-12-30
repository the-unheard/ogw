<?php include('php/server.php');?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
	<title>Ooblets Guide | Changelog</title>
		<?php include('php/meta.php'); ?>
	</head>
	<body>
		<?php include('php/header.php'); ?>

		<main>
			<div class="row p-2 bg-light mx-auto">
			    <div class="rounded py-3 text-light mx-auto og-header og-bg-green">Changelog</div>

				<div class="tp-main py-4 p-2 col-10 mx-auto">
					<?php include('php/changelog.php'); ?>
				</div>
			</div>
		</main>

		<?php include('php/footer.php'); ?>

			<script src='js/jquery-3.2.1.min.js'></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
	</body>
</html>