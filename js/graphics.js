$(document).ready(function(){var t=$(".pswp")[0],n=[];$(".graphics").each(function(){var a,e=$(this),i=(a=[],e.find(".grid-item:not(.video) a").each(function(){var e=$(this).attr("href"),o=$(this).data("size").split("x"),i={src:e,w:o[0],h:o[1],title:$(this).data("title")};a.push(i)}),a);$.each(i,function(e,o){n[e]=new Image,n[e].src=o.src}),e.on("click",".photo",function(e){e.preventDefault();var o=$(this).index(".photo");new PhotoSwipe(t,PhotoSwipeUI_Default,i,{index:o,bgOpacity:.85,showHideOpacity:!0,maxSpreadZoom:5,zoomEl:!1,fullscreenEl:!1,shareEl:!1,counterEl:!1,captionEl:!0,tapToToggleControls:!0,tapToClose:!1,history:!1}).init()})});var l=$(".pswp")[0],r=[];$(".graphics-mobile").each(function(){var a,e=$(this),i=(a=[],e.find(".photo-mobile a").each(function(){var e=$(this).attr("href"),o=$(this).data("size").split("x"),i={src:e,w:o[0],h:o[1],title:$(this).data("title")};a.push(i)}),a);$.each(i,function(e,o){r[e]=new Image,r[e].src=o.src}),e.on("click",".photo-mobile",function(e){e.preventDefault();var o=$(this).index(".photo-mobile");new PhotoSwipe(l,PhotoSwipeUI_Default,i,{index:o,bgOpacity:.85,showHideOpacity:!0,maxSpreadZoom:5,zoomEl:!1,fullscreenEl:!1,shareEl:!1,counterEl:!1,captionEl:!0,tapToToggleControls:!0,history:!1}).init()})}),$(".graphics").each(function(){function n(){$(".overlay").remove(),$(".overlay-vimeo").remove(),r=!1}var o,l="",r=!1,e=$(this),i=(o=[],e.find(".video").each(function(){var e={link:$(this).data("link")};o.push(e)}),o);$(document).on("keyup",function(e){!0===r&&27==e.keyCode&&n()}),e.on("click",".video",function(e){e.preventDefault();var o=$(this).index(".video");l=i[o].link,function(){r=!0;var e=$("<div>",{id:"overlay",class:"overlay"});$("body").append(e);var o=$("<div>",{id:"overlay-vimeo",class:"overlay-vimeo"});$("body").append(o);var i=$("<div>",{class:"vimeo"});$(".overlay-vimeo").append(i);var a=$("<iframe>",{id:"iframe",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",src:l});$(".vimeo").append(a);var t=$("<button>",{class:"vimeo-close-button",title:"Close (Esc)"});$(".overlay").append(t),$(".overlay").on("click",function(){n()})}()})}),$(".graphics-mobile").each(function(){function n(){$(".overlay").remove(),$(".overlay-vimeo").remove(),r=!1}var o,l="",r=!1,e=$(this),i=(o=[],e.find(".video-mobile").each(function(){var e={link:$(this).data("link")};o.push(e)}),o);$(document).on("keyup",function(e){!0===r&&27==e.keyCode&&n()}),e.on("click",".video-mobile",function(e){e.preventDefault();var o=$(this).index(".video-mobile");l=i[o].link,function(){r=!0;var e=$("<div>",{id:"overlay",class:"overlay"});$("body").append(e);var o=$("<div>",{id:"overlay-vimeo",class:"overlay-vimeo"});$("body").append(o);var i=$("<div>",{class:"vimeo"});$(".overlay-vimeo").append(i);var a=$("<iframe>",{id:"iframe",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",src:l});$(".vimeo").append(a);var t=$("<button>",{class:"vimeo-close-button",title:"Close (Esc)"});$(".overlay").append(t),$(".overlay").on("click",function(){n()})}()})})});