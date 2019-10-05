export default ({ bodyTitle, bodyText, image }) => (

    <section className="banner-area section-gap mt-34">
        <div className="container">
            <div className="row align-items-center bg-white">
                <div className="col-lg-6 col-md-6">
                    <div className="left_side owl-carousel owl-banner">
                        <img className="img-fluid" src={"../static/img/banner/" + image} alt="" />
                        {/* <img className="img-fluid" src="../static/img/banner/b2.jpg" alt="" />
                        <img className="img-fluid" src="../static/img/banner/b3.jpg" alt="" /> */}
                    </div>
                </div>
                <div className="offset-lg-1 col-lg-4 col-md-6">
                    <div className="right_side">
                        <h1>
                            {bodyTitle}
                        </h1>
                        {bodyText}
                    </div>
                </div>
            </div>
        </div>
    </section>
)