const express = require("express");
const app = express();

    // Respond with "hello world" for requests that hit our root "/"
    app.get("/", (req, res) =>{
     res.send("Hello World123");
     console.log('api hit')
    });

    // listen to port 3000 by default
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is running");
    });

    module.exports = app;
