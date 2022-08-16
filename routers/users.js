import express from "express";
import db from "../config/config.js";
import Users from "../models/User.js";
import bodyParser from "body-parser";
const router = express.Router();
router.use(bodyParser.json());
router.get('/', (req, res) => {
    Users.findAll()
        .then(users => {
            res.json(users);
        })
        .catch(error => console.log(error));
});
//getting one user
router.get('/:id', (req, res) => {
    Users.findByPk(parseInt(req.params.id))
        .then((users) => {
            if (!users) {
                res.status(400).send("User not found pleas")
            } else {
                res.json(users);
            }
        })
        .catch(error => console.log(error));
});

//creating a user
router.post('/', (req, res) => {
    const { name, password, email } = req.body;
    Users.create({
        name,
        password,
        email
    })
        .then(user => res.send('users created sucessifuly'))
        .catch(err => console.log(err))
})
//Updating a user
router.put('/:id', (req, res) => {
    const { name, password, email } = req.body;
    Users.findByPk(parseInt(req.params.id))
        .then((user) => {
            user.update({
                name: name || user.name,
                password: password || user.password,
                email: email || user.email
            })
                .then((updateUser) => {
                    res.status(200).send("User updated successifully");
                }).catch(err => res.status(404).send("User not found"))

        })
        .catch(err => res.status(404).send("User not found"));

});

//deleting a user
router.delete("/:id", (req, res) => {
    Users.findByPk(parseInt(req.params.id))
        .then((user) => {
            if (!user) {
                res.status(400).send("User not found pleas")
            } else {
                user.destroy()
                    .then((deletUser) => res.status(200).send("user deleted successifully"))
                    .catch(err => res.status(400).send(err))
            }
        })
        .catch(err => res.status(400).send(err))
})


export default router;
