/* Rigged 8Ball for tsm_theoddone */
/* Written by copchase */

/* When rigging, larger weight = more likely. Only rig responses;
do **not** rig probabilities of positive/negative responses. */

/* Current probabilities:
  42.5% Positive
  42.5% Negative
  10% Not Doing My Job
  5% Neutral
*/


/* Neutral responses: current weight total 100 */
const neutral = [
  {
    response: "Unclear",
    weight: 50
  },
  {
    response: "Meh, could go either way",
    weight: 25
  },
  {
    response: "Umm...sorry, lemme get back to you on that, 2 hours max",
    weight: 25
  },
];

/* Positive responses: current weight total 250 */
const positive = [
  {
    response: "All signs point to yes...",
    weight: 70
  },
  {
    response: "Most likely",
    weight: 55
  },
  {
    response: "Outlook good",
    weight: 55
  },
  {
    response: "It is decidedly so!",
    weight: 30
  },
  {
    response: "Yes, definitely!",
    weight: 15
  },
  {
    response: "It is certain!",
    weight: 15
  },
  {
    response: "Yes, sir",
    weight: 10
  },
];

/* Negative responses: current weight total 250 */
const negative = [
  {
    response: "My sources say nope",
    weight: 70
  },
  {
    response:"Very doubtful",
    weight: 55
  },
  {
    response: "Don\'t count on it",
    weight: 55
  },
  {
    response: "Imagine thinking that\'ll happen",
    weight: 30
  },
  {
    response: "Don\'t tell him, he doesn\'t know",
    weight: 30
  },
  {
    response: "What a funny joke...oh wait, you weren\'t joking",
    weight: 10
  },
];

/* "Screw you" responses: current weight total 250 */
const not_doing_my_job = [
  {
    response: "What kind of question is that?",
    weight: 50
  },
  {
    response: "Stop asking me stupid questions",
    weight: 50
  },
  {
    response: "I\'m going to leave before you ask any more idiotic questions",
    weight: 40
  },
  {
    response: "What did you just say to me, you filthy sub?",
    weight: 40
  },
  {
    response: "I\'m not paid enough for this",
    weight: 35
  },
  {
    response: "8Ball has encountered a fatal error and needs to shut down.",
    weight: 25
  },
  {
    response: "🖕",
    weight: 10
  },
];

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

/* Be me, rip shit from StackOverflow because I don't feel like coming
up with this myself */
function weighted_pick(response_type) {
  /* Get the total, and make the weights cummulative */
  var total = response_type.reduce(function(sum, item){
      item.weight = item.weight + sum;
      return item.weight;
  },0);

  var r = Math.random() * total;

  /* Can't use .forEach() here because we want early termination */
  for (var i = 0; i < response_type.length; i++) {
       if (r < response_type[i].weight)
           return response_type[i].response;
  }
}

function eightball() {
  let roll = Math.random();
  if (roll <= 0.05){
    return weighted_pick(neutral);
  }
  else if (roll <= 0.15) {
    return weighted_pick(not_doing_my_job);
  }
  else if (roll <= 0.575) {
    return weighted_pick(positive);
  }
  else {
    return weighted_pick(negative);
  }
}

eightball();
