const Sequilize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.sequelize.define(
    "tbl_tasks",
    {
        id: {
            type: Sequilize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        task_name: {
            type: Sequilize.STRING
        }
    },
    {
        timestamps: false
    }
)