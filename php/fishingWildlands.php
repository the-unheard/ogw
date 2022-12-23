<?php foreach($fishingWildlands as $wild) {

?>

    <div class="col-xl-4 col-lg-6 col-12 p-1">

        <h6 class="py-2 og-bg-gray-200 w-75 mx-auto" style="color: var(--offblackfont);"><?= $wild[0] ?> Bait</h6>
        <div class="fh-catches">
            <?php while($row = mysqli_fetch_assoc($wild[1])) {

                $item = $row['item'];
                $qty = $row['qty'];
                $rate = $row['rate'];
                $img = str_replace(' ', '_', $item);

                ?>
                    <div class="fh-catch rounded position-relative d-inline-block og-bg-gray-200">
                        <div class="fh-catch-img" style="background-image: url('images/fishing/<?= $img ?>.png');"></div>
                        <div class="fh-catch-name"><?= ucwords($item) ?></div>
                        <div class="fh-catch-qty"><?= $qty ?></div>
                        <div class="fh-catch-rate position-absolute og-bg-cyan text-light"><?= $rate ?>%</div>
                    </div>

            <?php } ?>
        </div>

    </div>

<?php } ?>
