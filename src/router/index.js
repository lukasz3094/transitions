import { createRouter, createWebHistory } from "vue-router"
import SimpleDisplay from "../components/SimpleDisplay"
import ListMaker from "../components/ListMaker"
import Numbers from "../components/TheNumbers"

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/display", component: SimpleDisplay },
        { path: "/list", component: ListMaker },
        { path: "/numbers", component: Numbers },
        { path: "/:catchAll(.*)", redirect: "/display" }
    ]
})