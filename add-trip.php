
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
					<input type="date" name="fc-at-travel-date" id="fc-at-travel-date" placeholder="Enter travel date" value="" data-mini="true" />
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