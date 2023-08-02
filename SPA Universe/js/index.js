import { Router } from "./router.js";

const router = new Router();
router.add('/', "/pages/home.html");
router.add('/ouniverso', "/pages/ouniverso.html");
router.add('/exploracao', "/pages/exploracao.html");
router.add(404, "/pages/404.html");
router.add('/style.css', "/style.css");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();



