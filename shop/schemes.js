const db = require("../data/config")

module.exports = {
    findProjects,
    addProject,
    findTasks,
    addTask,
    findResources,
    addResource
}

function findProjects() {
    return db("car_shop")
}

function addProject(shop) {
    return db("car_shop").insert(shop)
}

function findTasks() {
    return db("cars")
}

function addTask(car) {
    return db("cars").insert(car)
}

function findResources() {
    return db("tools")
}

function addResource(tool) {
    return db("tools").insert(tool)
}