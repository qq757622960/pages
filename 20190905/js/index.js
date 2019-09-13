/** 
 * @Author: YISHI 
 * @Date: 2019-09-05 11:56:46 
 * @Desc: 首页 
 */

;(function () {  

    var YISHI = {};

    YISHI.$$ = function (selector, context) {
        context = context || document;
        var elements = context.querySelectorAll(selector);

        return Array.prototype.slice.apply(elements);
    };

    YISHI.$$('.circular').forEach(function (el) {

        var NS = 'http://www.w3.org/2000/svg';
        var xlinkNS = 'http://www.w3.org/1999/xlink';
        var svg = document.createElementNS(NS, 'svg');
        var circle = document.createElementNS(NS, 'path');
        var text = document.createElementNS(NS, 'text');
        var textPath = document.createElementNS(NS, 'textPath');
        svg.setAttribute('viewBox', '0 0 100 100');

        circle.setAttribute("d", "M0,50 a50,50 0 1,1 0,1z");
        circle.setAttribute("id", "circle");

        textPath.textContent = el.textContent;
        textPath.setAttributeNS(xlinkNS, "xlink:href", "#circle");
        text.appendChild(textPath);
        svg.appendChild(circle);
        svg.appendChild(text);
        el.textContent = '';
        el.appendChild(svg);

    });
    
})();
