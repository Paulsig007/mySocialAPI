const Thought = require("../models/Thought");
const User = require("../models/User");
const Reaction = require("../models/Reaction");

module.exports = {
  // get all thoughts
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  // get one thought by id
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  // create thought
  async createThought(req, res) {
    try {
      // console.log("Entered Try Block");
      const dbThoughtData = await Thought.create(req.body);
      // console.log(dbThoughtData);
      const user = await User.findOneAndUpdate(
        { username: req.body.username },
        { $push: { thoughts: dbThoughtData._id } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "No user with this username!" });
      }

      res.json(dbThoughtData);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  // update thought by id
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }

      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  // delete thought by id
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  // add reaction to thought
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  // delete reaction from thought
  async removeReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: "No thought with this id!" });
      }
      res.json(thought);
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
