const { Schema, model } = require("mongoose");

const jobSchema = new Schema(
  {
    company: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    advertisedSalary: {
      type: Number,
    },

    offerMade: {
      type: Boolean,
    },
    contactPerson: {
      type: Schema.Types.ObjectId,
      ref: "Contact",
    },
    comLogArray: [
      {
        type: Schema.Types.ObjectId,
        ref: "ComLog",
      },
    ],
    default: [],
  },

  { timestamps: true }
);

const Job = model("Job", jobSchema);

module.exports = Job;
