import { Router } from "express"
import WordsCtrl from "./words.controller"

const router = new Router()

// associate put, delete, and get(id)
router.route("/").get(WordsCtrl.apiGetWords)

export default router

