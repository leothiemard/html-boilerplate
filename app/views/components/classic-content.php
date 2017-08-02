<section class="section section--big classic-content classic-content--<?= $side_image ?> cs-<?= $color_schema ?>"
	<?= ($url_background) ? 'style="background-image:url(\'' . $url_background . '\')"' : '' ?>
>
	<div class="container">
		<div class="row row-align-middle">
			<div class="gr-12 gr-5@tablet <?= ($side_image == 'left') ? 'push-7@tablet' : '' ?>">
				<?php if ($title): ?>
					<h1 class="h1 m-b">
						<?= $title ?>
					</h1>
				<?php endif ?>
				<?php if ($url_image): ?>
					<img class="classic-content__img hide@tablet" src="<?= $url_image ?>" alt="<?= esc_attr(@$title) ?>" />
				<?php endif ?>
				<?php if ($text): ?>
					<div class="tf vr">
						<?= $text ?>
					</div>
				<?php endif ?>
				<?php if ($link_cta && $label_cta): ?>
					<a class="btn m-t" href="<?= $link_cta ?>" title="<?= esc_attr($label_cta) ?>">
						<?= $label_cta ?>
					</a>
				<?php endif ?>
			</div>
			<div class="gr-12 gr-7@tablet <?= ($side_image == 'left') ? 'pull-5@tablet' : '' ?>">
				<?php if ($url_image): ?>
					<img class="classic-content__img hide show@tablet" src="<?= $url_image ?>" alt="<?= esc_attr(@$title) ?>" />
				<?php endif ?>
			</div>
		</div>
	</div>
</section>
