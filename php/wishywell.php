<?php while($row = mysqli_fetch_assoc($wishywellresult)) {

	$wish = $row['wish'];
	$type = $row['type'];
	$cost = $row['cost'];
	?>

	<tr>
		<td><?= $wish ?></td>
		<td><?= $type ?></td>
		<td><?= $cost ?></td>
	</tr>

<?php } ?>
