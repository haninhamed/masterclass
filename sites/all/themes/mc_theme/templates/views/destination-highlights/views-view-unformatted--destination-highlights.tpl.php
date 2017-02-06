<?php

/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>

<div class="card multipage p1">
	<div class="controls pabsolute">
		<span class="fa fa-chevron-left"></span>

		<span class="fa fa-chevron-right"></span>
	</div>

	<div class="multipage-wrapper flex--box row jstart astart">
		<?php foreach ($rows as $id => $row): ?>
		  
		    <?php print $row; ?>

		<?php endforeach; ?>
	</div>
</div>