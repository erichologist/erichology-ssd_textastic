$(window).load(function(){

	/* For quick copy-paste */
    $('input').focus(function(){this.select();});

	/* Change color on every key input. */
	$('#hex').bind('blur keydown', function (event) {
		var el = this;
		setTimeout(function () {
			var rgb = [],
			    $input = $(el),
			    fail = false,
			    original = $input.val(),
			
			hex = (original+'').replace(/#/, '');
			
			if (original.length === 1 && original !== '#') { $input.val('#' + original); }
			if (hex.length == 3) hex = hex + hex;

			for (var i = 0; i < 6; i+=2) {
			   rgb.push(parseInt(hex.substr(i,2),16));
			   fail = fail || rgb[rgb.length - 1].toString() === 'NaN';
			}

			$('#rgb').val(fail ? '' : 'rgb(' + rgb.join(',') + ')');
			$('#hsl').val(fail ? '' : 'hsl(' + rgbToHsl.apply(null, rgb).join(',') + ')');
			   
			$('body').css('backgroundColor', $('#rgb').val());
	    }, 13);
	});

    /* Function to convert rgb-to-hsl. */
	
	function rgbToHsl(r, g, b){
		r /= 255, g /= 255, b /= 255;
		var max = Math.max(r, g, b), min = Math.min(r, g, b);
		var h, s, l = (max + min) / 2;

		if (max == min) { h = s = 0; } 
		else {
			var d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

			switch (max){
				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
				case g: h = (b - r) / d + 2; break;
				case b: h = (r - g) / d + 4; break;
			}
			
			h /= 6;
		}
		
		return [(h*100+0.5)|0, ((s*100+0.5)|0) + '%', ((l*100+0.5)|0) + '%'];
	}
});
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}


//hex to hsl
        var el = this;

        function hexToRgb(hex) {
        const r = parseInt(hex.substring(1, 3), 16) / 255;
        const g = parseInt(hex.substring(3, 5), 16) / 255;
        const b = parseInt(hex.substring(5, 7), 16) / 255;
        return { r, g, b };
    }

    function rgbToHsl(r, g, b) {
        const cmax = Math.max(r, g, b);
        const cmin = Math.min(r, g, b);
        const delta = cmax - cmin;

        let h = 0;
        let s = 0;
        let l = (cmax + cmin) / 2;

        if (delta === 0) {
            h = 0;
            s = 0;
        } else {
            s = l > 0.5 ? delta / (2 - cmax - cmin) : delta / (cmax + cmin);
            switch (cmax) {
                case r: h = ((g - b) / delta) + (g < b ? 6 : 0); break;
                case g: h = (b - r) / delta + 2; break;
                case b: h = (r - g) / delta + 4; break;
            }
            h /= 6;
        }

        h = Math.round(h * 360);
        s = Math.round(s * 100);
        l = Math.round(l * 100);

        return { h, s, l };
    }

    function hexToHsl(hex) {
        const { r, g, b } = hexToRgb(hex);
        return rgbToHsl(r, g, b);
    }


    
$(document).ready(function() {
 
    if ( !("placeholder" in document.createElement("input")) ) {
        $("input[placeholder], textarea[placeholder]").each(function() {
            var val = $(this).attr("placeholder");
            if ( this.value == "" ) {
                this.value = val;
            }
            $(this).focus(function() {
                if ( this.value == val ) {
                    this.value = "";
                }
            }).blur(function() {
                if ( $.trim(this.value) == "" ) {
                    this.value = val;
                }
            })
        });
 
        // Clear default placeholder values on form submit
        $('form').submit(function() {
            $(this).find("input[placeholder], textarea[placeholder]").each(function() {
                if ( this.value == $(this).attr("placeholder") ) {
                    this.value = "";
                }
            });
        });
    }
});

if (style.styleSheet) {  style.styleSheet.cssText = css;} else {  style.appendChild(document.createTextNode(css));}head.appendChild(style);
    /* Change color on every key input. */
/**    $('#hsl').bind('blur keydown', function (event) {
        var el = this;
        setTimeout(function () {
            var rgb = [],
            $input = $(el),
            fail = false,
            original = $input.val(),

            hsl = (original+'').replace(/hsl\(|\)/, '');

            if (original.length === 1 && original !== '#') {
                $input.val('' + original);
            }
            if (hsl.length == 3) hsl = hsl + hsl;

            for (var i = 0; i < 6; i += 2) {
                rgb.push(parseInt(hsl.substr(i, 2), 16));
                fail = fail || rgb[rgb.length - 1].toString() === 'NaN';
            }

            $('#rgb').val(fail ? '': 'rgb(' + rgb.join(',') + ')');
            $('#hex').val(fail ? '': 'hex(' + rgbTohex.apply(null, rgb).join(',') + ')');

            $('body').css('backgroundColor', $('#rgb').val());
        },
            13);
    });**/
    /* Change color on every key input. */
/*    $('#hsl').bind('blur keydown', function (event) {
        var el = this;
        setTimeout(function () {
            var rgb = [],
            $input = $(el),
            fail = false,
            original = $input.val(),

            hsl = (original+'').replace(/#/, '');

            if (original.length === 1 && original !== '#') {
                $input.val('#' + original);
            }
            if (hsl.length == 3) hsl = hsl + hsl;

            for (var i = 0; i < 6; i += 2) {
                rgb.push(parseInt(hsl.substr(i, 2), 16));
                fail = fail || rgb[rgb.length - 1].toString() === 'NaN';
            }

            $('#rgb').val(fail ? '': 'rgb(' + rgb.join(',') + ')');
            $('#hex').val(fail ? '': 'hex(' + rgbTohex.apply(null, rgb).join(',') + ')');

            $('body').css('backgroundColor', $('#rgb').val());
        },
            13);
    });

//hex to hsl
        var el = this;

        function hexToRgb(hex) {
        const r = parseInt(hex.substring(1, 3), 16) / 255;
        const g = parseInt(hex.substring(3, 5), 16) / 255;
        const b = parseInt(hex.substring(5, 7), 16) / 255;
        return { r, g, b };
    }

    function rgbToHsl(r, g, b) {
        const cmax = Math.max(r, g, b);
        const cmin = Math.min(r, g, b);
        const delta = cmax - cmin;

        let h = 0;
        let s = 0;
        let l = (cmax + cmin) / 2;

        if (delta === 0) {
            h = 0;
            s = 0;
        } else {
            s = l > 0.5 ? delta / (2 - cmax - cmin) : delta / (cmax + cmin);
            switch (cmax) {
                case r: h = ((g - b) / delta) + (g < b ? 6 : 0); break;
                case g: h = (b - r) / delta + 2; break;
                case b: h = (r - g) / delta + 4; break;
            }
            h /= 6;
        }

        h = Math.round(h * 360);
        s = Math.round(s * 100);
        l = Math.round(l * 100);

        return { h, s, l };
    }

    function hexToHsl(hex) {
        const { r, g, b } = hexToRgb(hex);
        return rgbToHsl(r, g, b);
    }

    /* Change color on every key input. */
/*    $('#hex').bind('blur keydown', function (event) {
        var el = this;
        setTimeout(function () {
            var rgb = [],
            $input = $(el),
            fail = false,
            original = $input.val(),

            hex = (original+'').replace(/#/, '');

            if (original.length === 1 && original !== '#') {
                $input.val('#' + original);
            }
            if (hex.length == 3) hex = hex + hex;

            for (var i = 0; i < 6; i += 2) {
                rgb.push(parseInt(hex.substr(i, 2), 16));
                fail = fail || rgb[rgb.length - 1].toString() === 'NaN';
            }

            $('#rgb').val(fail ? '': 'rgb(' + rgb.join(',') + ')');
            $('#hsl').val(fail ? '': 'hsl(' + rgbToHsl.apply(null, rgb).join(',') + ')');

            $('body').css('backgroundColor', $('#rgb').val());
        },
            13);
    });

    /* Function to convert rgb-to-hex. */
/*    function rgbTohex(r, g, b) {
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0;
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min): d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6: 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return [(h*100+0.5)|0,
            ((s*100+0.5)|0) + '%',
            ((l*100+0.5)|0) + '%'];
    }
});
/**
 function canFormat(clipping) {
   if (this != null) {
     // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
		var el = this
		var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b
        })
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(el)
        return result
    }
}
function format(clipping) {
    var rgb = hexToRgb(this)
    return "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")"
}
   // http://stackoverflow.com/a/5624139
function hexToRgb(hex) {
   // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
    } : null;
}

 function hexToRgb(hex) {
  // Remove '#' if present
  const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;

  // Validate hex length (3 or 6 characters)
  if (!/^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(cleanHex)) {
    throw new Error('Invalid hexadecimal color code.');
  }

  let r, g, b;

  if (cleanHex.length === 3) {
    // Handle 3-character shorthand hex (e.g., "F00" becomes "FF0000")
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
  } else {
    // Handle 6-character hex
    r = parseInt(cleanHex.substring(0, 2), 16);
    g = parseInt(cleanHex.substring(2, 4), 16);
    b = parseInt(cleanHex.substring(4, 6), 16);
  }

  return { r, g, b };
}

function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}


$(document).ready(function() {
    if (!("placeholder" in document.createElement("input"))) {
        $("input[placeholder], textarea[placeholder]").each(function() {
            var val = $(this).attr("placeholder");
            if (this.value == "") {
                this.value = val;
            }
            $(this).focus(function() {
                if (this.value == val) {
                    this.value = "";
                }
            }).blur(function() {
                if ($.trim(this.value) == "") {
                    this.value = val;
                }
            })
        });
        // Clear default placeholder values on form submit
        $('form').submit(function() {
            $(this).find("input[placeholder], textarea[placeholder]").each(function() {
                if (this.value == $(this).attr("placeholder")) {
                    this.value = "";
                }
            });
        });
    }
});*/