
var friendsapi = require("../data/friends");
module.exports = function (app) {
  // //api path to get the friends data, responds with a json object (an array of friends). Activated on both html pages with blue API Link
  app.get('/api/friends', function (req, res) {
    res.json(friendsapi);
  });

  // *** Updates an array of friends "database" array and sends back the json form of the most compatible new friend
  app.post('/api/friends', function (req, res) {
    // newFriend is the user that filled out the survey
    var newFriend = req.body;

    // compute best match from scores
    var bestMatch = {};

    for (var i = 0; i < newFriend.scores.length; i++) {
      if (newFriend.scores[i] == "1 (Strongly Disagree)") {
        newFriend.scores[i] = 1;
      } else if (newFriend.scores[i] == "5 (Strongly Agree)") {
        newFriend.scores[i] = 5;
      } else {
        newFriend.scores[i] = parseInt(newFriend.scores[i]);
      }
    }
    // compare the scores of newFriend with the scores of each friend in the database and find the friend with the smallest difference when each set of scores is compared

    var bestMatchIndex = 0;
    //greatest score difference for a question is 4, therefore greatest difference is 4 times # of questions in survey
    var bestMatchDifference = 40;

    for (var i = 0; i < friendsapi.length; i++) {
      var totalDifference = 0;

      for (var index = 0; index < friendsapi[i].scores.length; index++) {
        var differenceOneScore = Math.abs(friendsapi[i].scores[index] - newFriend.scores[index]);
        totalDifference += differenceOneScore;
        console.log(friendsapi[i].scores)
      }

      // if the totalDifference in scores is less than the best match so far
      // save that index and difference
      if (totalDifference < bestMatchDifference) {
        bestMatchIndex = i;
        bestMatchDifference = totalDifference;
      }
    }

    // the best match index is used to get the best match data from the friends index
    bestMatch = friendsapi[bestMatchIndex];

    // Put new friend from survey in "database" array
    friendsapi.push(newFriend);

    // return the best match friend
    res.json(bestMatch);
  });

};