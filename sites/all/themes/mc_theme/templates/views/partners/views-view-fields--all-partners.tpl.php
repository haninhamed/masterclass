<?php

/**
 * @file
 * Main view template.
 *
 * Variables available:
 * - $classes_array: An array of classes determined in
 *	 template_preprocess_views_view(). Default classes are:
 *		 .view
 *		 .view-[css_name]
 *		 .view-id-[view_name]
 *		 .view-display-id-[display_name]
 *		 .view-dom-id-[dom_id]
 * - $classes: A string version of $classes_array for use in the class attribute
 * - $css_name: A css-safe version of the view name.
 * - $css_class: The user-specified classes names, if any
 * - $header: The view header
 * - $footer: The view footer
 * - $rows: The results of the view query, if any
 * - $empty: The empty text to display if the view is empty
 * - $pager: The pager next/prev links to display, if any
 * - $exposed: Exposed widget form/info to display
 * - $feed_icon: Feed icon to display, if any
 * - $more: A link to view more, if any
 *
 * @ingroup views_templates
 */
?>

<div class="affiliate-group">
	<div class="card affiliate yellow">
		<div>
			<div class="img img-overlay widescreen--wrapper" style="background-image: url(<?php print $fields['field_logo']->content; ?>);">
				<p><?php print $fields['field_ca']->content; ?></p>
			</div>

			<div class="info">
				<p><?php print $fields['title']->content; ?></p>
			</div>
		</div>

		<a href="<?php print $fields['field_link']->content; ?>" class="text-button orange-a" target="_blank">find out more</a>
	</div>

	<div class="flex--box column wrap jstart astart">
		<?php print $fields['body']->content; ?>
	</div>
</div>

