const app_server = require('./api');
const express = require('express');

app_server();


express().use(exPouch).listen(5984, () => console.log('DevDbOn'));
