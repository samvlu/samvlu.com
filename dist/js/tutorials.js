function onYouTubeIframeAPIReady(){playerOverview=new YT.Player("playerOverview",{videoId:"",events:{onReady:onPlayerOverviewReady,onStateChange:onPlayerStateChange},playerVars:{showinfo:0,rel:0}}),playerVideosSection=new YT.Player("playerVideosSection",{videoId:"",events:{onReady:onPlayerVideosSectionReady,onStateChange:onPlayerStateChange},playerVars:{showinfo:0,rel:0}})}function onPlayerOverviewReady(e){playerOverview.setPlaybackQuality("hd720"),e.target.playVideo()}function onPlayerStateChange(e){e.data==YT.PlayerState.BUFFERING&&e.target.setPlaybackQuality("hd720")}function onPlayerVideosSectionReady(e){playerVideosSection.setPlaybackQuality("hd720"),e.target.playVideo()}var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var playerOverview,playerVideosSection;$(document).ready(function(){var e=!1;$("#mobile-menu-btn",".intro").on("click",function(){return $(".mobile-nav").slideToggle(300,"linear"),e=e===!1?!0:!1,!1}),$(".video-overview").removeClass("hidden"),$(".video-overview").on("click",function(){return playerOverview.loadVideoById("gNnaCmyhjfQ"),$(".video-overview .play-button").remove(),$(".video-overview img").remove(),$("#playerOverview").removeClass("hidden"),!1}),$(".button-expand").on("click",function(){return $(".hidden-list").slideToggle(300,"linear"),$("table").removeClass("haze"),$(".button-expand").css("display","none"),!1}),$(window).resize(function(){$(window).width()>=642&&$(".mobile-nav").css("display","none")});var a=$(".pswp")[0],i=[];$(".project-grid").each(function(){var e=$(this),o=function(){var a=[];return e.find(".demo a").each(function(){var e=$(this).attr("href"),i=$(this).data("size").split("x"),o=i[0],t=i[1],n=$(this).data("title"),r={src:e,w:o,h:t,title:n};a.push(r)}),a},t=o();$.each(t,function(e,a){i[e]=new Image,i[e].src=a.src}),e.on("click",".demo",function(e){var i=$(this).index(".demo"),o={index:i,bgOpacity:1,showHideOpacity:!0,maxSpreadZoom:5,zoomEl:!1,fullscreenEl:!1,shareEl:!1,counterEl:!1,captionEl:!0,tapToToggleControls:!0,tapToClose:!1,history:!1},n=new PhotoSwipe(a,PhotoSwipeUI_Default,t,o);return n.init(),!1})}),$(".preview").on("click",function(){var e=$(this).data("link");return $(".video-lightbox").removeClass("hidden"),playerVideosSection.loadVideoById(e),!1}),$(".overlay").on("click",function(){$(".video-lightbox").addClass("hidden"),playerVideosSection.loadVideoById("")})});