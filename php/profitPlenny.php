Hello
<?php foreach($profitPlennyItems as $profitPlennyItem) {

?>
            <!-- do while loop here -->
            <?php while($row = mysqli_fetch_assoc($profitPlennyItem[1])) {

                $type = $row['type'];
                $item = $row['item'];
                $cost = $row['cost'];
                $value = $row['value'];
                $farming = $row['farming'];
                $processing = $row['processing'];
                $foraging = $row['foraging'];
                $profit = $row['profit'];

                ?>

                    <tr>
                        <td class=""><?= $type ?></td>
                        <td><?= $item ?></td>
                        <td class="text-end"><?= $cost ?></td>
                        <td class="text-end"><?= $value ?></td>
                        <td class="text-center"><?php if ($farming == "Y") : ?><i class="fa-solid fa-seedling"></i><?php endif; ?></td>
                        <td class="text-center"><?php if ($processing == "Y") : ?><i class="fa-solid fa-mortar-pestle"></i></i><?php endif; ?></td>
                        <td class="text-center"><?php if ($foraging == "Y") : ?><i class="fa-solid fa-tree"></i><?php endif; ?></td>
                        <td class="text-end profit-plennyProfits"><?= $profit ?></td>
                        <td><div class="profit-plennyBar"></div></td>
                    </tr>

            <?php } ?>

<?php } ?>
