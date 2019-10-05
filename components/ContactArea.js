export default () => (

    <section className="contact-area section-gap">
        <div className="container">
            <div className="row align-items-center bg-white">
                <div className="col-lg-6">
                    <div className="left_side service">
                        <img className="img-fluid w-100" src="../static/img/about-bg.jpg" alt="" />
                        <div className="overlay overlay-bg-8"></div>
                        <div className="right_side vcenter">
                            <h1 className="text-white">
                                Contact Us
							</h1>
                            <p style={{ color: "white" }}>
                                E-Mail: tif@shaastra.org<br />
                                Akhil Sajeev: 9446039897<br />
                                Chitranshu Vashishth: 8442052060<br />

                            </p>
                        </div>
                    </div>
                </div>
                <div className="offset-lg-1 col-lg-4">
                    <div className="right_side">
                        <h1>
                            Rules and Regulations
                        </h1>
                        <ul>
                            <li>The team should have a working hardcore tech project or prototype that is, we are not
looking for an application or software-based projects.</li>
                            <li>If your team has more than 3 members then please register (or send during Shaastra), a
maximum of 3 people as representatives for the event</li>
                            <li>Every stage will have an evaluation procedure decided by experts and judges. Any
decisions by them will be final</li>
                            <li>All official communication will be done via email. It is the responsibility of the teams to
check his/her email for any tasks assigned to them if selected</li>
                            <li>Should there be any discrepancies or issues, the decision taken by Shaastra shall be
final and binding.</li>
                        </ul>

                        {/* <div className="table_form">
                            <form className="book_table_form row" action="#">
                                <div className="form-group col-md-12">
                                    <input type="text" className="form-control" name="name" placeholder="Enter your name" />
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="email" className="form-control" name="email" placeholder="Enter email address" />
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="text" className="form-control" name="subject" placeholder="Phone Number" />
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea className="form-control" name="text" rows="5" placeholder="Note"></textarea>
                                </div>
                                <div className="form-group col-md-12">
                                    <button type="submit" value="submit" className="primary-btn dark">Send Message</button>
                                </div>
                            </form>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>


)