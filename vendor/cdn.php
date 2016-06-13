<?php 
/**

 ▄█      ███           ▄████████ ▄██   ▄   ▀█████████▄     ▄████████    ▄████████ 
███  ▀█████████▄      ███    ███ ███   ██▄   ███    ███   ███    ███   ███    ███ 
███▌    ▀███▀▀██      ███    █▀  ███▄▄▄███   ███    ███   ███    █▀    ███    ███ 
███▌     ███   ▀      ███        ▀▀▀▀▀▀███  ▄███▄▄▄██▀   ▄███▄▄▄      ▄███▄▄▄▄██▀ 
███▌     ███          ███        ▄██   ███ ▀▀███▀▀▀██▄  ▀▀███▀▀▀     ▀▀███▀▀▀▀▀   
███      ███          ███    █▄  ███   ███   ███    ██▄   ███    █▄  ▀███████████ 
███      ███          ███    ███ ███   ███   ███    ███   ███    ███   ███    ███ 
█▀      ▄████▀        ████████▀   ▀█████▀  ▄█████████▀    ██████████   ███    ███ 
                                                                       ███    ███ 
**/

/**
 * @package         Inline Translator.
 * @author          xC0d3rZ <x.c0d3rz000@gmail.com>.
 * @copyright       ITCB/xC0d3rZ.
 * @file            it's just to get some style images ['mic-slash.gif','mic.gif','mic-animate.gif','mic-slash.gif'] from Google website. 
 */
require __DIR__ . "/http.client.php";
$files = ['mic-slash.gif','mic.gif','mic-animate.gif','mic-slash.gif'];
foreach ($files as $key => $value) {
          $get[md5($value)] = $value;
          $md5[] = md5($value);
}
if(in_array(rawurldecode($_GET['f']),$md5)){   
$cdn = parse_url("https://www.google.com/intl/en/chrome/assets/common/images/content/".$get[$_GET['f']]);
$Request = new \HttpClient($cdn['host']);
$Response = $Request->get($cdn['path']);
if($Request->getHeader('content-type') == 'image/gif'):
   @header('content-type:image/gif');
   print $Request->getContent();
endif;  
}else{
    die("cannot do this right now.");
}
