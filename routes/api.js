var express = require("express");
var router = express.Router();
var controllers = require("../controllers/index");
var ZoneController = require("../controllers/ZoneController");

// made into generic api using index controller controller object

router.get("/:resource", function(req, res, next) {
  var resource = req.params.resource;
  // can fetch corrisponding controller using resource name
  var controller = controllers[resource];
  // since both controllers have identical functions you can just call find

  // user typed in a resource that's not valid
  if (controller == null) {
    res.json({
      confirmaion: "fail",
      message: "Invalid Resource Request: " + resource
    });
  }
  controller.find(req.query, function(err, results) {
    if (err) {
      res.json({
        confirmation: "fail",
        message: err
      });
      return;
    }
    res.json({
      confirmation: "success",
      results: results
    });
  });
});

router.get("/:resource/:id", function(req, res, next) {
  var resource = req.params.resource;
  var id = req.params.id;

  var controller = controllers[resource];
  if (controller == null) {
    res.json({
      confirmaion: "fail",
      message: "Invalid Resource Request: " + resource
    });
  }

  controller.findById(id, function(err, result) {
    if (err) {
      res.json({
        confirmation: "fail",
        message: "Not Found"
      });
      return;
    }
    res.json({
      confirmation: "success",
      result: result
    });
  });
});

router.post("/:resource", function(req, res, next) {
  var resource = req.params.resource;

  var controller = controllers[resource];
  if (controller == null) {
    res.json({
      confirmaion: "fail",
      message: "Invalid Resource Request: " + resource
    });
  }
  controller.create(req.body, function(err, result) {
    if (err) {
      res.json({
        confirmaion: "fail",
        message: err
      });
      return;
    }
    res.json({
      confirmation: "success",
      result: result
    });
  });
});

module.exports = router;
