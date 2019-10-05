import React from 'react';
import Head from 'next/head';
import LeftArea from '../components/LeftArea';
import HeaderMenu from '../components/HeaderMenu';
import MainBody from '../components/MainBody';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>

      <link rel="stylesheet" href="../static/vendors/jquery-ui/jquery-ui.css" />
      <link rel="stylesheet" href="../static/css/bootstrap.css" />
      <link rel="stylesheet" href="../static/vendors/linericon/style.css" />
      <link rel="stylesheet" href="../static/css/font-awesome.min.css" />
      <link rel="stylesheet" href="../static/vendors/owl-carousel/owl.carousel.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" />
      <link rel="stylesheet" href="../static/vendors/nice-select/css/nice-select.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.3/aos.css" />
      <link rel="stylesheet" href="../static/vendors/popup/magnific-popup.css" />
      <link rel="stylesheet" href="../static/vendors/swiper/css/swiper.min.css" />
      <link rel="stylesheet" href="../static/vendors/scroll/jquery.mCustomScrollbar.css" />
      <link rel="stylesheet" href="../static/css/style.css" />
      <link rel="stylesheet" href="../static/css/responsive.css" />

    </Head>

    <div>

      <LeftArea />

      {/* <NavBar /> */}

      {/* <RightSide /> */}

      <HeaderMenu />

      <MainBody />
    </div>

    <script src="../static/js/jquery-3.2.1.min.js"></script>
    <script src="../static/vendors/jquery-ui/jquery-ui.js"></script>
    <script src="../static/js/popper.js"></script>
    <script src="../static/js/bootstrap.min.js"></script>
    <script src="../static/js/stellar.js"></script>
    <script src="../static/vendors/nice-select/js/jquery.nice-select.min.js"></script>
    <script src="../static/vendors/isotope/imagesloaded.pkgd.min.js"></script>
    <script src="../static/vendors/isotope/isotope-min.js"></script>
    <script src="../static/vendors/owl-carousel/owl.carousel.min.js"></script>
    <script src="../static/js/owl-carousel-thumb.min.js"></script>
    <script src="../static/js/jquery.ajaxchimp.min.js"></script>
    <script src="../static/vendors/counter-up/jquery.waypoints.min.js"></script>
    <script src="../static/vendors/counter-up/jquery.counterup.js"></script>
    <script src="../static/js/mail-script.js"></script>
    <script src="../static/vendors/popup/jquery.magnific-popup.min.js"></script>
    <script src="../static/vendors/swiper/js/swiper.min.js"></script>
    <script src="../static/vendors/scroll/jquery.mCustomScrollbar.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.3/aos.js"></script>
    <script src="../static/js/theme.js"></script>


  </div>
)

export default Home
