<?php 
function CDN($n){
  print 'CDN/'. md5(rand(0,time()).time()) . ':' . md5($n);
}
?>
<!DOCTYPE html>
<html class="no-js consumer" lang="en">

<head>
  <script src='lib/responsivevoice.js'>

  </script>
  <script src='lib/jq.mini.js' />
  <script>
    (function(e, p){
    var m = location.href.match(/platform=(win8|win|mac|linux|cros)/);
    e.id = (m && m[1]) ||
           (p.indexOf('Windows NT 6.2') > -1 ? 'win8' : p.indexOf('Windows') > -1 ? 'win' : p.indexOf('Mac') > -1 ? 'mac' : p.indexOf('CrOS') > -1 ? 'cros' : 'linux');
    e.className = e.className.replace(/\bno-js\b/,'js');
  })(document.documentElement, window.navigator.userAgent)
  </script>
  <meta charset="utf-8">
  <meta content="initial-scale=1, minimum-scale=1, width=device-width" name="viewport">
  <meta content="Inline translator like #Skype for website" name="description">
  <title>
    Inline translator - ITCB™
  </title>
  <link href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;subset=latin" rel="stylesheet">
  <link href="lib/inline.css" rel="stylesheet">
  <style>
    #info {
      font-size: 20px;
    }
    
    #div_start {
      float: right;
    }
    
    #headline {
      text-decoration: none
    }
    
    #results {
      font-size: 14px;
      font-weight: bold;
      border: 1px solid #ddd;
      padding: 15px;
      text-align: left;
      min-height: 150px;
    }
    
    #start_button {
      border: 0;
      background-color: transparent;
      padding: 0;
    }
    
    .interim {
      color: gray;
    }
    
    .final {
      color: black;
      padding-right: 3px;
    }
    
    .button {
      display: none;
    }
    
    .marquee {
      margin: 20px auto;
    }
    
    #buttons {
      margin: 10px 0;
      position: relative;
      top: -50px;
    }
    
    #copy {
      margin-top: 20px;
    }
    
    #copy > div {
      display: none;
      margin: 0 70px;
    }
    
    a.c1 {
      font-weight: normal;
    }
  </style>
</head>

<body class="" id="grid">
  <div class="browser-landing" id="main">
    <div class="compact marquee-stacked" id="marquee">
      <div class="marquee-copy">
        <h1>
            <a class="c1" href="https://1tcb.org/Inline-translator/">Inline translator </a> Demonstration
          </h1>
      </div>
    </div>
    <div class="compact marquee">
      <div id="info">
        <p id="info_start">
          Click on the microphone icon and begin speaking for as long as you like.
        </p>
        <p id="info_speak_now" style="display:none">
          Speak now.
        </p>
        <p id="info_no_speech" style="display:none">
          No speech was detected. You may need to adjust your <a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">microphone
            settings</a>.
        </p>
        <p id="info_no_microphone" style="display:none">
          No microphone was found. Ensure that a microphone is installed and that
          <a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">
            microphone settings</a> are configured correctly.
        </p>
        <p id="info_allow" style="display:none">
          Click the "Allow" button above to enable your microphone.
        </p>
        <p id="info_denied" style="display:none">
          Permission to use microphone was denied.
        </p>
        <p id="info_blocked" style="display:none">
          Permission to use microphone is blocked. To change, go to chrome://settings/contentExceptions#media-stream
        </p>
        <p id="info_upgrade" style="display:none">
          Inline translator is not supported by this browser. Upgrade to <a href="//www.google.com/chrome">Chrome</a> version
          25 or later.
        </p>
      </div>
      <div id="div_start">
        <button id="start_button" onclick="google.startButton(event)"><img alt="Start" id="start_img"
          src="<?php CDN('mic.gif'); ?>"></button>
      </div>
      <div id="results">
        <span class="final" id="bfinal"></span> <span class="interim" id="binterim"></span>
      </div>
      <div class="compact marquee" id="div_language">
        <select id="opfrom" onchange="inline.updateList()">
            </select>&nbsp;&nbsp; <select id="opdialect">
            </select> To
        <select id="opto" onchange="inline.setSpeech()">
        </select>
      </div>
    </div>
  </div>
  <script src="lib/vendor.js"></script>
  <script src="lib/do.js"></script>
  <br />
  <br />
  <br />
  <center>
    <h3 class="c1"><a href="https://1tcb.org">Made by xC0d3rz with <span style="color:red; text-align: center;">♥</span> </a></h3>
  </center>
</body>
</html>