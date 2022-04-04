const metric = require("./metric/setup");     
const express = require("express");
const app = express();

metric.insertMiddleware(app, option: { normalizePath: false });

    // Respond with "hello world" for requests that hit our root "/"
    app.get("/", function (req, res) {
     return res.send("Hello World123");
    });

    // listen to port 3000 by default
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is running");
    });

    module.exports = app;
metric.captureAllRoutes(app);
metric.setupMetricService();
