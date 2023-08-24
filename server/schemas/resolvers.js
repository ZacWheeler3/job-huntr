const { User, Job, Contact, CommonQuestions } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("savedJobs");
      }
      throw AuthenticationError;
    },
    jobs: async () => {
      return Job.find();
    },
    job: async (parent, { _id }) => {
      return Job.findOne({ _id });
    },
    questions: async () => {
      return CommonQuestions.find();
    },
  },

  Mutation: {
    addUser: async (
      parent,
      { username, email, password, firstName, lastName }
    ) => {
      const user = await User.create({
        username,
        email,
        password,
        firstName,
        lastName,
      });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addJob: async (
      _parent,
      { company, role, advertisedSalary, offerMade },
      context
    ) => {
      console.log("context.user:", context.user);
      if (!context.user) {
        throw AuthenticationError;
      }
      const job = await Job.create({
        company,
        role,
        advertisedSalary,
        offerMade,
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedJobs: job._id } },
        { new: true, runValidators: true }
      );
      console.log(context.user._id);
      return job;
    },
    addQuestion: async (_parent, { question, response }, context) => {
      if (!context.user) {
        throw AuthenticationError;
      }
      const newQuestion = await CommonQuestions.create({
        question,
        response,
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedQuestions: newQuestion._id } },
        { new: true, runValidators: true }
      );
      console.log(context.user._id);
      console.log("new question added:", newQuestion);
      return newQuestion;
    },
    updateQuestion: async (_parent, { _id, question, response }) => {
      const updatedQuestion = { _id, question, response };
      await CommonQuestions.findOneAndUpdate(
        { _id: _id },
        { question, response },
        { new: true }
      );

      return updatedQuestion;
    },
  },
};

module.exports = resolvers;
//
