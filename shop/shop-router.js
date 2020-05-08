const express = require("express")

const db = require("./schemes")

const router = express.Router()

router.get("/shop", (req, res) => {
    db.findProjects()
      .then(projects => {
        res.json(projects);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to get shops" });
      });
  });
  
  router.post("/shop", (req, res) => {
    db.addProject(req.body)
      .then(project => {
        res.status(200).json({ project });
      })
      .catch(error => {
        res.status(500).json({ error: "Couldn't add new shop" });
      });
  });
  
  router.get("/car", (req, res) => {
      db.findTasks()
        .then(cars => {
          res.status(200).json({ cars });
        })
        .catch(error => {
          res.status(500).json({ error: "Could not display list of cars" });
        });
    });
    
  router.post("/car", (req, res) => {
  db.addTask(req.body)
      .then(newCar => {
      res.status(200).json({ newCar });
      })
      .catch(error => {
      res.status(500).json({ error: "Could not create new car" });
      });
  });
  
  router.get("/tool", (req, res) => {
      db.findResources()
        .then(tools => {
            res.status(200).json({ tools });
        })
        .catch(err => {
          res.status(500).json({ message: "Failed to get tools" });
        });
    });
    
    router.post("/tool", (req, res) => {
      db.addResource(req.body)
        .then(newTool => {
          res.status(200).json({ newTool });
        })
        .catch(error => {
          res.status(500).json({ error: "Couldn't add new tools" });
        });
    });
  



module.exports = router