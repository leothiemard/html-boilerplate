<section class="topbar">
	<div class="container">
		<div class="row row-align-middle">
			<div class="gr-3">
				<a href="<?= home_url() ?>" title="<?= get_bloginfo('name') ?>">
					<img class="topbar__logo" src="<?= asset_url('img/logo-ploom.svg') ?>" title="..." />
				</a>
			</div>
			<?php if (function_exists('bb_nav_menu')): ?>
				<?php bb_nav_menu('topbar', [
					'container' => 'nav',
					'container_class' => '',
					'container_id' => '',
					'menu_class' => 'nav nav--topbar',
					'menu_id' => '',
					'menu_item_class' => 'nav__item'
				]); ?>
			<?php else: ?>
				<nav class="gr-6 t-center">
					<ul class="nav nav--topbar">
						<li class="nav__item">
							<a href="#" title="<?= __('Ploom tech', 'ploom-theme') ?>">
								<?= __('Ploom tech', 'ploom-theme') ?>
							</a>
						</li>
						<li class="nav__item">
							<a href="#" title="<?= __('About', 'ploom-theme') ?>">
								<?= __('About', 'ploom-theme') ?>
							</a>
						</li>
						<li class="nav__item">
							<a href="#" title="<?= __('Support', 'ploom-theme') ?>">
								<?= __('Support', 'ploom-theme') ?>
							</a>
						</li>
					</ul>
				</nav>
			<?php endif ?>
			<div class="gr-3 t-right">
				<ul class="nav nav--topbar-right">
					<li class="nav__item">
						<a href="/store-locator" title="<?= __('Store locator', 'ploom-theme') ?>">
							<i class="icon-pin-localisation"></i>
						</a>
					</li>
					<li class="nav__item">
						<form class="search-input" id="search" method="GET" action="#">
							<a href="#search" is="s-activate" history="false" toggle>
								<i class="icon-search"></i>
							</a><input type="text" name="search" placeholder="Search..." />
						</form>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
