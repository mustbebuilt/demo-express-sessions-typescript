import express, { Request, Response, Router } from "express";
import * as controllers from "../controllers/controllers";

const router: Router = express.Router();

router.get("/secureplace", (req: Request, res: Response) => {
    if (req.session.login) {
        res.render("secureplace", { title: "Secure Place" });
    } else {
        res.redirect("/login");
    }
});
router.get("/login", controllers.getLogin);
router.post("/login", controllers.postLogin);
router.get("/logout", controllers.logout);

export default router;