(function(){var t;t=function(){var t,n,e,o,i,a,r;return n='[data-role="popup"]',o=$(n),a=$('[data-role="popup_open"]'),i=$('[data-role="popup_close"]'),r='[data-role="popup_window"]',$(document).keyup(function(e){return 27===e.keyCode&&$(".open"+n).length>0?t(".open"+n):void 0}),e=function(e){return $(".open"+n).length>0&&t($(".open"+n)),window.location.hash=e.replace("#",""),$(e).css("display","block"),$(e).addClass("open"),$("body").css("overflow","hidden")},t=function(t){return history.pushState("",document.title,window.location.pathname),$(t).css("display","none"),$(t).removeClass("open"),$("body").css("overflow","auto")},$("body").click(function(){return $(".open"+n).length>0?t(".open"+n):void 0}),$(o).each(function(){var t,n;return n=$(this).attr("id"),t=window.location.hash.replace("#",""),""!==t&&t===n&&e("#"+n),$(this).find(r).click(function(t){return t.stopPropagation()})}),$(a).each(function(){return $(this).click(function(){var t;return t=$(this).attr("data-target"),$(t).length>0&&e(t),!1})}),$(i).each(function(){return $(this).click(function(){var e;return e=$(this).parents(n),$(e).length>0&&t(e),!1})})},t(),$(".welcome_page .carusel").owlCarousel({singleItem:!0}),$(".uiswitch").click(function(){return $(this).toggleClass("active")}),$('[href="#toggle_menu"]').click(function(){return $("body").toggleClass("ovh"),$("aside").toggleClass("active"),!1})}).call(this);