<?php while($row = mysqli_fetch_assoc($reciperesult)) {

	$name = $row['name'];
	$location = $row['location'];
	?>

	<tr>
		<td><?= $name ?></td>
		<td><?= $location ?></td>
	</tr>

<?php } ?>
