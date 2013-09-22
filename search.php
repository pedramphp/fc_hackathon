
<div data-role="page" class="fc-search">
	<?php
		require("header.php");
	?>
	<div data-role="content">
		<ul class="fc-from fc-flight-auto"
			data-role="listview" 
			data-inset="true" 
			data-split-icon="plus"
			data-filter="true" 
			data-filter-placeholder="From: search for airports" 
			data-filter-theme="d"
			data-mini="true"
			data-split-theme="c">
		</ul>

		<ul class="fc-to fc-flight-auto"
			data-role="listview" 
			data-inset="true" 
			data-split-icon="plus"
			data-filter="true" 
			data-filter-placeholder="To: search for airports" 
			data-filter-theme="d"
			data-mini="true"
			data-split-theme="c">
		</ul>

		<a data-role="button" class="fc-search-companions">Search companions</a>

	</div><!-- /content -->
	<?php
		require("footer.php");
	?>
</div><!-- /page -->