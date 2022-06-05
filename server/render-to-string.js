import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { App } from "../client/index.js";

export async function renderToString({ url }) {
    const pageTemplate = fs.readFileSync(path.resolve("templates/index.html"), {
        encoding: "utf-8"
    });

    const element = React.createElement(StaticRouter, { location: url }, React.createElement(App))


    let appHtml = ReactDOMServer.renderToString(element);

    let htmlString = pageTemplate.replace("<!-- SSR -->", appHtml);

    return htmlString;
}
