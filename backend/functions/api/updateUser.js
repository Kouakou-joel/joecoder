const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

/**
 * update use identification data
 * @param body {Object, String}
 * @return { string} Message success| error
 * @forplay https://console.firebase.google.com/project/joecoder-29421/functions
 *  @doccument https://firebase.google.com/docs/auth/web/manage-users?hl=fr&_gl=1*1ihzwfy*_up*MQ..&gclid=Cj0KCQiAj9m7BhD1ARIsANsIIvApU5omtN66lYVv4-wLslEK5QXvdPqWOiQNcwCYWRQ9D1PgRjOaaygaAu92EALw_wcB&gclsrc=aw.ds
 */

exports.updateUser = functions.https.onRequest((req, res) => {
  const uid = req.body.uid;
  const data = req.body.data;

  return cors(req, res, async () => {
    try {
      await admin.firestore().collection("users").doc(uid).update(data);
      res.status(200).send("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).send("Error updating user");
    }
  });
});
