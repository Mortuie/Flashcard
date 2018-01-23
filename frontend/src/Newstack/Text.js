import React, {Component} from 'react';
var Latex = require('react-latex');

export default (props) => <Latex>{props.data}</Latex>;