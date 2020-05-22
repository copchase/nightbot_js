/* Rigged 8Ball for tsm_theoddone */
/* Written by copchase */

/* When rigging, larger weight = more likely. Only rig responses;
do **not** rig probabilities of positive/negative responses. */

/* Neutral responses: current weight total 100 */
const neutral = [
  {"Unclear", 50},
  {"Meh, could go either way", 25},
  {"Umm...sorry, lemme get back to you on that, 2 hours max", 25}
];

/* Neutral responses: current weight total 250 */
const positive = [
  {"All signs point to yes...", 70},
  {"Most likely.", 55},
  {"Outlook good.", 55},
  {"It is decidedly so!", 30},
  {"Yes, definitely!", 15},
  {"It is certain!", 15},
  {"Yes, sir.", 10},
];

/* Negative responses: current weight total 250 */
const negative = [
  {"My sources say nope", 70},
  {"Very doubtful", 55},
  {"Don\"t count on it", 55},
  {"Imagine thinking that'll happen", 30},
  {"Don't tell him, he doesn't know", 30},
  {"What a funny joke...oh wait, you weren't joking", 10}
];

/* Neutral responses: current weight total 250 */
const not_doing_my_job = [
  {"What kind of question is that? FeelsWeirdMan 👉 🚪", 50},
  {"Stop asking me stupid questions AYAYAWeird ", 50},
  {"I\'m going to leave before you ask any more idiotic questions", 40},
  {"What did you just say to me, you filthy sub?", 40},
  {"I'm not paid enough for this", 35},
  {"8Ball has encountered a fatal error and needs to shut down.", 25}
  {"🖕", 10},
]

/* Old constant var_array

const responses = [
    "My sources say nope.",
    "Very doubtful.",
    "Don\"t count on it.",
    "What kind of question is that? FeelsWeirdMan 👉 🚪",
    "Stop asking me stupid questions AYAYAWeird ",
    "I\'m going to leave before you ask any more idiotic questions peepoLeave",
    "Yes, definitely!",
    "It is certain!",
    "Most likely.",
    "Outlook good.",
    "All signs point to yes...",
    "It is decidedly so!",
];
*/

responses[Math.floor(Math.random * responses.length)];
