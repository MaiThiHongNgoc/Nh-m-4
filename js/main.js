$('.sanphambanchay').slick({
    sanphambanchayMode: true,
    sanphambanchayPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          sanphambanchayMode: true,
          sanphambanchayPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          sanphambanchayMode: true,
          sanphambanchayPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });