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

<div class="affiliate-group flex--box wrap astart jstart">
	<div class="card team yellow">
		<div>
			<div class="img img-overlay widescreenB--wrapper" style="background-image: url(<?php print $fields['field_cover_image']->content; ?>);">
				<h3><?php print $fields['title']->content; ?></h3>

				<div class="pabsolute">
					<div class="flex--box row acenter jaround wrap">
						<a href="tel:<?php print $fields['field_phone_number']->content; ?>" class="icon-button fa fa-phone yellow-a">
							<span>0203 617 7934</span>
						</a>

						<a href="mailto:<?php print $fields['field_email_address']->content; ?>" class="icon-button yellow-a">
							<span>pete.robertson@masterclasstours.co.uk</span>
						</a>

						<a href="<?php print $fields['field_linkedin']->content; ?>" target="_blank" class="icon-button yellow-a"><span>on LinkedIn</span></a>
					</div>
				</div>
			</div>

			<div class="info">
				<p><?php print $fields['field_role']->content; ?></p>
			</div>
		</div>
	</div>

	<div class="flex--box column wrap jstart astart">
		<?php print $fields['field_bio']->content; ?>
	</div>
</div>
