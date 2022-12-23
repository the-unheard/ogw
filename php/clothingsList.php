<?php foreach($clothingTypes as $clothingType) {

?>

    <div class="clothings-group text-center py-4">
        <div class="clothings-header text-center my-3 p-2">
            <div class="rounded py-3 text-light mx-auto og-bg-darkpurple og-header"><?= $clothingType[0] ?></div>
        </div>
        <div class="clothings-items">
            <!-- do while loop here -->
            <?php while($row = mysqli_fetch_assoc($clothingType[1])) {

                $name = $row['name'];
                $location = $row['location'];
                $cost = $row['cost'];
                $type = $row['type'];
                $img = str_replace(' ', '_', $name);
                $img = str_replace("'", '', $img);

                ?>
                    <div class="clothings-item d-inline-block m-2 p-3 align-top og-bg-gray-200 position-relative">
                        <span class="clothings-cost position-absolute og-bg-darkpurple text-light"><?= $cost ?></span>
                        <span class="clothings-location position-absolute og-bg-gray-400"><?= $location ?></span>
                        <div class="clothings-img mx-auto" style="background-image: url('../images/clothings/<?= $type ?>/<?= $img ?>.jpg');"></div>
                        <p class="clothings-name og-ellipsis" title="<?= ucwords($name) ?>"><?= ucwords($name) ?></p>
                    </div>

            <?php } ?>

        </div>
    </div>


<?php } ?>
