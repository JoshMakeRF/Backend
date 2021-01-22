const {router} = require (`express`);
const router = router();


router.get(`/`, (req, res) => {
    res.json({
        ok: true,
        msg: "Recibido",
    });
});

module.exports = router;