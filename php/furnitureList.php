<?php foreach($furnitureTypes as $furnitureType) {

?>

    <div class="furnitures-group text-center py-4">
        <div class="furniture-header text-center my-3 p-2">
            <div class="rounded py-3 text-light mx-auto og-bg-wisteria og-header"><?= $furnitureType[0] ?></div>
        </div>
        <div class="furnitures-items">
            <!-- do while loop here -->
            <?php while($row = mysqli_fetch_assoc($furnitureType[1])) {

                $name = $row['name'];
                $location = $row['location'];
                $cost = $row['cost'];
                $type = $row['type'];
                $img = str_replace(' ', '_', $name);
                $img = str_replace("'", '', $img);

                ?>
                    <div class="furniture-item d-inline-block m-3 p-3 align-top og-bg-gray-200 position-relative">
                        <span class="furniture-cost position-absolute og-bg-wisteria text-light"><?= $cost ?></span>
                        <span class="furniture-location position-absolute og-bg-gray-400"><?= $location ?></span>
                        <div class="furniture-img mx-auto" style="background-image: url('images/furnitures/<?= $type ?>/<?= $img ?>.png');"></div>
                        <p class="furniture-name og-ellipsis" title="<?= ucwords($name) ?>"><?= ucwords($name) ?></p>
                    </div>

            <?php } ?>

        </div>
    </div>


<?php } ?>
