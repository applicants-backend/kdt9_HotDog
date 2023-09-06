const express = require("express");
const router = express.Router();

router.route("/")
    .get((req, res) => {
        res.render("boards")
    });

router.route("/sns")
    .get((req, res) => {
        res.send("GET /boards/sns");
    })
    .post((req, res) => {
        res.send("POST /boards/sns");
    });

router.route("/qna")
    .get((req, res) => {
        res.render("qna");
    })
    .post((req, res) => {
        res.send("qna");
    })
    
router.route("/sns/comment")
    .post((req, res) => {
        res.send("POST /boards/sns/comment");
    })
    .put((req, res) => {
        res.send("PUT /boards/sns/comment");
    })
    .delete((req, res) => {
        res.send("DELETE /boards/sns/comment");
    });

router.route("/qna/comment")
    .post((req, res) => {
        res.send("POST /boards/qna/comment");
    })
    .put((req, res) => {
        res.send("PUT /boards/qna/comment");
    })
    .delete((req, res) => {
        res.send("DELETE /boards/qna/comment");
    });

router.get('/sns/:id', (req, res) => {
    console.log('sns 매개변수');
});

router.get('/qna/:id', (req, res) => {
    console.log('qna 매개변수');
});

module.exports = router;