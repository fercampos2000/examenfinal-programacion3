"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//const express = require('express')
var app = (0, _express["default"])(); //iniciando servidor en el puerto 3000

app.listen(8000, function () {
  return console.log('SERVIDOR CORRIENDO EN EL PUERTO 3000');
});
//# sourceMappingURL=index.js.map

//codigo convertido con babel.js