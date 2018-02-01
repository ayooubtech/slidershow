imgr = new Array();
imgr[0] = 'http://sites.google.com/site/fdblogsite/Home/nothumbnail.gif';
showRandomImg = true;
aBold = true;
summaryPost = 150;
summaryTitle = 50;
numposts1 = 10;
featured_numposts = '5';

function removeHtmlTag(_0x3737x2, _0x3737x3) {
    var _0x3737x4 = _0x3737x2['split']('<');
    for (var _0x3737x5 = 0; _0x3737x5 < _0x3737x4['length']; _0x3737x5++) {
        if (_0x3737x4[_0x3737x5]['indexOf']('>') != -1) {
            _0x3737x4[_0x3737x5] = _0x3737x4[_0x3737x5]['substring'](_0x3737x4[_0x3737x5]['indexOf']('>') + 1, _0x3737x4[_0x3737x5]['length'])
        }
    };
    _0x3737x4 = _0x3737x4['join']('');
    _0x3737x4 = _0x3737x4['substring'](0, _0x3737x3 - 1);
    return _0x3737x4;
}

function sliderposts(_0x3737x7) {
    j = showRandomImg ? Math['floor']((imgr['length'] + 1) * Math['random']()) : 0;
    img = new Array;
    if (numposts1 <= _0x3737x7['feed']['entry']['length']) {
        maxpost = numposts1
    } else {
        maxpost = _0x3737x7['feed']['entry']['length']
    };
    for (var _0x3737x5 = 0; _0x3737x5 < maxpost; _0x3737x5++) {
        var _0x3737x8 = _0x3737x7['feed']['entry'][_0x3737x5];
        var _0x3737x9 = _0x3737x8['category'][0]['term'];
        var _0x3737xa = _0x3737x8['title']['$t'];
        var _0x3737xb;
        var _0x3737xc;
        if (_0x3737x5 == _0x3737x7['feed']['entry']['length']) {
            break
        };
        for (var _0x3737xd = 0; _0x3737xd < _0x3737x8['link']['length']; _0x3737xd++) {
            if (_0x3737x8['link'][_0x3737xd]['rel'] == 'alternate') {
                _0x3737xc = _0x3737x8['link'][_0x3737xd]['href'];
                break;
            }
        };
        for (var _0x3737xd = 0; _0x3737xd < _0x3737x8['link']['length']; _0x3737xd++) {
            if (_0x3737x8['link'][_0x3737xd]['rel'] == 'replies' && _0x3737x8['link'][_0x3737xd]['type'] == 'text/html') {
                _0x3737xb = _0x3737x8['link'][_0x3737xd]['title']['split'](' ')[0];
                break;
            }
        };
        if ('content' in _0x3737x8) {
            var _0x3737xe = _0x3737x8['content']['$t']
        } else {
            if ('summary' in _0x3737x8) {
                var _0x3737xe = _0x3737x8['summary']['$t']
            } else {
                var _0x3737xe = ''
            }
        };
        postdate = _0x3737x8['published']['$t'];
        if (j > imgr['length'] - 1) {
            j = 0
        };
        img[_0x3737x5] = imgr[j];
        s = _0x3737xe;
        a = s['indexOf']('<img');
        b = s['indexOf']('src="', a);
        c = s['indexOf']('"', b + 5);
        d = s['substr'](b + 5, c - b - 5);
        if (a != -1 && (b != -1 && (c != -1 && d != ''))) {
            img[_0x3737x5] = d
        };
        var _0x3737xf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var _0x3737x10 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var _0x3737x11 = postdate['split']('-')[2]['substring'](0, 2);
        var _0x3737x12 = postdate['split']('-')[1];
        var _0x3737x13 = postdate['split']('-')[0];
        var _0x3737x14 = 530;
        var _0x3737x15 = 400;
        var _0x3737x16 = 265;
        var _0x3737x17 = 200;
        for (var _0x3737x18 = 0; _0x3737x18 < _0x3737xf['length']; _0x3737x18++) {
            if (parseInt(_0x3737x12) == _0x3737xf[_0x3737x18]) {
                _0x3737x12 = _0x3737x10[_0x3737x18];
                break;
            }
        };
        var _0x3737x19 = _0x3737x11 + ' ' + _0x3737x12 + ' ' + _0x3737x13;
        if (_0x3737x5 == 0) {
            var _0x3737x1a = '<div class="main-post col-post"><div class="date"><p><span>' + _0x3737x19 + '</span></p></div><a href="' + _0x3737xc + '"><img width="' + _0x3737x14 + '" height="' + _0x3737x15 + '" src="' + img[_0x3737x5]['replace']('/s72-c/', '/w' + _0x3737x14 + '-h' + _0x3737x15 + '-c/') + '" alt=""></img><div class="info"><div class="box-title"><h3><span class="box-label">' + _0x3737x9 + '</span><a href="' + _0x3737xc + '" title="">' + _0x3737xa + '</a></h3></div></div></a></div>';
            document['write'](_0x3737x1a);
        } else {
            var _0x3737x1a = '<div class="secondary-post col-post"><a href="' + _0x3737xc + '"><img width="' + _0x3737x16 + '" height="' + _0x3737x17 + '" src="' + img[_0x3737x5] + '"></img><div class="info"><div class="box-title"><h3><span class="box-label">' + _0x3737x9 + '</span><a href="' + _0x3737xc + '" title="">' + _0x3737xa + '</a></h3></div></div></a></div>';
            document['write'](_0x3737x1a);
        };
        j++;
    };
}
window['onload'] = function() {
    var _0x3737x1b = document['getElementById']('arlinacredit');
    if (_0x3737x1b == null) {
        window['location']['href'] = 'https://ayooubtech.blogspot.com/'
    };
    _0x3737x1b['setAttribute']('href', 'https://ayooubtech.blogspot.com/');
    _0x3737x1b['setAttribute']('rel', 'nofollow');
    _0x3737x1b['innerHTML'] = 'أيوب تك | Ayooub Tech';
