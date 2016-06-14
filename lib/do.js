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
 */

var bfinal = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
if (!('webkitSpeechRecognition' in window)) {
    gooogle.upgrade();
} else {
    start_button.style.display = 'inline-block';
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onstart = function () {
        recognizing = true;
        google.showInfo('info_speak_now');
        start_img.src = 'CDN/675c436ab766011d0c8a5a6f856410ed:8ed838c0c87f205ac104e7a474901242';
    };
    recognition.onerror = function (event) {
        if (event.error == 'no-speech') {
            start_img.src = 'CDN/a94d6fec63bff49b1be1c853d9b13feb:e588f53d8f9dc89d2f81c8c56486f0e9';
            google.showInfo('info_no_speech');
            ignore_onend = true;
        }
        if (event.error == 'audio-capture') {
            start_img.src = 'CDN/288ff99f6721280def707ce9d0718156:e588f53d8f9dc89d2f81c8c56486f0e9';
            google.showInfo('info_no_microphone');
            ignore_onend = true;
        }
        if (event.error == 'not-allowed') {
            if (event.timeStamp - start_timestamp < 100) {
                google.showInfo('info_blocked');
            } else {
                google.showInfo('info_denied');
            }
            ignore_onend = true;
        }
    };
    recognition.onend = function () {
        recognizing = false;
        if (ignore_onend) {
            return;
        }
        start_img.src = 'CDN/ebba775d52e3098ec651a5113ffffb63:e588f53d8f9dc89d2f81c8c56486f0e9';
        if (!bfinal) {
            google.showInfo('info_start');
            return;
        }
        google.showInfo('');
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
            var range = document.createRange();
            range.selectNode(document.getElementById('final_span'));
            window.getSelection().addRange(range);
        }
    };
    recognition.onresult = function (event) {
        if (typeof (event.results) == 'undefined') {
            recognition.onend = null;
            recognition.stop();
            google.upgrade();
            return;
        }
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                getTranslation = inline.getTranslation(event.results[i][0].transcript);
                $.when(getTranslation).done(function () {
                    if (typeof getTranslation === "object") {
                        inline.append(inline.results.transaltion.t, 'bfinal');
                    } else {
                        inline.debug('Unknown error in Transaltion Service.');
                    }
                });
            } else {
                getTranslation = inline.getTranslation(event.results[i][0].transcript);
                $.when(getTranslation).done(function () {
                    if (typeof getTranslation === "object") {
                        inline.append(inline.results.transaltion.t, 'binterim');
                    } else {
                        inline.debug('Unknown error in Transaltion Service.');
                    }
                });

            }
        }
    };
}
