<!DOCTYPE html> 
<html>
	<head>
		<title>Flight Companions</title> 
		<meta name="viewport" content="width=device-width, initial-scale=1"> 
		<link rel="stylesheet" href="css/jquery.mobile-1.3.2.min.css" />
		<script src="js/jquery-1.9.1.min.js"></script>
		<script src="js/jquery.mobile-1.3.2.min.js"></script>
	</head>
	<body>
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
		<script src="js/default.js"></script>
		<script src="js/search-trip.js"></script>
		<script src="js/search-results.js"></script>
	</body>
</html>