const express = require('express');
const fetch = require('node-fetch');
const app = express();

const port = 4200
app.get("/activity", async function(request,response){
    const api_url = "http://www.boredapi.com/api/activity/";
    const fetch_response = await fetch(api_url);
    const jsonObj = await fetch_response.json();
    response.json(jsonObj);
});

app.get("/param/:activity", async function(request,response){
    const activity = request.params.activity;

    const api_url = `http://www.boredapi.com/api/activity?type=${activity}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
})

app.listen(port, function(){
    //Backticks are necessary
    console.log(`App listening on http://localhost:${port}`);
    //console.log("App listening at port: " + port );
});