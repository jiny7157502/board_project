const BoardService = require('../services/board-service')

exports.getBoard = async (req, res, next) => {
    try {
        let rows = await BoardService.getBoard()
        return res.render('list', {title : '게시판 전체 글 조회', rows: rows });
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.insertBoard = async (req, res, next) => {
    try {
        return res.render('write', {title : "게시판 글 쓰기"});
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.insertBoards = async (req, res, next) => {
    try {
        BoardService.insertBoard(req)
        return res.redirect('list');
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.readBoard = async (req, res, next) => {
    try {
        id = req.params.id;
        let rows = await BoardService.readBoard([id])
        return res.render('read', {title : '글 상세', rows: rows[0] });
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.updateBoard = async (req, res, next) => {
    try {
        id = req.body.id;
        BoardService.updateBoard(req)
        return res.redirect('/board/read/' + id);
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.deleteBoard = async (req, res, next) => {
    try {
        console.log("controller pass");
        id = req.body.id;
        console.log(id);
        BoardService.deleteBoard(req)
        
        return res.redirect('list')
    } catch (err) {
        return res.status(500).json(err)
    }
}
// // 생략...

// exports.deleteComment = async (req, res, next) => {
//     let { boardId, commentId } = req.params
//     try {
//         let del = await BoardService.deleteComment(boardId, commentId)
//         return res.json(del)
//     } catch (err) {
//         return res.status(500).json(err)
//     }
// }