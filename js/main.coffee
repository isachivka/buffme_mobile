$(".welcome_page .carusel").owlCarousel({
  singleItem:true
})
$('.uiswitch').click ->
  $(this).toggleClass 'active'
$('[href="#toggle_menu"]').click ->
  $('aside').toggleClass 'active'
  false