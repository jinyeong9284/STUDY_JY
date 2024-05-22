/****** page-mainContent-subTextBox ******/
$('.subTextBox-item .subTextBox-item-title').on('click', (e) => {
  $(e.target).next('p').slideToggle().parent().siblings().find('p').slideUp();
  });



