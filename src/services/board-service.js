const pool = require('../../middleware/pool')
const BoardQuery = require('../queries/board-query')

exports.getBoard = async () => {
    try {
        let list = await pool.query(BoardQuery.getBoard)
        return list[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

exports.insertBoard = async (req) => {
    try {
        var title = req.body.title;
        var author = req.body.author;
        var content = req.body.content;
        var datas = [title,author,content];

        let list = await pool.query(BoardQuery.insertBoard, datas)
        return list
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

exports.readBoard = async () => {
    try {
        let list = await pool.query(BoardQuery.readBoard, [id])
        return list[0]
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

exports.updateBoard = async (req) => {
    try {
        var id = req.body.id;
        var title = req.body.title;
        var author = req.body.author;
        var content = req.body.content;
        var datas = [id,title,author,content, id];

        let list = await pool.query(BoardQuery.updateBoard, datas)
        return list
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

exports.deleteBoard = async (req) => {
    try {
        var id = req.body.id;
        console.log(id);
        let list = await pool.query(BoardQuery.deleteBoard, [id])
        return list
    } catch (err) {
        console.log(err);
        throw Error(err)
    }
}

// 생략...

// exports.deleteComment = async (boardId, commentId) => {
//     let conn = await pool.getConnection()
//     try {
//         await conn.beginTransaction()

//         let del = await conn.query(BoardQuery.deleteComment, [commentId])
//         if (del[0].affectedRows == 1) {
//             let upd = await conn.query(BoardQuery.minusCommentCnt, [boardId])
//         }
//         await conn.commit()

//         return del[0]
//     } catch (err) {
//         conn.rollback()
//         console.log(err)
//         throw Error(err)
//     } finally {
//         conn.release()
//     }
// }