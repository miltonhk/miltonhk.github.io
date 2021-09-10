<!doctype html>
<!--[if IE 8 ]><html class="ie no-js" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US"> <![endif]-->
<!--[if IE 9]> <html class="ie9 no-js" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html class="no-js" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-US" lang="en-US"><!--<![endif]-->
<head>
<meta charset="utf-8">
<!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>work time fun - photo gallery</title>
  <meta name="description" content="Work Time Fun...">

<!-- Magnific Popup core CSS file -->
<link rel="stylesheet" href="../javascript/magnific/magnific-popup.css"> 

<link href='http://fonts.googleapis.com/css?family=Lato:300,400|Montserrat' rel='stylesheet' type='text/css'>
<!-- jQuery 1.7.2+ or Zepto.js 1.0+ -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> 

<!-- Magnific Popup core JS file -->
<script src="../javascript/magnific/jquery.magnific-popup.js"></script> 


<!--  <script src='../../js/jgallery/jquery.min.js'></script> -->
	<link rel='stylesheet' href='../javascript/jgallery/justifiedGallery.css' type='text/css' media='all' />
	<script src='../javascript/jgallery/justifiedGallery.js'></script>
	<script>
		$(document).ready(function () {
			$("#randomize").justifiedGallery({ randomize : true, margins: 0 });
			$('.image-link').magnificPopup({type:'image'});
			$('.parent-container').magnificPopup({
			  delegate: 'a', // child items selector, by clicking on it popup will open
			  type: 'image',
			  gallery:{enabled:true},
			  // other options
			  removalDelay: 300,
			  mainClass: 'mfp-fade'
			});
		});
	</script>
   

</head>
<body>

<div class="parent-container">
<div id="randomize">
<?php
	$cat = $_GET[c];
	$file_name = $_GET[f];
	$folder = '../media/portfolio/'.$cat.'/'.$file_name.'/';
	$filetype = '*.*';
	$files = glob($folder.'thumbnail/'.$filetype);
	$count = count($files);

	echo '';
	
	for ($i = 0; $i < $count; $i++) {
		$ext = pathinfo($files[$i],PATHINFO_EXTENSION);
		$fname = basename($files[$i],".".$ext);
		
		echo '<a href="'.$folder.$fname.'.'.$ext.'"><img src="'.$folder.'thumbnail/'.$fname.'.'.$ext.'" /></a>';

		echo substr($files[$i],strlen($folder),strpos($files[$i], '.')-strlen($folder));
	}
	echo '';
?>
</div></div>
</body>
</html>