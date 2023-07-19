const userData = [
  {
    userName: "draconisgaladriel",
    email: "dracon@gmail.com",
    thoughts: ["I love the smell of napalm in the morning"],
    friends: ["animagusguldur", "triwizardkili"],
  },
  {
    userName: "animagusguldur",
    email: "animagus@gmail.com",
    thoughts: ["Oh what a beautiful morning"],
    friends: ["draconisgaladriel", "triwizardkili"],
  },
  {
    userName: "triwizardkili",
    email: "triwiz@gmail.com",
    thoughts: ["I'm walking on sunshine"],
    friends: ["draconisgaladriel", "animagusguldur"],
  },
  {
    userName: "beatermoria",
    email: "beater@gmail.com",
    thoughts: ["You're the sunshine of my life"],
    friends: ["muggleithil", "bagshotmidgewater"],
  },
  {
    userName: "muggleithil",
    email: "muggle@gmail.com",
    thoughts: ["Somewhere over the rainbow"],
    friends: ["beatermoria", "bagshotmidgewater"],
  },
  {
    userName: "bagshotmidgewater",
    email: "bagshot@gmail.com",
    thoughts: ["I can see clearly now the rain is gone"],
    friends: ["beatermoria", "muggleithil"],
  },
  {
    userName: "durmstrangperegrin",
    email: "durmstrang@gmail.com",
    thoughts: ["Have you ever seen the rain?"],
    friends: ["mostafamearas", "twiggerlegolas"],
  },
  {
    userName: "mostafamearas",
    email: "mostaf@gmail.com",
    thoughts: ["Raindrops keep falling on my head"],
    friends: ["durmstrangperegrin", "twiggerlegolas"],
  },
  {
    userName: "twiggerlegolas",
    email: "twigger@gmail.com",
    thoughts: ["I'm singing in the rain"],
    friends: ["durmstrangperegrin", "mostafamearas"],
  },
  {
    userName: "fwoopergondor",
    email: "fwooper@gmail.com",
    thoughts: ["Rainy days and Mondays always get me down"],
    friends: ["beatermoria", "mostafamearas"],
  },
];

const thoughtsData = [
  {
    thoughtText: "I love the smell of napalm in the morning",
    createdAt: "2021-08-12T18:28:32.925Z",
    userName: "draconisgaladriel",
    reactions: [
      {
        reactionId: 1,
        reactionBody: "😀",
        userName: "animagusguldur",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "Oh what a beautiful morning",
    createdAt: "2021-08-12T18:28:32.925Z",
    userName: "animagusguldur",
    reactions: [
      {
        reactionId: 2,
        reactionBody: "😂",
        userName: "draconisgaladriel",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "I'm walking on sunshine",
    createdAt: "2021-08-12T18:28:32.925Z",
    userName: "triwizardkili",
    reactions: [
      {
        reactionId: 3,
        reactionBody: "😎",
        userName: "draconisgaladriel",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "You're the sunshine of my life",
    createdAt: "2021-08-12T18:28:32.925Z",
    userName: "beatermoria",
    reactions: [
      {
        reactionId: 4,
        reactionBody: "😍",
        userName: "muggleithil",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "Somewhere over the rainbow",
    createdAt: "2021-08-12T18:28:32.925Z",
    userName: "muggleithil",
    reactions: [
      {
        reactionId: 5,
        reactionBody: "😡",
        userName: "beatermoria",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "I can see clearly now the rain is gone",
    createdAt: "2021-08-12T18:28:32.925Z",
    userName: "bagshotmidgewater",
    reactions: [
      {
        reactionId: 6,
        reactionBody: "🤬",
        userName: "beatermoria",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "Have you ever seen the rain?",

    createdAt: "2021-08-12T18:28:32.925Z",
    userName: "durmstrangperegrin",
    reactions: [
      {
        reactionId: 7,
        reactionBody: "😱",
        userName: "mostafamearas",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "Raindrops keep falling on my head",
    createdAt: "2021-08-12T18:28:32.925Z",
    userName: "mostafamearas",
    reactions: [
      {
        reactionId: 8,
        reactionBody: "😈",
        userName: "durmstrangperegrin",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "I'm singing in the rain",
    createdAt: "2021-08-12T18:28:32.925Z",
    userName: "twiggerlegolas",
    reactions: [
      {
        reactionId: 9,
        reactionBody: "🤪",
        userName: "durmstrangperegrin",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "Rainy days and Mondays always get me down",
    createdAt: "2021-08-12T18:28:32.925Z",
    userName: "fwoopergondor",
    reactions: [
      {
        reactionId: 10,
        reactionBody: "🤯",
        userName: "beatermoria",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
];

const seedDatabase = async () => {
  await User.deleteMany();
  await Thought.deleteMany();

  await User.insertMany(userData);
  await Thought.insertMany(thoughtsData);

  console.log("all done!");
  process.exit(0);
};
