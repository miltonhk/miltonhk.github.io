<!DOCTYPE html>
<html>
<head>
  <title>work time fun - video</title>

  <!-- Chang URLs to wherever Video.js files will be hosted -->
  <link href="video-js/video-js.css" rel="stylesheet" type="text/css">
  <!-- video.js must be in the <head> for older IEs to work. -->
  <script src="video-js/video.js"></script>

  <!-- Unless using the CDN hosted version, update the URL to the Flash SWF -->
  <script>
    videojs.options.flash.swf = "video-js/video-js.swf";
  </script>
  <style>
body,html,iframe,#player,.fallback{width:100%;height:100%;margin:0;padding:0;background-color:#000;overflow:hidden}.player.loading{opacity:0}

</style>
</head>
<body>

<?
$cat_name = $_GET["c"];
$file_name = $_GET["f"];
echo '<video id="worktimefun" class="video-js vjs-default-skin" controls preload="none" width="100%" height="100%"
              poster="../media/portfolio/'. $cat_name .'/'. $file_name .'/cover.jpg"
              data-setup="{}">';
    echo '<source src="../media/portfolio/'. $cat_name .'/'. $file_name .'/video.mp4" type="video/mp4" />';
    echo '<source src="../media/portfolio/'. $cat_name .'/'. $file_name .'/video.webm" type="video/webm" />';
    echo '<source src="../media/portfolio/'. $cat_name .'/'. $file_name .'/video.ogg" type="video/ogg" />';
echo '</video>';

?>

</body>
</html>
