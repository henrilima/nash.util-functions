const waitFor = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

function removeDuplicates(array) {
    return a.filter(function(e, pos) {
      return a.indexOf(e) == pos;
    });
};

function shuffle(array) {
    return array.sort(function() {
        return Math.random() - 0.5
    });
};

function randomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var x1 = num >> 16, x2 = num >> 8 & 255, x3 = num & 255;
  return `rgb(${x1},${x2},${x3})`;
};

function randomHEX() {
	return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
};

function randomNumber(max, min) {
	return Math.random() * (max - min) + min;
};

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b", "t"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
};

function msToTime(s) {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;
	s = (s - mins) / 60;
    let hrs = s % 24;
	let days = (s - hrs) / 24;
  
    return (
		(days > 0 ? days + 'd ' : '') + 
		(hrs > 0 ? hrs + 'h ' : '') + 
		(mins > 0 ? mins + 'm ' : '') + 
		secs + 's'
	);
};

function replaceAll(string, find, replace) {
  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
};
