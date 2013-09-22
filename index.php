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
		<div data-role="page" class="fc-login">
			<?php
				$headerTitle = "Login";
				require("header.php");
			?>
			<div data-role="content" class="fc-login-content">
				<div style='text-align: center; margin-bottom: 30px'>
					<img style="display: inline-block; width: 60px;" src='css/images/utravel.jpeg' />
				</div>
				<div class="fc-login-images"> 
						<img src="css/images/CMU.png" width="150" />
						<img src="css/images/MIR.png" width="150" class="float-right" />
						<img src="css/images/YALE.jpg" width="150" />
						<img src="css/images/STANFORD.jpg" width="150" class="float-right"/>
				</div>
				<div style="clear: both"></div>
				<div>
					<input type="text" name="text-basic" id="text-basic" placeholder="john@cmu.edu">	
					<input type="password" name="text-basic" id="text-basic" value="" placeholder="Enter your password">
					<input type="button" value="Secure Login"  data-theme="c" class="fc-login-btn">
				</div>
				
			</div><!-- /content -->
			<?php
				require("footer.php");
			?>
		</div><!-- /page -->

		<script src="js/default.js"></script>
		<script src="js/search-trip.js"></script>
		<script src="js/search-results.js"></script>
		<script src="js/recent-trips.js"></script>
		<script src="js/profile.js"></script>
		<script src="js/add-trip.js"></script>
	</body>
</html>