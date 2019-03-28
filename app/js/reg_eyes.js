// define([
//     'require',
//     'dependency'
// ], function(require, factory) {
//     'use strict';
    
// });
define(function() {
    let eyes
    return {
        init () {
            eyes = document.querySelectorAll('.icon2')
            // console.log(eyes)
            this.event();
        },
        event () {
            const self = this;
            for(let i = 0; i < eyes.length; i ++) {
                let input = eyes[i].previousElementSibling
                // console.log(input)
                eyes[i].onclick = function() {
                    const close = 'icon2 icon-eye-close',
                    open = 'icon2 icon-eye-open';
                    if(eyes[i].className == close ) {
                        eyes[i].className = open;
                        input.type = 'text'
                    }
                    else if(eyes[i].className == open) {
                        eyes[i].className = close;
                        input.type = 'password'
                    } 
                }
            }
        }
    }
})