<?php while($row = mysqli_fetch_assoc($slurryresult)) {

	$item = $row['item'];
	$amount = $row['amount'];
	?>

	<tr>
		<td><?= $item ?></td>
		<td><?= $amount ?></td>
	</tr>

<?php } ?>
