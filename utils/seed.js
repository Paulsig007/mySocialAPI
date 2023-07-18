const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");
const {
  getRandomUserName,
  getRandomThought,
  getRandomReaction,
} = require("./data");

async function dropCollectionIfExist(collectionName) {
  const collectionCheck = await connection.db
    .listCollections({ name: collectionName })
    .toArray();
  if (collectionCheck.length) {
    await connection.dropCollection(collectionName);
  }
}

async function seedDatabase() {
  try {
    connection.on("error", (err) => err);

    connection.once("open", async () => {
      console.log("Connected to database");

      await dropCollectionIfExist("thoughts");
      await dropCollectionIfExist("users");

      const users = [];
      const thoughts = [];
      const reactions = [];

      for (let i = 0; i < 10; i++) {
        const randomThoughts = getRandomThought(10);
        const randomReactions = getRandomReaction(10);

        const userName = getRandomUserName();

        users.push({
          userName,
          thoughts: randomThoughts,
        });

        thoughts.push(...randomThoughts);
        reactions.push(...randomReactions);
      }

      await User.collection.insertMany(users);
      await Thought.collection.insertMany(thoughts);
      await Reaction.collection.insertMany(reactions);

      console.table(users);
      console.table(thoughts);
      console.table(reactions);
      console.info("Seeding complete! 🌱");
      process.exit(0);
    });
  } catch (error) {
    console.error("An error occurred during seeding:", error);
    process.exit(1);
  }
}

seedDatabase();
