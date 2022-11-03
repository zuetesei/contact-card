import "./form";
import "./submit";
import "../css/index.css";
import { Tooltip, Toast, Popover } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { initdb, getDb, postDb } from "./database";

import Logo from "../images/logo.png";
import Bear from "../images/bear.png";
import Dog from "../images/dog.png";

window.addEventListener('load', function () {
    initdb();
    // temporarily placing getDb and postDb here for testing
    getDb();
    postDb("Zue", "zuleika@gmail.com", 920808309, "Bear");
    getDb();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});