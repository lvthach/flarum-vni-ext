var monthsShortDot = 'tháng giêng.tháng hai.tháng ba.tháng tư.tháng năm.tháng sáu.tháng bảy.tháng tám.tháng chín.tháng mười.tháng mười một.tháng mười hai'.split('_'),
  monthsShort = 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_');

moment.locale('vi', {
  months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
  monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
  weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
  weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
  weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM [năm] YYYY',
    LLL: 'D MMMM [năm] YYYY HH:mm',
    LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
    l: 'DD/M/YYYY',
    ll: 'D MMM YYYY',
    lll: 'D MMM YYYY HH:mm',
    llll: 'ddd, D MMM YYYY HH:mm'
  },
  calendar: {
    sameDay: '[Hôm nay lúc] LT',
    nextDay: '[Ngày mai lúc] LT',
    nextWeek: 'dddd [tuần tới lúc] LT',
    lastDay: '[Hôm qua lúc] LT',
    lastWeek: 'dddd [tuần rồi lúc] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: '%s tới',
    past: '%s trước',
    s: 'vài giây',
    m: 'một phút',
    mm: '%d phút',
    h: 'một giờ',
    hh: '%d giờ',
    d: 'một ngày',
    dd: '%d ngày',
    M: 'một tháng',
    MM: '%d tháng',
    y: 'một năm',
    yy: '%d năm'
  },
  ordinalParse: /\d{1,2}/,
  ordinal: function(number) {
    return number;
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  }
});
System.register('flarum/utils/string1', [], function(_export, _context) {
  return {
    setters: [],
    execute: function() {
      /**
       * Truncate a string to the given length, appending ellipses if necessary.
       *
       * @param {String} string
       * @param {Number} length
       * @param {Number} [start=0]
       * @return {String}
       */
      function truncate(string, length) {
        var start = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

        return (start > 0 ? '...' : '') + string.substring(start, start + length) + (string.length > start + length ? '...' : '');
      }

      /**
       * Create a slug out of the given string. Non-alphanumeric characters are
       * converted to hyphens.
       *
       * @param {String} string
       * @return {String}
       */

      _export('truncate', truncate);

      var defaultDiacriticsRemovalap = [{
        'base': 'A',
        'letters': 'AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ'
      }, {
        'base': 'AA',
        'letters': 'Ꜳ'
      }, {
        'base': 'AE',
        'letters': 'ÆǼǢ'
      }, {
        'base': 'AO',
        'letters': 'Ꜵ'
      }, {
        'base': 'AU',
        'letters': 'Ꜷ'
      }, {
        'base': 'AV',
        'letters': 'ꜸꜺ'
      }, {
        'base': 'AY',
        'letters': 'Ꜽ'
      }, {
        'base': 'B',
        'letters': 'BⒷＢḂḄḆɃƂƁ'
      }, {
        'base': 'C',
        'letters': 'CⒸＣĆĈĊČÇḈƇȻꜾ'
      }, {
        'base': 'D',
        'letters': 'DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ'
      }, {
        'base': 'DZ',
        'letters': 'ǱǄ'
      }, {
        'base': 'Dz',
        'letters': 'ǲǅ'
      }, {
        'base': 'E',
        'letters': 'EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ'
      }, {
        'base': 'F',
        'letters': 'FⒻＦḞƑꝻ'
      }, {
        'base': 'G',
        'letters': 'GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ'
      }, {
        'base': 'H',
        'letters': 'HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ'
      }, {
        'base': 'I',
        'letters': 'IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ'
      }, {
        'base': 'J',
        'letters': 'JⒿＪĴɈ'
      }, {
        'base': 'K',
        'letters': 'KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ'
      }, {
        'base': 'L',
        'letters': 'LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ'
      }, {
        'base': 'LJ',
        'letters': 'Ǉ'
      }, {
        'base': 'Lj',
        'letters': 'ǈ'
      }, {
        'base': 'M',
        'letters': 'MⓂＭḾṀṂⱮƜ'
      }, {
        'base': 'N',
        'letters': 'NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ'
      }, {
        'base': 'NJ',
        'letters': 'Ǌ'
      }, {
        'base': 'Nj',
        'letters': 'ǋ'
      }, {
        'base': 'O',
        'letters': 'OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ'
      }, {
        'base': 'OI',
        'letters': 'Ƣ'
      }, {
        'base': 'OO',
        'letters': 'Ꝏ'
      }, {
        'base': 'OU',
        'letters': 'Ȣ'
      }, {
        'base': 'OE',
        'letters': 'Œ'
      }, {
        'base': 'oe',
        'letters': 'œ'
      }, {
        'base': 'P',
        'letters': 'PⓅＰṔṖƤⱣꝐꝒꝔ'
      }, {
        'base': 'Q',
        'letters': 'QⓆＱꝖꝘɊ'
      }, {
        'base': 'R',
        'letters': 'RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ'
      }, {
        'base': 'S',
        'letters': 'SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ'
      }, {
        'base': 'T',
        'letters': 'TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ'
      }, {
        'base': 'TZ',
        'letters': 'Ꜩ'
      }, {
        'base': 'U',
        'letters': 'UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ'
      }, {
        'base': 'V',
        'letters': 'VⓋＶṼṾƲꝞɅ'
      }, {
        'base': 'VY',
        'letters': 'Ꝡ'
      }, {
        'base': 'W',
        'letters': 'WⓌＷẀẂŴẆẄẈⱲ'
      }, {
        'base': 'X',
        'letters': 'XⓍＸẊẌ'
      }, {
        'base': 'Y',
        'letters': 'YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ'
      }, {
        'base': 'Z',
        'letters': 'ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ'
      }, {
        'base': 'a',
        'letters': 'aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ'
      }, {
        'base': 'aa',
        'letters': 'ꜳ'
      }, {
        'base': 'ae',
        'letters': 'æǽǣ'
      }, {
        'base': 'ao',
        'letters': 'ꜵ'
      }, {
        'base': 'au',
        'letters': 'ꜷ'
      }, {
        'base': 'av',
        'letters': 'ꜹꜻ'
      }, {
        'base': 'ay',
        'letters': 'ꜽ'
      }, {
        'base': 'b',
        'letters': 'bⓑｂḃḅḇƀƃɓ'
      }, {
        'base': 'c',
        'letters': 'cⓒｃćĉċčçḉƈȼꜿↄ'
      }, {
        'base': 'd',
        'letters': 'dⓓｄḋďḍḑḓḏđƌɖɗꝺ'
      }, {
        'base': 'dz',
        'letters': 'ǳǆ'
      }, {
        'base': 'e',
        'letters': 'eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ'
      }, {
        'base': 'f',
        'letters': 'fⓕｆḟƒꝼ'
      }, {
        'base': 'g',
        'letters': 'gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ'
      }, {
        'base': 'h',
        'letters': 'hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ'
      }, {
        'base': 'hv',
        'letters': 'ƕ'
      }, {
        'base': 'i',
        'letters': 'iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı'
      }, {
        'base': 'j',
        'letters': 'jⓙｊĵǰɉ'
      }, {
        'base': 'k',
        'letters': 'kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ'
      }, {
        'base': 'l',
        'letters': 'lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ'
      }, {
        'base': 'lj',
        'letters': 'ǉ'
      }, {
        'base': 'm',
        'letters': 'mⓜｍḿṁṃɱɯ'
      }, {
        'base': 'n',
        'letters': 'nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ'
      }, {
        'base': 'nj',
        'letters': 'ǌ'
      }, {
        'base': 'o',
        'letters': 'oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ'
      }, {
        'base': 'oi',
        'letters': 'ƣ'
      }, {
        'base': 'ou',
        'letters': 'ȣ'
      }, {
        'base': 'oo',
        'letters': 'ꝏ'
      }, {
        'base': 'p',
        'letters': 'pⓟｐṕṗƥᵽꝑꝓꝕ'
      }, {
        'base': 'q',
        'letters': 'qⓠｑɋꝗꝙ'
      }, {
        'base': 'r',
        'letters': 'rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ'
      }, {
        'base': 's',
        'letters': 'sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ'
      }, {
        'base': 't',
        'letters': 'tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ'
      }, {
        'base': 'tz',
        'letters': 'ꜩ'
      }, {
        'base': 'u',
        'letters': 'uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ'
      }, {
        'base': 'v',
        'letters': 'vⓥｖṽṿʋꝟʌ'
      }, {
        'base': 'vy',
        'letters': 'ꝡ'
      }, {
        'base': 'w',
        'letters': 'wⓦｗẁẃŵẇẅẘẉⱳ'
      }, {
        'base': 'x',
        'letters': 'xⓧｘẋẍ'
      }, {
        'base': 'y',
        'letters': 'yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ'
      }, {
        'base': 'z',
        'letters': 'zⓩｚźẑżžẓẕƶȥɀⱬꝣ'
      }];

      var diacriticsMap = {};
      for (var i = 0; i < defaultDiacriticsRemovalap.length; i++) {
        var letters = defaultDiacriticsRemovalap[i].letters;
        for (var j = 0; j < letters.length; j++) {
          diacriticsMap[letters[j]] = defaultDiacriticsRemovalap[i].base;
        }
      }

      // "what?" version ... http://jsperf.com/diacritics/12
      function removeDiacritics(str) {
        return str.replace(/[^\u0000-\u007E]/g, function(a) {
          return diacriticsMap[a] || a;
        });
      }

      function slug(string) {
        string = removeDiacritics(string);
        return string.toLowerCase().replace(/[^a-z0-9]/gi, '-').replace(/-+/g, '-').replace(/-$|^-/g, '') || '-';
      }

      /**
       * Strip HTML tags and quotes out of the given string, replacing them with
       * meaningful punctuation.
       *
       * @param {String} string
       * @return {String}
       */

      _export('slug', slug);

      function getPlainContent(string) {
        var dom = $('<div/>').html(string.replace(/(<\/p>|<br>)/g, '$1 &nbsp;'));

        dom.find(getPlainContent.removeSelectors.join(',')).remove();

        return dom.text();
      }

      /**
       * An array of DOM selectors to remove when getting plain content.
       *
       * @type {Array}
       */

      _export('getPlainContent', getPlainContent);

      getPlainContent.removeSelectors = ['blockquote', 'script'];

      /**
       * Make a string's first character uppercase.
       *
       * @param {String} string
       * @return {String}
       */
      function ucfirst(string) {
        return string.substr(0, 1).toUpperCase() + string.substr(1);
      }

      _export('ucfirst', ucfirst);
    }
  };
});

System.set('flarum/utils/string', System.get('flarum/utils/string1'));