import express from "express";
import othersRoute from "./othersRoute.js";

import a from "./middleWare/a.js";

export default function configRoutes(app) {

    app.use(a); //if middleWare

    app.use('/other', othersRoute);

    app.use((req, res) => {
        res.status(404).json({ msg: 'Route not found' })
    })

}