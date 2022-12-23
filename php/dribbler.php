<?php while($row = mysqli_fetch_assoc($dribblerresult)) {

	$type = $row['type'];
	$uses = $row['uses'];
	$cost = $row['cost'];
	?>

	<tr>
		<td><?= $type ?></td>
		<td><?= $uses ?></td>
		<td><?= $cost ?></td>
	</tr>

<?php } ?>
