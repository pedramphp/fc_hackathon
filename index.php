<!DOCTYPE html> 
<html>
	<head>
		<title>Flight Companion</title> 
		<meta name="viewport" content="width=device-width, initial-scale=1"> 
		<link rel="stylesheet" href="css/jquery.mobile-1.3.2.min.css" />
		<script src="js/jquery-1.9.1.min.js"></script>
		<script src="js/jquery.mobile-1.3.2.min.js"></script>
		<link href="css/default.css" rel="stylesheet" />
	</head>
	<body>
		<div data-role="page" class="fc-recent-trips">
			<?php
				$headerTitle = "Flight Companion";
				require("header.php");
			?>
			<div data-role="content" class="fc-rt-content">
			</div><!-- /content -->
			<?php
				require("footer.php");
			?>
		</div><!-- /page -->

		<div data-role="dialog" id="fc-rt-contact" data-theme="b" data-overlay-theme="b"  >
			<div data-role="header">
				<h2>Send request</h2>
			</div>
			<div data-role="content" data-theme="b">
				<textarea placeholder="Please enter your message" class='fc-rt-contact-msg' style='height:111px'></textarea>
				<a href="#" data-role="button" data-rel="back" data-theme="a" class='fc-rt-contact-cancel' data-inline="true">Cancel</a>	
				<a href="#" data-role="button" data-rel="back" data-theme="b" class='fc-rt-contact-send' data-inline="true">Send</a>	
			</div>
		</div>




		<script src="js/default.js"></script>
		<script src="js/search-trip.js"></script>
		<script src="js/search-results.js"></script>
		<script src="js/recent-trips.js"></script>
		<script src="js/profile.js"></script>
		<script src="js/add-trip.js"></script>


	</body>
</html>