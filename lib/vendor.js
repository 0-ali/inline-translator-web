var inline = {};
inline.results = {};
inline.from = [
    ['Afrikaans', ['af-ZA']],
    ['العربية', ['ar-SA']],
    ['Bahasa Indonesia', ['id-ID']],
    ['Bahasa Melayu', ['ms-MY']],
    ['Català', ['ca-ES']],
    ['Čeština', ['cs-CZ']],
    ['Dansk', ['da-DK']],
    ['Deutsch', ['de-DE']],
    ['English', ['en-AU', 'Australia'],
        ['en-CA', 'Canada'],
        ['en-IN', 'India'],
        ['en-NZ', 'New Zealand'],
        ['en-ZA', 'South Africa'],
        ['en-GB', 'United Kingdom'],
        ['en-US', 'United States']],
    ['Español', ['es-AR', 'Argentina'],
        ['es-BO', 'Bolivia'],
        ['es-CL', 'Chile'],
        ['es-CO', 'Colombia'],
        ['es-CR', 'Costa Rica'],
        ['es-EC', 'Ecuador'],
        ['es-SV', 'El Salvador'],
        ['es-ES', 'España'],
        ['es-US', 'Estados Unidos'],
        ['es-GT', 'Guatemala'],
        ['es-HN', 'Honduras'],
        ['es-MX', 'México'],
        ['es-NI', 'Nicaragua'],
        ['es-PA', 'Panamá'],
        ['es-PY', 'Paraguay'],
        ['es-PE', 'Perú'],
        ['es-PR', 'Puerto Rico'],
        ['es-DO', 'República Dominicana'],
        ['es-UY', 'Uruguay'],
        ['es-VE', 'Venezuela']],
    ['Euskara', ['eu-ES']],
    ['Filipino', ['fil-PH']],
    ['Français', ['fr-FR']],
    ['Galego', ['gl-ES']],
    ['Hrvatski', ['hr_HR']],
    ['IsiZulu', ['zu-ZA']],
    ['Íslenska', ['is-IS']],
    ['Italiano', ['it-IT', 'Italia'],
        ['it-CH', 'Svizzera']],
    ['Lietuvių', ['lt-LT']],
    ['Magyar', ['hu-HU']],
    ['Nederlands', ['nl-NL']],
    ['Norsk bokmål', ['nb-NO']],
    ['Polski', ['pl-PL']],
    ['Português', ['pt-BR', 'Brasil'],
        ['pt-PT', 'Portugal']],
    ['Română', ['ro-RO']],
    ['Slovenščina', ['sl-SI']],
    ['Slovenčina', ['sk-SK']],
    ['Suomi', ['fi-FI']],
    ['Svenska', ['sv-SE']],
    ['Tiếng Việt', ['vi-VN']],
    ['Türkçe', ['tr-TR']],
    ['Ελληνικά', ['el-GR']],
    ['български', ['bg-BG']],
    ['Pусский', ['ru-RU']],
    ['Српски', ['sr-RS']],
    ['Українська', ['uk-UA']],
    ['한국어', ['ko-KR']],
    ['中文', ['cmn-Hans-CN', '普通话 (中国大陆)'],
        ['cmn-Hans-HK', '普通话 (香港)'],
        ['cmn-Hant-TW', '中文 (台灣)'],
        ['yue-Hant-HK', '粵語 (香港)']],
    ['日本語', ['ja-JP']],
    ['हिन्दी', ['hi-IN']],
    ['ภาษาไทย', ['th-TH']]];
inline.to = new Array();
inline.to["0"] = { f: 'en', v: 'UK English Female', n: 'UK', l: 'en-uk' };
inline.to["1"] = { f: 'en', v: 'US English Female', n: 'US', l: 'en-us' };
inline.to["2"] = { f: 'ar', v: 'Arabic Female', n: 'Arabic', l: 'ar' };
inline.to["3"] = { f: 'hy', v: 'Armenian Male', n: 'Armenian', l: 'hy-AM' };
inline.to["4"] = { f: 'br', v: 'Brazilian Portuguese Female', n: 'Brazilian', l: 'br-FR' };
inline.to["5"] = { f: 'de', v: 'Deutsch Female', n: 'Deutsch', l: 'de-AT' };
inline.to["6"] = { f: 'nl', v: 'Dutch Female', n: 'Dutch', l: 'nl-BE' };
inline.to["7"] = { f: 'fi', v: 'Finnish Female', n: 'Finnish', l: 'fi-FI' };
inline.to["8"] = { f: 'fr', v: 'French Female', n: 'French', l: 'fr-BE' };
inline.to["9"] = { f: 'hi', v: 'Hindi Female', n: 'Hindi', l: 'hi-IN' };
inline.to["10"] = { f: 'hu', v: 'Hungarian Female', n: 'Hungarian', l: 'hu-HU' };
inline.to["11"] = { f: 'id', v: 'Indonesian Female', n: 'Indonesian', l: 'id-ID' };
inline.to["12"] = { f: 'it', v: 'Italian Female', n: 'Italian', l: 'it-CH' };
inline.to["13"] = { f: 'pl', v: 'Polish Female', n: 'Polish', l: 'pl-PL' };
inline.to["14"] = { f: 'br', v: 'Portuguese Female', n: 'Portuguese', l: 'br-FR' };
inline.to["15"] = { f: 'ro', v: 'Romanian Male', n: 'Romanian', l: 'ro-RO' };
inline.to["16"] = { f: 'ru', v: 'Russian Female', n: 'Russian', l: 'ru-RU' };
inline.to["17"] = { f: 'sk', v: 'Slovak Female', n: 'Slovak', l: 'sk-SK' };
inline.to["18"] = { f: 'es', v: 'Spanish Female', n: 'Spanish', l: 'es-AR' };
inline.to["19"] = { f: 'es', v: 'Spanish Latin American Female', n: 'Spanish', l: 'es-AR' };
inline.to["20"] = { f: 'sv', v: 'Swedish Female', n: 'Swedish', l: 'sv-FI' };
inline.to["21"] = { f: 'hi', v: 'Tamil Male', n: 'Tamil', l: 'hi-IN' };
inline.to["22"] = { f: 'th', v: 'Thai Female', n: 'Thai', l: 'th-TH' };
inline.to["23"] = { f: 'tr', v: 'Turkish Female', n: 'Turkish', l: 'tr-TR' };
inline.to["24"] = { f: 'af', v: 'Afrikaans Male', n: 'Afrikaans', l: 'af-ZA' };
inline.to["25"] = { f: 'sq', v: 'Albanian Male', n: 'Albanian', l: 'sq-AL' };
inline.to["26"] = { f: 'bs', v: 'Bosnian Male', n: 'Bosnian', l: 'bs-Cyrl-BA' };
inline.to["27"] = { f: 'hr', v: 'Croatian Male', n: 'Croatian', l: 'hr-BA' };
inline.to["28"] = { f: 'da', v: 'Danish Male', n: 'Danish', l: 'da-DK' };
inline.to["29"] = { f: 'fi', v: 'Finnish Male', n: 'Finnish', l: 'fi-FI' };
inline.to["30"] = { f: 'hu', v: 'Hungarian Male', n: 'Hungarian', l: 'hu-HU' };
inline.to["31"] = { f: 'is', v: 'Icelandic Male', n: 'Icelandic', l: 'is-IS' };
inline.to["32"] = { f: 'lv', v: 'Latvian Male', n: 'Latvian', l: 'lv-LV' };
inline.to["33"] = { f: 'mk', v: 'Macedonian Male', n: 'Macedonian', l: 'mk-MK' };
inline.to["34"] = { f: 'sr', v: 'Serbian Male', n: 'Serbian', l: 'sr-Cyrl-BA' };
inline.to["35"] = { f: 'hr', v: 'Serbo-Croatian Male', n: 'Serbo-Croatian', l: 'hr-BA' };
inline.to["36"] = { f: 'sk', v: 'Slovak Male', n: 'Slovak', l: 'sk-SK' };
inline.to["37"] = { f: 'sw', v: 'Swahili Male', n: 'Swahili', l: 'sw-KE' };
inline.to["38"] = { f: 'sv', v: 'Swedish Male', n: 'Swedish', l: 'sv-FI' };
inline.to["39"] = { f: 'vi', v: 'Vietnamese Male', n: 'Vietnamese', l: 'vi-VN' };
inline.to["40"] = { f: 'cy', v: 'Welsh Male', n: 'Welsh', l: 'cy-GB' };
for (var index = 0; index < inline.to.length; index++) {
    if (inline.to.hasOwnProperty(index)) {
        if (typeof inline.to[index] == 'object') {
            optoname = inline.to[index].v;
            opto.options[index] = new Option(optoname, index);
        }
    }
}
for (var i = 0; i < inline.from.length; i++) {
    opfrom.options[i] = new Option(inline.from[i][0], i);
}
inline.updateList = function () {
    for (var i = opdialect.options.length - 1; i >= 0; i--) {
        opdialect.remove(i);
    }
    var list = inline.from[opfrom.selectedIndex];
    for (var i = 1; i < list.length; i++) {
        opdialect.options.add(new Option(list[i][1],list[i][0]));
    }
    opdialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
}
opto.selectedIndex = 1;
opfrom.selectedIndex =8;
inline.updateList();
opdialect.selectedIndex = 6;
inline.getTLang = function () {
    id = opto.value;
    if (typeof inline.to[id] == "object") {
        if (inline.to[id].l) {
            return inline.to[id].l;
        } else {
            return false;
        }
    }
}
inline.random = function () { var dates = new Date(); var random = btoa(Math.random() * (dates.getSeconds()) + (dates.getMinutes())); return random.substr(0, 11); }
inline.setSpeech = function () {
    id = opto.value;
    if (typeof inline.to[id] == "object") {
        if (inline.to[id].v) {
            responsiveVoice.setDefaultVoice(inline.to[id].v);
            console.log("set " + inline.to[id].v + " as default voice done");
        } else {
            return false;
        }
    }
}
inline.debug = function (text) {
    element = $("#info");
    msg = "<p style='color:red;'>" + text + "</p>";
    element.html(msg);
}
inline.getTranslation = function (t) {
    var
        lang = inline.getTLang(opto.value),
        api = 'do/' + inline.random() + "/" + encodeURIComponent(lang) + ":" + encodeURIComponent(t);
    return $.ajax({
        type: 'GET',
        url: api,
        dataType: 'json',
        success: function (result) {
            inline.results.translation = result;
        },
        error: function () {
            inline.debug('please check your internet connection then reload the page.');
        }
    });
}
inline.append = function (t, d) {
    var
        text = t,
        element = $("#" + d);
    if (text.length > 0) {
        element.append(" " + google.capitalize(text));
        console.log("Inline translation: " + t);
        responsiveVoice.speak(t);
    }
}
var google = {};
google.upgrade = function () {
    start_button.style.visibility = 'hidden';
    google.showInfo('info_upgrade');
}
google.linebreak = function (s) {
    var
        two_line = /\n\n/g,
        one_line = /\n/g;
    return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}
google.capitalize = function (s) {
    var first_char = /\S/;
    return s.replace(first_char, function (m) { return m.toUpperCase(); });
}
google.showInfo = function (s) {
    if (s) {
        for (var child = info.firstChild; child; child = child.nextSibling) {
            if (child.style) {
                child.style.display = child.id == s ? 'inline' : 'none';
            }
        }
        info.style.visibility = 'visible';
    } else {
        info.style.visibility = 'hidden';
    }
}
google.startButton = function (event) {
    if (recognizing) {
        recognition.stop();
        return;
    }
    recognition.lang = opdialect.value;
    recognition.start();
    ignore_onend = false;
    start_img.src = 'CDN/c6146057a8bbe8e5a2138adb3ca20809:4ee62e248df02bd683a4834c85febefa';
    google.showInfo('info_allow');
    start_timestamp = event.timeStamp;
}

