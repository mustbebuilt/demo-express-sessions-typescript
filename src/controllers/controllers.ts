import { Request, Response } from "express";

const getLogin = (req: Request, res: Response): void => {
    res.render("login");
};

const postLogin = (req: Request, res: Response): void => {
    let username = req.body.username;
    let password = req.body.password;

    if (username === "admin" && password === "letmein") {
        console.log("login success");
        (req.session as any).login = true; // Type assertion to any
        console.log(req.session);
        res.redirect("/secureplace");
    } else {
        res.redirect("/login");
    }
};

const logout = (req: Request, res: Response): void => {
    req.session.destroy(function (err) {
        res.redirect("/login");
    });
};

export { getLogin, postLogin, logout };
