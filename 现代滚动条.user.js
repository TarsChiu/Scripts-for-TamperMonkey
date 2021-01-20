// ==UserScript==
// @name:cn        现代滚动条
// @name:en        Nice ScrollBar
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const sty = `
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}
::-webkit-scrollbar
{
	width: 12px;
	background-color: #F5F5F5;
}
::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}

`
GM_addStyle(sty)
})();