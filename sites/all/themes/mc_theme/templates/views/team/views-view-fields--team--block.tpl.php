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

<div class="card team">
    <div>
        <a href="<?php print $fields['path']->content; ?>">
            <div class="img img-overlay widescreenB--wrapper" style="background-image: url(<?php print $fields['uri']->content; ?>);">
                <h3>
                	<?php print $fields['title']->content; ?>
            	</h3>
                
                <div class="pabsolute">
                    <div class="flex--box row acenter jaround wrap">
                        <a href="tel:<?php print $fields['field_phone']->content; ?>" class="icon-button fa fa-phone yellow-a">
                            <span><?php print $fields['field_phone']->content; ?></span>
                        </a>

                        <a href="mailto:<?php print $fields['field_email']->content; ?>" class="icon-button yellow-a">
                            <span><?php print $fields['field_email']->content; ?></span>
                        </a>

                        <a href="<?php print $fields['field_linked_in']->content; ?>" target="_blank" class="icon-button yellow-a"><span> LinkedIn</span></a>
                    </div>
                </div>
            </div>
        </a>
        
        <div class="info">
            <!-- <a href="<?php print $fields['path']->content; ?>" class="flex--box row start-align between"> -->
                <!-- <h3> -->
                	<!-- <?php print $fields['title']->content; ?> -->
            	<!-- </h3> -->

                <!-- <span class="fa fa-chevron-right"></span> -->
            <!-- </a> -->

            <a href="<?php print $fields['path']->content; ?>" class="flex--box row start-align between">
        	    <p>
        	    	<?php print $fields['field_sub_title']->content; ?>
        		</p>
        	</a>
        </div>
    </div>
</div>