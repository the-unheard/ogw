<?php while($row = mysqli_fetch_assoc($wildlandsresult)) {

	$unlockables = $row['unlockables'];
	$type = $row['type'];
	$level = $row['level'];
	?>

	<tr>
		<td><?= $unlockables ?></td>
		<td><?= $type ?></td>
		<td><?= $level ?></td>
	</tr>

<?php } ?>
