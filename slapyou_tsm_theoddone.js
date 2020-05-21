/* !slapyou by copchase for tsm_theoddone */
/* Use blocks for comments, Nightbot likes it this way */
/* TEST COMMENT */

/* Any accounts similar to OddOne's name have a 100% failure rate using !slapyou */
const imposters = ["tsmthegodone"];
const immuneresponse = ["Treason shall not be tolerated oddoneVillain ", "You fools! TheOddOne cannot be touched oddoneW", "TheOddOne is far too powerful to be slapped oddoneBakana"];
const goodcrit = ["POGGERS", "PogChamp", "PagChomp"];
const badcrit = ["Pepega", "POOGERS", "FeelsTastyMan", "OMEGALUL", "LUL", "PepeLaugh"];

/**
 * C# style String.format
 */

if (!String.format) {
    String.format = function(format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function(match, number) { 
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
      };
}

function slapyou(from, to) {
    
    let crit = Math.random() < 0.0625;
    let critexp = Math.round(Math.random() * (1500 - 1001) + 1001);
    let regex = /^(.*odd|.*awd|.*god)(?=_*one.*|._*juan.*|_*wan.*)/i;

    if (from === to) {
        return "ERROR: You cannot attempt to intentionally slap yourself PepeLaugh ";
    }

    if (!(to.match(regex) === null)) {
        if (crit) {
            return String.format("{0} attempted to slap TheOddOne, but was struck down and lost {1} EXP! oddoneVillain ", from, critexp.toString());
        } else {
            return immuneresponse[Math.floor(Math.random() * immuneresponse.length)];
        }
    }

    let exp = Math.round(Math.random() * 999 + 1);

    if (Math.random() < 0.5 || imposters.includes(from.toLowerCase())) {
        if (crit) {
            return String.format("{0} slaps themselves in confusion, losing {1} EXP! {2}", from, critexp.toString(), badcrit[Math.floor(Math.random() * badcrit.length)]);
        } else {
            return String.format("{0} fails to slap {1} and loses {2} EXP!", from, to, exp.toString());
        }
    } else {
        if (crit) {
            return String.format("{0} slaps {1} and critically hits, gaining {2} EXP! {3}", from, to, critexp.toString(), goodcrit[Math.floor(Math.random() * goodcrit.length)]);
        } else {
            return String.format("{0} slaps {1} and gains {2} EXP!", from, to, exp.toString());
        }
    }
}

slapyou(user, input);