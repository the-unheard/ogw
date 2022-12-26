<?php foreach($profitPlayerShopItems as $profitPlayerShopItem) {

?>
            <!-- do while loop here -->
            <?php while($row = mysqli_fetch_assoc($profitPlayerShopItem[1])) {

                $type = $row['type'];
                $name = $row['name'];
                $cost = $row['cost'];
                $value = $row['value'];
                $farming = $row['farming'];
                $processing = $row['processing'];
                $foraging = $row['foraging'];
                $others = $row['others'];
                $profit = $row['profit'];

                ?>

                    <tr>
                        <td><?= $type ?></td>
                        <td><?= $name ?></td>
                        <td><?= $cost ?></td>
                        <td><?= $value ?></td>
                        <td><?= $farming ?></td>
                        <td><?= $processing ?></td>
                        <td><?= $foraging ?></td>
                        <td><?= $others ?></td>
                        <td><?= $profit ?></td>
                    </tr>

            <?php } ?>

<?php } ?>
