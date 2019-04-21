var ZoneController = require("./ZoneController");
var CommentController = require("./CommentController");

// keys are named after the resource
module.exports = {
  comment: CommentController,
  zone: ZoneController
};
