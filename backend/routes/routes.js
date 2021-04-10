const express = require("express")
const app = express();
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post('/user', UserController.create)
router.get('/user', UserController.index)
router.get('/user/:id', UserController.findUser)
router.delete('/user/:id', UserController.remove)
router.put('/user', UserController.edit)

module.exports = router;