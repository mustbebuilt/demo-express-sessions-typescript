import { Request, Response } from "express";


function getLogin(req: Request, res: Response): void {
    res.render("login");
}

function postLogin(req: Request, res: Response): void {
    let username = req.body.username;
    let password = req.body.password;

    if (username === "admin" && password === "letmein") {
        console.log("login success");

        // req.session.login = true; // Set session value
        req.session.login = true; // Type assertion to any
        console.log(req.session);
        res.redirect("/secureplace");
    } else {
        res.redirect("/login");
    }
}

function logout(req: Request, res: Response): void {
    req.session.destroy(function (err) {
        res.redirect("/login");
    });
}

export { getLogin, postLogin, logout };
