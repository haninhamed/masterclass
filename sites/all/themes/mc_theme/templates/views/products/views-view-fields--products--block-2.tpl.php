<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */
?>


<div>
    <a href="<?php print $fields['path']->content; ?>">
    <?php
        $img_url    = $fields['uri']->content;
        $style      = 'large';
    ?>
    <!-- <p>(<?php print image_style_url('medium', $img_url) ?>)</p> -->
        <div class="img img-overlay widescreen--wrapper" style='background-image: url(<?php print $fields['field_cover_image_1']->content; ?>);'>
            <h3>
            	<?php print $fields['title']->content; ?>
        	</h3>
            
            <p class="blurb">
            	<?php print $fields['field_ca']->content; ?>
        	</p>
        </div>

        <div class="info">
            <div class="flex--box row start-align between">
            <!--     <h3>
                	<?php print $fields['title']->content; ?>
            	</h3> 

                <span class="fa fa-chevron-right"></span>-->
            </div>

            <div class="">
        	    <p>
        	    	<?php print $fields['field_excerpt_2']->content; ?>
        		</p>
        	</div>
        </div>
    </a>
</div>
