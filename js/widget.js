!function(a,b){"use strict";function c(){if(!f){f=!0;for(var a=0;a<e.length;a++)e[a].fn.call(window,e[a].ctx);e=[]}}function d(){"complete"===document.readyState&&c()}a=a||"docReady",b=b||window;var e=[],f=!1,g=!1;b[a]=function(a,b){if(f)return void setTimeout(function(){a(b)},1);e.push({fn:a,ctx:b}),"complete"===document.readyState?setTimeout(c,1):g||(document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):(document.attachEvent("onreadystatechange",d),window.attachEvent("onload",c)),g=!0)}}("docReady",window),docReady(function(){"use strict";function a(a){a.preventDefault();var b=document.createElement("div"),c=document.createAttribute("style");c.value="overflow:auto;-webkit-overflow-scrolling:touch;position:fixed;width:100%;height:100%;top:0px;left:0px;z-index:99999;",b.setAttributeNode(c);var f=document.createElement("iframe");f.id="terminapp-overlay","multiple"!==d&&"flexible"!==d||(j=a.target.getAttribute("data-id")),f.src="//"+g+"/"+j+"?lang="+e,c=document.createAttribute("style"),c.value="width:100%;height:100%;overflow:auto;",f.setAttributeNode(c),c=document.createAttribute("allowtransparency"),c.value=!0,f.setAttributeNode(c),f.frameBorder=0,b.insertBefore(f,b.firstChild),document.body.insertBefore(b,document.body.lastChild)}function b(a){if("closeIframe"===a.data){var b=document.getElementById("terminapp-overlay").parentNode;b.parentNode.removeChild(b)}}var c=document.getElementById("terminapp")||document.getElementById("timify");if(!c)throw new Error('Please add id attribute with value "terminapp" or "timify" to the widget integration code.');if(!0===(document.all&&!window.atob))return!0;if(void 0!==window.servicesExist&&!1===window.servicesExist)return!0;var d=c.getAttribute("data-position"),e=c.getAttribute("data-lang"),f=document.createAttribute("style"),g="widget.timify.com";switch(e&&(e=e.toLowerCase()),e){case"ee":case"et":e="ee";break;case"de":e="de";break;case"es":e="es";break;case"fr":e="fr";break;case"hu":e="hu";break;case"it":e="it";break;case"nl":e="nl";break;case"ru":e="ru";break;case"zh":e="zh";break;case"pl":e="pl";break;case"ru":e="ru";break;case"ph":e="en";break;default:e="en"}var h=!0,i=document.createElement("div");switch(i.id="terminapp-button",f.value="position:fixed;z-index:9999;cursor:pointer;",d){case"bottom":f.value+="background: transparent url('//"+g+"/assets/images/terminapp-horizontal-button_"+e+".png');",f.value+="height:50px; width:210px;",f.value+="top:100%; left:50%;",f.value+="margin-top:-50px; margin-left:-105px;",f.value+="border-radius:5px 5px 0 0;-moz-border-radius:5px 5px 0 0;-webkit-border-radius:5px 5px 0 0;",i.setAttributeNode(f);break;case"right":f.value+="background: transparent url('//"+g+"/assets/images/terminapp-button_"+e+".jpg');",f.value+="height:210px; width:50px;",f.value+="top:50%; left:-50px;",f.value+="margin-top:-105px; margin-left:100%; float:right;",f.value+="border-radius:5px 0 0 5px;-moz-border-radius:5px 0 0 5px;-webkit-border-radius:5px 0 0 5px;",i.setAttributeNode(f);break;case"left":f.value+="background: transparent url('//"+g+"/assets/images/terminapp-button_"+e+".jpg');",f.value+="height:210px; width:50px;",f.value+="top:50%; left:0;",f.value+="margin-top:-105px;",i.setAttributeNode(f);break;case"inline":i=document.getElementById("terminapp-button"),f.value="cursor:pointer;",f.value+="background: transparent url('//"+g+"/assets/images/terminapp-horizontal-button_"+e+".png');",f.value+="height:50px; width:210px;",f.value+="border-radius:5px 5px 0 0;-moz-border-radius:5px 5px 0 0;-webkit-border-radius:5px 5px 0 0;",i.setAttributeNode(f),h=!1;break;case"flexible":case"multiple":break;default:i=document.getElementById("terminapp-button"),h=!1}var j=c.getAttribute("data-id");if(!j&&"multiple"!==d&&"flexible"!==d)throw new Error("Please add data-id attribute to the widget.terminapp.com integration script");if(j&&i)i.addEventListener?i.addEventListener("click",a):i.attachEvent("onclick",a),h&&document.body.insertBefore(i,document.body.lastChild);else for(var k=document.getElementsByClassName("timify-button"),l=0;l<k.length;l++)i.addEventListener?k[l].addEventListener("click",a,!1):k[l].attachEvent("onclick",a);window.addEventListener?window.addEventListener("message",b,!1):window.attachEvent("onmessage",b)});