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
                        <td class="d-none text-end"><?= $cost ?></td>
                        <td class="d-none text-end"><?= $value ?></td>
                        <td class="text-center"><?php if ($farming == "Y") : ?><i class="fa-solid fa-seedling"></i><?php endif; ?></td>
                        <td class="text-center"><?php if ($processing == "Y") : ?><i class="fa-solid fa-mortar-pestle"></i></i><?php endif; ?></td>
                        <td class="text-center"><?php if ($foraging == "Y") : ?><i class="fa-solid fa-tree"></i><?php endif; ?></td>
                        <td class="text-center"><?php if ($others == "Y") : ?><i class="fa-solid fa-diamond"></i><?php endif; ?></td>
                        <td class="text-end profit-playerProfits"><?= $profit ?></td>
                        <td><div class="profit-obar"></div></td>
                    </tr>

            <?php } ?>

<?php } ?>
