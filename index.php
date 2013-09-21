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
		<div data-role="page">
			<?php
				require("header.php");
			?>
			<div data-role="content">
				<p>Page content goes here.</p>
				<a href="search.php" data-role="button"></a>
			</div><!-- /content -->
			<?php
				require("footer.php");
			?>
		</div><!-- /page -->

	</body>
</html>