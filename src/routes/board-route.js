var express = require('express')
var router = express.Router()
const BoardController = require('../controllers/board-controller')
 

router.get('/list', BoardController.getBoard)
// router.get('/', BoardController.getBoards)
router.get('/write', BoardController.insertBoard)
router.post('/write', BoardController.insertBoards)
router.get('/read/:id', BoardController.readBoard)
router.post('/update', BoardController.updateBoard)
router.post('/delete', BoardController.deleteBoard)
// router.patch('/:boardId', BoardController.updateBoard)
// router.delete('/:boardId', BoardController.deleteBoard)

module.exports = router;