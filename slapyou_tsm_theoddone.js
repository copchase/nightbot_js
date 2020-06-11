/* Use blocks for comments, Nightbot likes it this way */

/** !slapyou
 * !slapyou for tsm_theoddone
 * 
 * Contributors:
 * copchase
 * 
 */

/* Any accounts similar to OddOne's name have a 100% failure rate using !slapyou */
const imposters = [
    "tsmthegodone"
];
const immuneresponse = [
    "Treason shall not be tolerated oddoneVillain ",
    "You fools! TheOddOne cannot be touched oddoneW",
    "TheOddOne is far too powerful to be slapped oddoneBakana"
];
const goodcrit = [
    "POGGERS",
    "PogChamp",
    "PagChomp"
];
const badcrit = [
    "Pepega",
    "POOGERS",
    "FeelsTastyMan",
    "OMEGALUL",
    "LUL",
    "PepeLaugh"
];

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
    let oddoneRegex = /^(.*odd|.*awd|.*god)(?=.*one|.*juan|.*wan|.*1|.*wun)(.*)$/i;
    let selfRegex = /^((.*self)|(.*selves))$/i;
    let oddone = from.toLowerCase() === "tsm_theoddone";
    let splits = to.split(/\s/);

    let emoteSet = new Set();
    
    emoteSet.add("oddone7");
    emoteSet.add("oddoneAYAYA");
    emoteSet.add("oddoneBully");
    emoteSet.add("oddoneChair");
    emoteSet.add("oddoneClown");
    emoteSet.add("oddoneCop");
    emoteSet.add("oddoneCute");
    emoteSet.add("oddoneDiplomacy");
    emoteSet.add("oddoneDuel");
    emoteSet.add("oddoneFE");
    emoteSet.add("oddoneGhost");
    emoteSet.add("oddoneGreen");
    emoteSet.add("oddoneLOL");
    emoteSet.add("oddoneLick");
    emoteSet.add("oddoneOKO");
    emoteSet.add("oddonePOG");
    emoteSet.add("oddonePat");
    emoteSet.add("oddoneREE");
    emoteSet.add("oddoneRIP");
    emoteSet.add("oddoneShrug");
    emoteSet.add("oddoneSiSenor");
    emoteSet.add("oddoneSip");
    emoteSet.add("oddoneWeird");
    emoteSet.add("oddoneWel");
    emoteSet.add("oddAYAYA");
    emoteSet.add("oddCute");
    emoteSet.add("oddHYPERS");
    emoteSet.add("oddoneHeh");
    emoteSet.add("oddoneSmug");
    emoteSet.add("oddOwO");
    emoteSet.add("oddREE");
    emoteSet.add("oddSip");
    emoteSet.add("oddSlain");
    emoteSet.add("oddThump");
    emoteSet.add("oddWeeb");

    for (let idx = 0; idx < splits.length; ++idx) {
        let curr = splits[idx];
        if (emoteSet.has(curr)) {
            splits[idx] = "";
        }
    }

    let anti = "";

    splits.forEach(word => {
        if (word.length > 0) {
            anti = anti.concat(" " + word);
        }
    })

    let leetMap = new Map();
    /* leetMap.set(/4|(\/[-_=+]+\\)|@|\^/g, "A");
    leetMap.set(/13/g, "B");
    leetMap.set(/\/3/g, "B");
    leetMap.set(/\|3/g, "B");
    leetMap.set(/8/g, "B");
    leetMap.set(/</g, "C");
    leetMap.set(/\(/g, "C"); */
    leetMap.set(/\|[)}\]>]/g, "D");
    leetMap.set(/[3\u0395\u03F5\u03B5\u00A3\u20A4\u20AC]/g, "E");
    /* leetMap.set(/6/g, "G"); */
    leetMap.set(/[#4]|([\|\[\]\{\}\/\\\(\)\:I][-=+]+[\|\[\]\{\}\/\\\(\)\:I])|([\}\)][\{\(])/g, "H");
    /* leetMap.set(/!/g, "I");
    leetMap.set(/_\//g, "J");
    leetMap.set(/_\|/g, "J");
    leetMap.set(/\|_/g, "L");
    leetMap.set(/1/g, "L"); */
    leetMap.set(/0|[\(\[\{\<][\)\]\}\>]/g, "O");
    leetMap.set(/[\u0418\u0438]|((\||\/|l|I)\\+(\||\/|l|I))|(\/V)|(\]\[\\+]\[)/g, "N");
    /* leetMap.set(/5/g, "S"); */
    leetMap.set(/(7`?)|\+|(['`~-](\|+|(\]\[))['`~-])/g, "T");
    /* leetMap.set(/\\\/\\\//g, "W");
    leetMap.set(/\\\//g, "V");
    leetMap.set(/></g, "X");
    leetMap.set(/2/g, "Z"); */

    if (from === to | !(to.match(selfRegex) === null)) {
        return "ERROR: You cannot attempt to intentionally slap yourself PepeLaugh ";
    }

    for (let [key, value] of leetMap) {
        anti = anti.replace(key, value);
    }

    if (!(anti.match(oddoneRegex) === null)) {
        if (crit) {
            return String.format("{0} attempted to slap TheOddOne, but was struck down and lost {1} EXP! oddoneVillain ", from, critexp.toString());
        } else {
            return immuneresponse[Math.floor(Math.random() * immuneresponse.length)];
        }
    }

    let exp = Math.round(Math.random() * 999 + 1);

    if (!oddone && (Math.random() <= 0.2 || imposters.includes(from.toLowerCase()))) {
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
