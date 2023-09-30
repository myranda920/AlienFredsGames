import MainSlider from "@/src/components/sliders/MainSlider";
// import TestimonialsCarousel from "@/src/components/sliders/TestimonialsCarousel";
import Layouts from "@/src/layouts/Layouts";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = () => {
  return (
    <Layouts>
      {/* Section Started Slider */}
      <MainSlider />
      {/* Section About */}
      <section className="section kf-about section-bg">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  About Us
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Game &amp; Rentals <br />
                  and Heaters
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                At Alien Fred’s Games, we started with a simple love for gathering friends and family for game nights, which evolved into a game rental service. We are known as the go-to source for games among our friends and relatives, and now we extend the unique and memorable experience to the wider community. 
                </p>
                <br />
                <p>
                Our mission is to create memories by offering a diverse range of high-quality games for various occasions. We offer unique custom options that you won’t find elsewhere. We feature a wide variety of games from the popular classics to latest trending games. Our collection is constantly expanding. 
                </p>
              </div>
              <div
                className="kf-about-quote element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/afgcharacter.JPEG" alt="image" />
                <div>
                Customer satisfaction is our top priority, and we strive to make the rental experience seamless with flexible rental periods, competitive pricing, and convenient delivery and pickup services. 
                </div>
              </div>
              <p>
              We understand the importance of social connections and the power of laughter and enjoyment. Let us make your next gathering an unforgettable one. Embrace the possibilities and laughter with Alien Fred’s Games, we promise to abduct boredom while delivering the fun to you and your guests.
              </p>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7">
              <div
                className="kf-about-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/aboutimage.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Services */}
      {/* <section className="section kf-services section-bg">
        <div className="container">
          <div className="kf-services-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="menu-restaurant">
                    <img src="images/service1.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-utensils" />
                  </div>
                  <h5 className="name">Restaurant Menu</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="menu-coffee">
                    <img src="images/service2.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-coffee" />
                  </div>
                  <h5 className="name">Coffee Menu</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="services">
                    <img src="images/service3.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-glass-cheers" />
                  </div>
                  <h5 className="name">Food Services</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section Menu */}
      <section
        className="section kf-menu kf-parallax"
        style={{ backgroundImage: "white" }}
      >
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Services & Pricing
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Game Packages
            </h3>
          </div>
          <div
            className="kf-menu-items"
            style={{ backgroundColor: "black" }}
          >
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/connect4.jpg" className="has-popup-image">
                      <img src="images/connect4.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Connect 4 / Jumbo 4 in a Row</h5>
                    <div className="subname">
                      
                    </div>
                    <div className="price">$55</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/IMG_2693.png" className="has-popup-image">
                      <img src="images/afgcharacter.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Pro-Size Cornhole</h5>
                    <div className="subname">
                      
                    </div>
                    <div className="price">$55</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/afgcharacter.png" className="has-popup-image">
                      <img src="images/afgcharacter.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Jumbo Jenga</h5>
                    <div className="subname">
                      
                    </div>
                    <div className="price">$60</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu4.jpg" className="has-popup-image">
                      <img src="images/afgcharacter.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Jumbo Tic-Tac-Toe</h5>
                    <div className="subname">
                      
                    </div>
                    <div className="price">$55</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  <div className="image kf-image-hover">
                    <a href="images/menu5.jpg" className="has-popup-image">
                      <img src="images/afgcharacter.jpg" alt="image" />
                    </a>
                  </div>
                  <div className="desc">
                    <h5 className="name">Jumbo Beer-Pong</h5>
                    <div className="subname">
                      
                    </div>
                    <div className="price">$125</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div
                  className="kf-menu-item element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  {/* <div className="image kf-image-hover">
                    <a href="images/menu6.jpg" className="has-popup-image">
                      <img src="images/menu6.jpg" alt="image" />
                    </a>
                  </div> */}
                  {/* <div className="desc">
                    <h5 className="name">Milk Cream Coffee</h5>
                    <div className="subname">
                      2/3 espresso, 1/3 streamed milk
                    </div>
                    <div className="price">$7.5</div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Choose */}
      <section className="section kf-choose section-bg">
        <div className="container">
          <div className="kf-parallax-icon pi-1" data-jarallax-element={-60}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon1.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-2" data-jarallax-element={-80}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon2.png)" }}
            />
          </div>
          <div className="kf-parallax-icon pi-3" data-jarallax-element={-40}>
            <div
              className="p-icon"
              style={{ backgroundImage: "url(images/parallax_icon3.png)" }}
            />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div
                className="kf-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/packagedeals.jpg" alt="image" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 offset-lg-1 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Current Package Deals
                </h3>
              </div>
              {/* <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                  Sed ut perspiciatis unde omnis iste natus error voluptate
                  accusantium doloremque laudantium, totam rem aperiam eaque
                  ipsa quae abillo inventore veritatis
                </p>
              </div> */}
              <div className="kf-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/afgcharacter.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Bronze Package</h5>
                      <div className="subname">
                      Get three games for just $155. (Excluding Jumbo Beer-Pong)
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/afgcharacter.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Silver Package</h5>
                      <div className="subname">
                      Get four games for only $195. (Excluding Jumbo Beer-Pong)
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/afgcharacter.jpg" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Gold Package</h5>
                      <div className="subname">
                      Get ALL five games for only $295.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="about"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>Contact us!</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

            {/* Section Numbers-2 */}
            <section className="section kf-numbers-2 section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              🛸 Add-Ons 🛸 
            </h3>
          </div>
          <div className="kf-numbers-items-2 row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-fire" />
                </div>
                <div className="desc">
                  <h5 className="name">Patio Heaters</h5>
                  {/* <div className="subname">Patio Heaters</div> */}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-tv" />
                </div>
                <div className="desc">
                  <h5 className="name">Jumbo Monitor & Projector</h5>
                  {/* <div className="subname">Sed ut perspiciatis unde</div> */}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-times" />
                </div>
                <div className="desc">
                  <h5 className="name">Plastic Axe Throwing Game</h5>
                  {/* <div className="subname">Sed ut perspiciatis unde</div> */}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-arrows-alt-v" />
                </div>
                <div className="desc">
                  <h5 className="name">Jumbo Serpiente y Escalera</h5>
                  {/* <div className="subname">Sed ut perspiciatis unde</div> */}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-camera" />
                </div>
                <div className="desc">
                  <h5 className="name">Photography (Organized Events)</h5>
                  {/* <div className="subname">Sed ut perspiciatis unde</div> */}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-glass-cheers" />
                </div>
                <div className="desc">
                  <h5 className="name">Bartender</h5>
                  {/* <div className="subname">Sed ut perspiciatis unde</div> */}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-toilet-paper" />
                </div>
                <div className="desc">
                  <h5 className="name">Luxury Bathrooms</h5>
                  {/* <div className="subname">Sed ut perspiciatis unde</div> */}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-users" />
                </div>
                <div className="desc">
                  <h5 className="name">Balloon Gardens</h5>
                  {/* <div className="subname">Sed ut perspiciatis unde</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* Section About-2 */}
        <section className="section kf-choose kf-choose-2">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 align-self-center">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Delivery, Set-up, Breakdown & Pick-Up
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  We offer convenient delivery and setup
                </h3>
              </div>
              <div
                className="kf-text element-anim-1 scroll-animate"
                data-animate="active"
              >
                <p>
                Services, ensuring that the jumbo games are placed in your desired location and set-up for immediate enjoyment. Our team will handle the transportation, installation and arrangement of the games, allowing you to focus on other aspects of your event.
                </p>
              </div>
              <div className="kf-choose-list">
                <ul>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/afgcharacter.JPG" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Delivery</h5>
                      <div className="subname">
                      Currently only delivering within a 15 mile radius from zip code 91345 (Mission Hills) 
                      </div>
                    </div>
                  </li>
                  <li
                    className="element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <div className="icon">
                      <img src="images/afgcharacter.JPG" alt="image" />
                    </div>
                    <div className="desc">
                      <h5 className="name">Additional Details</h5>
                      <div className="subname">
                      PLEASE NOTE: a minimum of 2 games must be rented. 
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                href="menu-coffee"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>Contact Us!</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <div
                className="kf-choose-image element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img src="images/about3.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section Numbers-2 */}
      {/* Section Grid Carousel */}
      <section className="section kf-grid-carousel">
        <div className="container">
          <Swiper {...sliderProps.kfGridCarousel} className="swiper-container">
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/people1.jpg" className="has-popup-image">
                    <img src="images/people1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name"></h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/people2.jpg" className="has-popup-image">
                    <img src="images/people2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name"></h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/people3.jpg" className="has-popup-image">
                    <img src="images/people3.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name"></h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal5.jpg" className="has-popup-image">
                    <img src="images/grid_gal5.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Image</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal1.jpg" className="has-popup-image">
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Image</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal2.jpg" className="has-popup-image">
                    <img src="images/grid_gal2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Image2</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal3.jpg" className="has-popup-image">
                    <img src="images/grid_gal3.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Image</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal4.jpg" className="has-popup-image">
                    <img src="images/grid_gal4.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Image</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal5.jpg" className="has-popup-image">
                    <img src="images/grid_gal5.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Image</h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="slide-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/grid_gal1.jpg" className="has-popup-image">
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">Image</h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* Section Testimonials Carousel */}
      {/* <TestimonialsCarousel /> */}
      {/* Section Numbers */}
      {/* <section className="section kf-numbers">
        <div className="container">
          <div className="kf-numbers-items row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="kf-numbers-item">
                <div className="num">256+</div>
                <div className="desc">
                  <h5 className="name">Premium Clients</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="kf-numbers-item">
                <div className="num">362+</div>
                <div className="desc">
                  <h5 className="name">Expert Members</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="kf-numbers-item">
                <div className="num">753+</div>
                <div className="desc">
                  <h5 className="name">Winning Awards</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Section Latest Blog */}
      {/* <section className="section kf-latest-blog section-bg">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Get Every Single Update
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Read Some Latest Blog &amp; News
            </h3>
          </div>
          <div className="kf-blog-grid-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="images/latest_blog1.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    SWR React Hooks With Next Increm Ental Static Regeneration
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="images/latest_blog2.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    Decisions For Building Flexible Components DevTools Browser
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-blog-grid-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <Link href="blog-single">
                    <img src="images/latest_blog3.jpg" alt="image" />
                  </Link>
                </div>
                <div className="desc">
                  <h5 className="name">
                    SWR React Hooks With Next Increm Ental Static Regeneration
                  </h5>
                  <div className="kf-date">
                    <i className="far fa-calendar-alt" />
                    25 Sep 2021
                  </div>
                  <div className="kf-comm">
                    <i className="far fa-comments" />
                    Comments (7)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="align-center">
            <Link
              href="blog-grid"
              className="kf-btn element-anim-1 scroll-animate"
              data-animate="active"
            >
              <span>view all</span>
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </section> */}
      {/* Section CTA */}
      {/* <section
        className="section kf-cta kf-parallax"
        style={{ backgroundImage: "url(images/cta_bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
              <div className="kf-titles">
                <div
                  className="kf-subtitle element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Need a Table On Coffee House
                </div>
                <h3
                  className="kf-title element-anim-1 scroll-animate"
                  data-animate="active"
                >
                  Booking Table For Your &amp; Family Members
                </h3>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 align-self-center align-right">
              <Link
                href="reservation"
                className="kf-btn element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>booking table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </Layouts>
  );
};
export default Index;
