<?php

	// connect to database
	$db = mysqli_connect('server54.web-hosting.com', 'ooblzwqi', 'WHpcWuYDudUI', 'ooblzwqi_ooblets');
	$name = $_POST['name'];

	$sql = "SELECT * FROM almanac WHERE name='$name'";
	$query = mysqli_query($db, $sql);
	$result = [];

	while($row = mysqli_fetch_array($query)) {
        $result[0]['cost'] = $row['move1cost'];
        $result[0]['name'] = $row['move1name'];
        $result[0]['desc'] = $row['move1desc'];
        $result[1]['cost'] = $row['move2cost'];
        $result[1]['name'] = $row['move2name'];
        $result[1]['desc'] = $row['move2desc'];
        $result[2]['cost'] = $row['move3cost'];
        $result[2]['name'] = $row['move3name'];
        $result[2]['desc'] = $row['move3desc'];
	}

	mysqli_close($con);
	header('Content-Type: application/json');
    echo json_encode($result);

?>