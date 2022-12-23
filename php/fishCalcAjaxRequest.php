<?php

	// connect to database
	$db = mysqli_connect('server54.web-hosting.com', 'ooblzwqi', 'WHpcWuYDudUI', 'ooblzwqi_ooblets');
	$location = $_POST['location'];
	$bait = $_POST['bait'];

	$sql = "SELECT * FROM fishing WHERE location='$location' AND bait='$bait'";
	$query = mysqli_query($db, $sql);
	$result = [];

	while($row = mysqli_fetch_array($query)) {
		$i++;
		$result[$i]['item'] = $row['item'];
		$result[$i]['qty'] = $row['qty'];
		$result[$i]['rate'] = $row['rate'];
	}

	mysqli_close($con);
	header('Content-Type: application/json');
    echo json_encode($result);
?>