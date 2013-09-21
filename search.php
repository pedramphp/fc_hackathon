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
				<ul class="fc-from-auto"
					data-role="listview" 
					data-inset="true" 
					data-split-icon="plus"
					data-filter="true" 
					data-filter-placeholder="SFO" 
					data-filter-theme="d"
					data-mini="true"
					data-split-theme="c">
				</ul>
			</div><!-- /content -->
			<?php
				require("footer.php");
			?>
		</div><!-- /page -->
		<script src="js/default.js"></script>
		<script src="js/searchTrip.js"></script>

	</body>
</html>