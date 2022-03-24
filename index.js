const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/angl'));
app.get('/*', function(req,res)

{res.sendFile(path.join(__dirname+'/dist/angl/index.html'));});

app.listen(process.env.PORT || 8080);