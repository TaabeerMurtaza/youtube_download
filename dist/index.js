"use strict";

var express = require('express');
var cors = require('cors');
var path = require('path');
var ytdl = require('ytdl-core');
var app = express();
app.use(cors());
app.use(express["static"](path.join(__dirname, 'public')));
app.listen(4000, function () {
  console.log('Server Works !!! At port 4000');
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/download', function (req, res) {
  var URL = req.query.URL;
  res.header('Content-Disposition', 'attachment; filename="video.mp4"');
  ytdl(URL, {
    format: 'mp4'
  }).pipe(res);
});