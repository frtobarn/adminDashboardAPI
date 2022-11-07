import { Request, Response, Router } from "express";
import { loginCtrl, registerCtrl, getUsers} from "../controllers/auth";

const router = Router();
router.get("/", getUsers)
router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export { router };
