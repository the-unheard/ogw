<?php while($row = mysqli_fetch_assoc($backpacksresult)) {

	$type = $row['type'];
	$slots = $row['slots'];
	$cost = $row['cost'];
	?>

	<tr>
		<td><?= $type ?></td>
		<td><?= $slots ?></td>
		<td><?= $cost ?></td>
	</tr>

<?php } ?>
