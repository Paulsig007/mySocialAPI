const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");

const userData = [
  {
    username: "draconisgaladriel",
    email: "dracon@gmail.com",
    thoughts: "I love the smell of napalm in the morning",
    friends: ["animagusguldur", "triwizardkili"],
  },
  {
    username: "animagusguldur",
    email: "animagus@gmail.com",
    thoughts: "Oh what a beautiful morning",
    friends: ["draconisgaladriel", "triwizardkili"],
  },
  {
    username: "triwizardkili",
    email: "triwiz@gmail.com",
    thoughts: "I'm walking on sunshine",
    friends: ["draconisgaladriel", "animagusguldur"],
  },
  {
    username: "beatermoria",
    email: "beater@gmail.com",
    thoughts: "You're the sunshine of my life",
    friends: ["muggleithil", "bagshotmidgewater"],
  },
  {
    username: "muggleithil",
    email: "muggle@gmail.com",
    thoughts: "Somewhere over the rainbow",
    friends: ["beatermoria", "bagshotmidgewater"],
  },
  {
    username: "bagshotmidgewater",
    email: "bagshot@gmail.com",
    thoughts: "I can see clearly now the rain is gone",
    friends: ["beatermoria", "muggleithil"],
  },
  {
    username: "durmstrangperegrin",
    email: "durmstrang@gmail.com",
    thoughts: "Have you ever seen the rain?",
    friends: ["mostafamearas", "twiggerlegolas"],
  },
  {
    username: "mostafamearas",
    email: "mostaf@gmail.com",
    thoughts: "Raindrops keep falling on my head",
    friends: ["durmstrangperegrin", "twiggerlegolas"],
  },
  {
    username: "twiggerlegolas",
    email: "twigger@gmail.com",
    thoughts: "I'm singing in the rain",
    friends: ["durmstrangperegrin", "mostafamearas"],
  },
  {
    username: "fwoopergondor",
    email: "fwooper@gmail.com",
    thoughts: "Rainy days and Mondays always get me down",
    friends: ["beatermoria", "mostafamearas"],
  },
];

const thoughtsData = [
  {
    thoughtText: "I love the smell of napalm in the morning",
    createdAt: "2021-08-12T18:28:32.925Z",
    username: "draconisgaladriel",
    reactions: [
      {
        reactionId: 1,
        reactionBody: "😀",
        username: "animagusguldur",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "Oh what a beautiful morning",
    createdAt: "2021-08-12T18:28:32.925Z",
    username: "animagusguldur",
    reactions: [
      {
        reactionId: 2,
        reactionBody: "😂",
        username: "draconisgaladriel",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "I'm walking on sunshine",
    createdAt: "2021-08-12T18:28:32.925Z",
    username: "triwizardkili",
    reactions: [
      {
        reactionId: 3,
        reactionBody: "😎",
        username: "draconisgaladriel",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "You're the sunshine of my life",
    createdAt: "2021-08-12T18:28:32.925Z",
    username: "beatermoria",
    reactions: [
      {
        reactionId: 4,
        reactionBody: "😍",
        username: "muggleithil",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "Somewhere over the rainbow",
    createdAt: "2021-08-12T18:28:32.925Z",
    username: "muggleithil",
    reactions: [
      {
        reactionId: 5,
        reactionBody: "😡",
        username: "beatermoria",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "I can see clearly now the rain is gone",
    createdAt: "2021-08-12T18:28:32.925Z",
    username: "bagshotmidgewater",
    reactions: [
      {
        reactionId: 6,
        reactionBody: "🤬",
        username: "beatermoria",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "Have you ever seen the rain?",

    createdAt: "2021-08-12T18:28:32.925Z",
    username: "durmstrangperegrin",
    reactions: [
      {
        reactionId: 7,
        reactionBody: "😱",
        username: "mostafamearas",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "Raindrops keep falling on my head",
    createdAt: "2021-08-12T18:28:32.925Z",
    username: "mostafamearas",
    reactions: [
      {
        reactionId: 8,
        reactionBody: "😈",
        username: "durmstrangperegrin",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "I'm singing in the rain",
    createdAt: "2021-08-12T18:28:32.925Z",
    username: "twiggerlegolas",
    reactions: [
      {
        reactionId: 9,
        reactionBody: "🤪",
        username: "durmstrangperegrin",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
  {
    thoughtText: "Rainy days and Mondays always get me down",
    createdAt: "2021-08-12T18:28:32.925Z",
    username: "fwoopergondor",
    reactions: [
      {
        reactionId: 10,
        reactionBody: "🤯",
        username: "beatermoria",
        createdAt: "2021-08-12T18:28:32.925Z",
      },
    ],
  },
];

connection.on("error", (err) => console.log(err));

connection.once("open", async () => {
  console.log("connected to database");
  let userCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (userCheck.length > 0) {
    await connection.db.dropCollection("users");
  }
  await User.create(userData);
  console.log("users seeded");

  let thoughtCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtCheck.length > 0) {
    await connection.db.dropCollection("thoughts");
  }
  await Thought.create(thoughtsData);
  console.log("thoughts seeded");

  process.exit(0);
});
