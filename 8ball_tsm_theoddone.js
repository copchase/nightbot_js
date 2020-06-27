/** !8ball
 * Rigged 8Ball for tsm_theoddone
 * 
 * Contributors:
 * copchase
 * sapphison
 *
 * When rigging, larger weight = more likely. Only rig responses;
 * Do **not** rig probabilities of response type
 * 
 * The "suffix" property contains an array of possible emotes to affix
 * at the end of a response. There is a 10% chance no suffix is affixed
 *
 * Current probabilities:
 * 42.5% Positive
 * 42.5% Negative
 * 10% Not Doing My Job / Stupid Question
 * 5% Neutral
 * 
 */

/* Neutral responses: current weight total 110 */
const neutral = [
    {
        response: "Answer unclear",
        weight: 50,
        suffix: [
            " oddoneShrug ",
            " Kappa ",
            " nepSmug ",
            " oddoneW ",
            " oddoneSleeper ",
            " monkaHmm ",
            " oddoneSmug ",
            " KannaSippy ",
            " oddoneSip ",
            " oddSip ",
            " rooSlam ",
            " pepeSmoke ",
            " PepoG ",
            " POI "
        ]
    },
    {
        response: "Meh, could go either way",
        weight: 25,
        suffix: [
            " oddoneShrug ",
            " Kappa ",
            " nepSmug ",
            " oddoneW ",
            " oddoneSleeper ",
            " monkaHmm ",
            " oddoneSmug ",
            " KannaSippy ",
            " oddoneSip ",
            " oddSip ",
            " rooSlam ",
            " pepeSmoke ",
            " PepoG ",
            " POI "
        ]
    },
    {
        response: "Umm... sorry. Let me get back to you on that, 2 hours max",
        weight: 25,
        suffix: [
            " Kappa ",
            " KappaHD "
        ]
    },
    {
        response: "Try asking a mod... if you can find one",
        weight: 10,
        suffix: [
            " PepeLaugh "
        ]
    }
];

/* Positive responses: current weight total 250 */
const positive = [
    {
        response: "All signs point to yes...",
        weight: 70,
        suffix: [
            " FeelsOkayMan ",
            " peepoArrive ",
            " RainbowDaijoubu ",
            " COGGERS ",
            " EHEHE ",
            " oddonePog ",
            " OhISee ",
            " POGGERS ",
            " peepoBlonket ",
            " peepoClap ",
            " PepoCheer ",
            " rooSlam ",
            " YesBear ",
            " PagChomp ",
            " FeelsGoodMan ",
            " FeelsAmazingMan ",
            " VisLaud "
        ]
    },
    {
        response: "Most likely",
        weight: 55,
        suffix: [
            " FeelsOkayMan ",
            " peepoArrive ",
            " RainbowDaijoubu ",
            " COGGERS ",
            " EHEHE ",
            " oddonePog ",
            " OhISee ",
            " POGGERS ",
            " peepoBlonket ",
            " peepoClap ",
            " PepoCheer ",
            " rooSlam ",
            " YesBear ",
            " PagChomp ",
            " FeelsGoodMan ",
            " FeelsAmazingMan ",
            " VisLaud "
        ]
    },
    {
        response: "Outlook good",
        weight: 55,
        suffix: [
            " FeelsOkayMan ",
            " peepoArrive ",
            " RainbowDaijoubu ",
            " COGGERS ",
            " EHEHE ",
            " oddonePog ",
            " OhISee ",
            " POGGERS ",
            " peepoBlonket ",
            " peepoClap ",
            " PepoCheer ",
            " rooSlam ",
            " YesBear ",
            " PagChomp ",
            " FeelsGoodMan ",
            " FeelsAmazingMan ",
            " VisLaud "
        ]
    },
    {
        response: "It is decidedly so!",
        weight: 30,
        suffix: [
            " FeelsOkayMan ",
            " peepoArrive ",
            " RainbowDaijoubu ",
            " COGGERS ",
            " EHEHE ",
            " oddonePog ",
            " OhISee ",
            " POGGERS ",
            " peepoBlonket ",
            " peepoClap ",
            " PepoCheer ",
            " rooSlam ",
            " YesBear ",
            " PagChomp ",
            " FeelsGoodMan ",
            " FeelsAmazingMan ",
            " VisLaud "
        ]
    },
    {
        response: "Yes, definitely!",
        weight: 15,
        suffix: [
            " FeelsOkayMan ",
            " peepoArrive ",
            " RainbowDaijoubu ",
            " COGGERS ",
            " EHEHE ",
            " oddonePog ",
            " OhISee ",
            " POGGERS ",
            " peepoBlonket ",
            " peepoClap ",
            " PepoCheer ",
            " rooSlam ",
            " YesBear ",
            " PagChomp ",
            " FeelsGoodMan ",
            " FeelsAmazingMan ",
            " VisLaud "
        ]
    },
    {
        response: "It is certain!",
        weight: 15,
        suffix: [
            " FeelsOkayMan ",
            " peepoArrive ",
            " RainbowDaijoubu ",
            " COGGERS ",
            " EHEHE ",
            " oddonePog ",
            " OhISee ",
            " POGGERS ",
            " peepoBlonket ",
            " peepoClap ",
            " PepoCheer ",
            " rooSlam ",
            " YesBear ",
            " PagChomp ",
            " FeelsGoodMan ",
            " FeelsAmazingMan ",
            " VisLaud "
        ]
    },
    {
        response: "Yes, sir",
        weight: 10,
        suffix: [
            " YesSir "
        ]
    },
];

/* Negative responses: current weight total 295 */
const negative = [
    {
        response: "My sources say nope",
        weight: 70,
        suffix: [
            " PepeLaugh ",
            " OMEGALUL ",
            " oddoneLOL ",
            " oddoneWeird ",
            " POOGERS ",
            " ApprehensivePikachu ",
            " FeelsTastyMan ",
            " PunOko ",
            " haHAA "
        ]
    },
    {
        response:"Very doubtful",
        weight: 55,
        suffix: [
            " PepeLaugh ",
            " OMEGALUL ",
            " oddoneLOL ",
            " oddoneWeird ",
            " POOGERS ",
            " ApprehensivePikachu ",
            " FeelsTastyMan ",
            " PunOko ",
            " haHAA "
        ]
    },
    {
        response: "Don\'t count on it",
        weight: 55,
        suffix: [
            " PepeLaugh ",
            " OMEGALUL ",
            " oddoneLOL ",
            " oddoneWeird ",
            " POOGERS ",
            " ApprehensivePikachu ",
            " FeelsTastyMan ",
            " PunOko ",
            " haHAA "
        ]
    },
    {
        response: "No. - Merrx 2020",
        weight: 40,
        suffix: [
            ""
        ]
    },
    {
        response: "Imagine thinking that\'ll happen",
        weight: 30,
        suffix: [
            " PepeLaugh ",
            " OMEGALUL ",
            " oddoneLOL ",
            " oddoneWeird ",
            " POOGERS ",
            " ApprehensivePikachu ",
            " FeelsTastyMan ",
            " PunOko ",
            " haHAA "
        ]
    },
    {
        response: "Don\'t tell them, they don\'t know",
        weight: 30,
        suffix: [
            " PepeLaugh "
        ]
    },
    {
        response: "What a funny joke... oh wait, you weren\'t joking",
        weight: 10,
        suffix: [
            " PepeLaugh ",
            " OMEGALUL ",
            " oddoneLOL ",
            " oddoneWeird ",
            " POOGERS ",
            " ApprehensivePikachu ",
            " FeelsTastyMan ",
            " PunOko ",
            " haHAA "
        ]
    },
    {
        response: "N OMEGALUL ",
        weight: 5,
        suffix: [
            ""
        ]
    },
];

/* "Screw you" responses: current weight total 275 */
const not_doing_my_job = [
    {
        response: "What kind of question is that?",
        weight: 50,
        suffix: [
            " FeelsWeirdMan ",
            " AYAYAWeird ",
            " peepoLeave ",
            " oddoneRAGE ",
            " oddoneOKO ",
            " oddoneWeird ",
            " peepoMad ",
        ]
    },
    {
        response: "Stop asking me stupid questions",
        weight: 50,
        suffix: [
            " FeelsWeirdMan ",
            " AYAYAWeird ",
            " peepoLeave ",
            " oddoneRAGE ",
            " oddoneOKO ",
            " oddoneWeird ",
            " peepoMad ",
        ]
    },
    {
        response: "I\'m going to leave before you ask any more idiotic questions peepoLeave",
        weight: 40,
        suffix: [
            ""
        ]
    },
    {
        response: "What did you just say to me, you filthy sub?",
        weight: 40,
        suffix: [
            " FeelsWeirdMan ",
            " AYAYAWeird ",
            " peepoLeave ",
            " oddoneRAGE ",
            " oddoneOKO ",
            " oddoneWeird ",
            " peepoMad ",
        ]
    },
    {
        response: "I\'m not paid enough for this",
        weight: 35,
        suffix: [
            " FeelsWeirdMan ",
            " AYAYAWeird ",
            " peepoLeave ",
            " oddoneRAGE ",
            " oddoneOKO ",
            " oddoneWeird ",
            " peepoMad ",
        ]
    },
    {
        response: "8Ball.exe has encountered a fatal error and needs to shut down",
        weight: 25,
        suffix: [
            " FeelsWeirdMan ",
            " AYAYAWeird ",
            " peepoLeave ",
            " oddoneRAGE ",
            " oddoneOKO ",
            " oddoneWeird ",
            " peepoMad ",
        ]
    },
    {
        response: "Who cares? Invest in OddCoin instead!",
        weight: 25,
        suffix: [
            " oddoneW ",
            " RainbowDaijoubu "
        ]
    },
    {
        response: "🖕",
        weight: 10,
        suffix: [
            " FeelsWeirdMan ",
            " AYAYAWeird ",
            " peepoLeave ",
            " oddoneRAGE ",
            " oddoneOKO ",
            " oddoneWeird ",
            " peepoMad ",
        ]
    },
];

/*
const positive_emotes = [
    " FeelsOkayMan ",
    " peepoArrive ",
    " RainbowDaijoubu ",
    " COGGERS ",
    " EHEHE ",
    " oddonePog ",
    " OhISee ",
    " POGGERS ",
    " peepoBlonket ",
    " peepoClap ",
    " PepoCheer ",
    " rooSlam ",
    " YesBear ",
    " PagChomp ",
    " FeelsGoodMan ",
    " FeelsAmazingMan ",
    " VisLaud "
];

const neutral_emotes = [
    " oddoneShrug ",
    " Kappa ",
    " nepSmug ",
    " oddoneW ",
    " oddoneSleeper ",
    " monkaHmm ",
    " oddoneSmug ",
    " KannaSippy ",
    " oddoneSip ",
    " oddSip ",
    " rooSlam ",
    " pepeSmoke ",
    " PepoG ",
    " POI "
];

const negative_emotes = [
    " PepeLaugh ",
    " OMEGALUL ",
    " oddoneLOL ",
    " oddoneWeird ",
    " POOGERS ",
    " ApprehensivePikachu ",
    " FeelsTastyMan ",
    " PunOko ",
    " haHAA "
];

const not_doing_job_emotes = [
    " FeelsWeirdMan ",
    " AYAYAWeird ",
    " peepoLeave ",
    " oddoneRAGE ",
    " oddoneOKO ",
    " oddoneWeird ",
    " peepoMad ",
];
*/

/* Be me, rip shit from StackOverflow because I don't feel like coming
up with this myself */
function weighted_pick(response_type) {
    /* Get the total, and make the weights cummulative */
    let total = response_type.reduce(function(sum, item) {
        item.weight = item.weight + sum;
        return item.weight;
    }
    , 0);

    let r = Math.random() * total;

    /* Can't use .forEach() here because we want early termination */
    for (let i = 0; i < response_type.length; i++) {
        if (r < response_type[i].weight) {
            return response_type[i];
        }
    }
}

function eightball() {
    let roll_response_type = Math.random();
    let roll_emote_suffix = Math.random() > 0.1;
    let obj;
    if (roll_response_type <= 0.05) {
        obj = weighted_pick(neutral);
    } else if (roll_response_type <= 0.15) {
        obj = weighted_pick(not_doing_my_job);
    } else if (roll_response_type <= 0.575) {
        obj = weighted_pick(positive);
    } else {
        obj = weighted_pick(negative);
    }

    let out = obj.response;
    if (roll_emote_suffix) {
        out = out + obj.suffix[Math.floor(Math.random() * obj.suffix.length)];
    }

    return out;
}

eightball();
