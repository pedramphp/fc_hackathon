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
		<div data-role="page" class="fc-add-trip">
			<?php
				require("header.php");
			?>
			<div data-role="content">
				<ul class="fc-at-from fc-at-flight-auto"
					data-role="listview" 
					data-inset="true" 
					data-split-icon="plus"
					data-filter="true" 
					data-filter-placeholder="From: search for airports" 
					data-filter-theme="d"
					data-mini="true"
					data-split-theme="c">
				</ul>

				<ul class="fc-at-to fc-at-flight-auto"
					data-role="listview" 
					data-inset="true" 
					data-split-icon="plus"
					data-filter="true" 
					data-filter-placeholder="To: search for airports" 
					data-filter-theme="d"
					data-mini="true"
					data-split-theme="c">
				</ul>


				<ul class="fc-at-airline"
					data-role="listview" 
					data-inset="true" 
					data-split-icon="plus"
					data-filter="true" 
					data-filter-placeholder="To: select airline" 
					data-filter-theme="d"
					data-mini="true"
					data-split-theme="c">
				</ul>

				<div data-role="fieldcontain">
					<input type="text" name="fc-at-travel-date" id="fc-at-travel-date" placeholder="Enter travel date" value="" data-mini="true" />
				</div>	
				<div data-role="fieldcontain">
					<textarea id="fc-at-short-msg" placeholder="Enter short message"></textarea>
				</div>	
				<a href="#" class="fc-add-trip-btn" data-role="button" >Add Travel Plan</a>

			</div><!-- /content -->
			<?php
				require("footer.php");
			?>
		</div><!-- /page -->
		<script src="js/default.js"></script>
		<script src="js/search-trip.js"></script>
		<script src="js/search-results.js"></script>
		<script src="js/add-trip.js"></script>

	</body>
</html>