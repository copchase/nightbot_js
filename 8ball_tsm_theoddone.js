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
 * The "suffix" property states whether a suffix emote can be applied or not
 * 90% chance of an emote being applied as a suffix if permitted
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
        response: "Unclear",
        weight: 50,
        suffix: true
    },
    {
        response: "Meh, could go either way",
        weight: 25,
        suffix: true
    },
    {
        response: "Umm...sorry, lemme get back to you on that, 2 hours max",
        weight: 25,
        suffix: true
    },
    {
        response: "Try asking a mod... if you can find one PepeLaugh ",
        weight: 10,
        suffix: false
    }
];

/* Positive responses: current weight total 250 */
const positive = [
    {
        response: "All signs point to yes...",
        weight: 70,
        suffix: true
    },
    {
        response: "Most likely",
        weight: 55,
        suffix: true
    },
    {
        response: "Outlook good",
        weight: 55,
        suffix: true
    },
    {
        response: "It is decidedly so!",
        weight: 30,
        suffix: true
    },
    {
        response: "Yes, definitely!",
        weight: 15,
        suffix: true
    },
    {
        response: "It is certain!",
        weight: 15,
        suffix: true
    },
    {
        response: "Yes, sir YesSir",
        weight: 10,
        suffix: false
    },
];

/* Negative responses: current weight total 255 */
const negative = [
    {
        response: "My sources say nope",
        weight: 70,
        suffix: true
    },
    {
        response:"Very doubtful",
        weight: 55,
        suffix: true
    },
    {
        response: "Don\'t count on it",
        weight: 55,
        suffix: true
    },
    {
        response: "Imagine thinking that\'ll happen",
        weight: 30,
        suffix: true
    },
    {
        response: "Don\'t tell him, he doesn\'t know",
        weight: 30,
        suffix: true
    },
    {
        response: "What a funny joke...oh wait, you weren\'t joking",
        weight: 10,
        suffix: true
    },
    {
        response: "N OMEGALUL",
        weight: 5,
        suffix: false
    },
];

/* "Screw you" responses: current weight total 250 */
const not_doing_my_job = [
    {
        response: "What kind of question is that?",
        weight: 50,
        suffix: true
    },
    {
        response: "Stop asking me stupid questions",
        weight: 50,
        suffix: true
    },
    {
        response: "I\'m going to leave before you ask any more idiotic questions",
        weight: 40,
        suffix: true
    },
    {
        response: "What did you just say to me, you filthy sub?",
        weight: 40,
        suffix: true
    },
    {
        response: "I\'m not paid enough for this",
        weight: 35,
        suffix: true
    },
    {
        response: "8Ball.exe has encountered a fatal error and needs to shut down",
        weight: 25,
        suffix: true
    },
    {
        response: "🖕",
        weight: 10,
        suffix: true
    },
];

const positive_emotes = [
    " FeelsOkayMan ",
    " peepoArrive ",
    " RainbowDaijoubu ",
    " COGGERS ",
    " EHEHE ",
    " oddonePOG ",
    " OhISee ",
    " POGGERS ",
    " peepoBlonket ",
    " peepoClap ",
    " pepoCheer ",
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
    " oddoneWeird "
];

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
    let out;
    if (roll_response_type <= 0.05) {
        let obj = weighted_pick(neutral);
        out = obj.response;
        if (obj.suffix && roll_emote_suffix) {
            out = out + neutral_emotes[Math.floor(Math.random() * neutral_emotes.length)];
        }
    } else if (roll_response_type <= 0.15) {
        let obj = weighted_pick(not_doing_my_job);
        out = obj.response;
        if (obj.suffix && roll_emote_suffix) {
            out = out + not_doing_job_emotes[Math.floor(Math.random() * not_doing_job_emotes.length)];
        }
    } else if (roll_response_type <= 0.575) {
        let obj = weighted_pick(positive);
        out = obj.response;
        if (obj.suffix && roll_emote_suffix) {
            out = out + positive_emotes[Math.floor(Math.random() * positive_emotes.length)];
        }
    } else {
        let obj = weighted_pick(negative);
        out = obj.response;
        if (obj.suffix && roll_emote_suffix) {
            out = out + negative_emotes[Math.floor(Math.random() * negative_emotes.length)];
        }
    }

    return out;
}

eightball();
