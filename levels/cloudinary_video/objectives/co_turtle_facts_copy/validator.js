module.exports = async function (helper) {
  // We start by getting the user input from the helper
  const { answer1, answer2, answer3 } = helper.validationFields;

  // Next, you test the user input - fail fast if they get one of the
  // answers wrong, or some aspect is wrong! Don't provide too much
  // negative feedback at once, have the player iterate.
  if (!answer1 || !answer2 || !answer3) {
    return helper.fail(`
      Please answer all three questions before submitting your answer. Try scrolling
      down on the questions panel if you don't see all the questions!
    `);
  }

  // The way we usually write validators is to fail fast, and then if we reach
  // the end, we know the user got all the answers right!

  helper.success(`
    Alright congrats, I now know more about my turtle than I could ever know. :)
  `);
};
