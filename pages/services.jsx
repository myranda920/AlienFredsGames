import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const Services = () => {
  return (
    <Layouts>
      {/* Section Started Inner */}
      <section className="section kf-started-inner">
        <div
          className="kf-parallax-bg js-parallax"
          style={{ backgroundImage: "url(images/services_inner_bg.jpg)" }}
        />
        <div className="container">
          <h1
            className="kf-h-title text-anim-1 scroll-animate"
            data-splitting="chars"
            data-animate="active"
          >
            Services
          </h1>
        </div>
      </section>
      {/* Section Services */}
      <section className="section kf-services">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              We provide
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Current Package Deals
            </h3>
          </div>
          <div className="kf-services-items row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <img src="images/service1.jpg" alt="image" />
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-utensils" />
                  </div>
                  <h5 className="name">Bronze Package: Get three games for just $155. (Excluding Jumbo Beer-Pong)</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <img src="images/service2.jpg" alt="image" />
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-coffee" />
                  </div>
                  <h5 className="name">Coffee Club</h5>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div
                className="kf-services-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <img src="images/service3.jpg" alt="image" />
                </div>
                <div className="desc">
                  <div className="icon">
                    <i className="las la-glass-cheers" />
                  </div>
                  <h5 className="name">Delicious Latte</h5>
                </div>
              </div>
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
              Add-Ons
            </h3>
          </div>
          <div className="kf-numbers-items-2 row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <div
                className="kf-numbers-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="icon">
                  <i className="las la-cookie" />
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
                  <i className="las la-carrot" />
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
                  <i className="las la-hamburger" />
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
                  <i className="las la-fish" />
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
                  <i className="las la-pizza-slice" />
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
                  <i className="las la-mug-hot" />
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
                  <i className="las la-seedling" />
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
      {/* Section Services-2 */}
      <section className="section kf-services">
        <div className="container">
          <div className="kf-titles align-center">
            <div
              className="kf-subtitle element-anim-1 scroll-animate"
              data-animate="active"
            >
              Our awesome
            </div>
            <h3
              className="kf-title element-anim-1 scroll-animate"
              data-animate="active"
            >
              Kaffen Services Three
            </h3>
          </div>
          <div className="kf-services-items-2 row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/service_icon1.png" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Birthday Cakes</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/service_icon2.png" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Fresh Foods</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/service_icon3.png" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Skills Chefs</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
              <div
                className="kf-services-item-2 element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image">
                  <img src="images/service_icon4.png" alt="image" />
                </div>
                <div className="desc">
                  <h5 className="name">Organic Juice</h5>
                  <div className="subname">Sed ut perspiciatis unde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section CTA */}
      <section
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
      </section>
    </Layouts>
  );
};
export default Services;
