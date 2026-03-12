/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'www': '&#xe957;',
            '-->': '&#xe958;',
            '––>': '&#xe958;',
            '->': '&#xe959;',
            '–>': '&#xe959;',
            '->>': '&#xe95a;',
            '–>>': '&#xe95a;',
            '[|': '&#xe95b;',
            '.-': '&#xe95c;',
            '.–': '&#xe95c;',
            '.=': '&#xe95d;',
            '::': '&#xe95e;',
            ':::': '&#xe95f;',
            ':=': '&#xe960;',
            ';;': '&#xe961;',
            '!=': '&#xe962;',
            '!==': '&#xe963;',
            '*/': '&#xe964;',
            '/*': '&#xe965;',
            '/>': '&#xe966;',
            '//': '&#xe967;',
            '__': '&#xe968;',
            '|]': '&#xe969;',
            '|||>': '&#xe96a;',
            '||>': '&#xe96b;',
            '|>': '&#xe96c;',
            '=:': '&#xe96d;',
            '==': '&#xe96e;',
            '===': '&#xe96f;',
            '==>': '&#xe970;',
            '=>': '&#xe971;',
            '=>>': '&#xe972;',
            '=/=': '&#xe973;',
            '>->': '&#xe974;',
            '>–>': '&#xe974;',
            '>=': '&#xe975;',
            '>=>': '&#xe976;',
            '>>=': '&#xe977;',
            '<-': '&#xe978;',
            '<–': '&#xe978;',
            '<--': '&#xe979;',
            '<––': '&#xe979;',
            '<->': '&#xe97a;',
            '<–>': '&#xe97a;',
            '<-<': '&#xe97b;',
            '<–<': '&#xe97b;',
            '<!--': '&#xe97c;',
            '<!––': '&#xe97c;',
            '<|': '&#xe97d;',
            '<||': '&#xe97e;',
            '<|||': '&#xe97f;',
            '<=': '&#xe980;',
            '<==': '&#xe981;',
            '<==>': '&#xe982;',
            '<=>': '&#xe983;',
            '<=<': '&#xe984;',
            '<<-': '&#xe985;',
            '<<–': '&#xe985;',
            '<<=': '&#xe986;',
            '</': '&#xe987;',
            '</>': '&#xe988;',
            '~-': '&#xe989;',
            '~~': '&#xe98a;',
            '%%': '&#xe98b;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
