"use strict";
var data = new FormData();
data.append('foo', 'Hello World');
data.append('bar', 'Bonjour le monde');
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});
xhr.open('POST', 'http://mockbin.com/har');
xhr.send(data);
