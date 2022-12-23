<?php while($row = mysqli_fetch_assoc($badgetownoobletsresult)) {

	$name = $row['name'];
	$unlockedby = $row['unlockedby'];
	?>

	<tr>
		<td><?= $name ?></td>
		<td><?= $unlockedby ?></td>
	</tr>

<?php } ?>
