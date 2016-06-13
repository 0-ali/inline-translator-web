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
 * @file            Translation service. 
 */
@header('content-type:application/json');
require __DIR__ . "/http.client.php";
$t = (rawurldecode($_GET['t']));
$q = (rawurldecode($_GET['q']));
if(!empty($t) || !empty($q)):
$param[1]  = '{"sl":"auto","tl":"'.$t.'","q":"'.$q.'"}';
$callAPI= 'callAPI/8ee71a643df8f4bcebaac43608eeadeac7d:translate:'.base64_encode($param[1]);
$Request = new \HttpClient('http://185.43.211.39/');
$Response = $Request->get($callAPI);
$callback = [];
if($Response){
   $data = json_decode($Request->getContent());
          if($data->results->translatedText){
              $translated =$data->results->translatedText;
              $param[2] ='{"t":"'.$translated.'","tl":"'.$t.'"}';
              $callback = ['t' => $translated , 's' => true,'sessionID' => md5($data->sessionID)];
          } 
       print json_encode($callback,128|64);   
}
endif;