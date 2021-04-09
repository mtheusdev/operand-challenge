const express = require("express")
const app = express();
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post('/user', UserController.create)
router.get('/user', UserController.index)

module.exports = router;