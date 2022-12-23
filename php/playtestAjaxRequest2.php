<?php

	// connect to database
	$db = mysqli_connect('server54.web-hosting.com', 'ooblzwqi', 'WHpcWuYDudUI', 'ooblzwqi_ooblets');

	$sql = "SELECT * FROM dancecards";
	$query = mysqli_query($db, $sql);
	$result = [];

	while($row = mysqli_fetch_array($query)) {
        $i++;
        $result[$i]['cost'] = $row['cost'];
        $result[$i]['name'] = $row['name'];
        $result[$i]['desc'] = $row['description'];
	}

	mysqli_close($con);
	header('Content-Type: application/json');
    echo json_encode($result);

?>