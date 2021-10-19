import express from "express";
import serverConfig from "./serverConfig";
import resources from "../../resources";
import { Route } from "../../resources/resource";

function init() {
    const httpServer = express();

    resources.forEach(({ url, method, handler }: Route) => {
        httpServer[method](url, handler);
    });
    
    httpServer.listen(serverConfig.port, () => {
        console.log(`api running at port: ${serverConfig.port}`);
    });
}

const serverService = {
    init
}

export default serverService

