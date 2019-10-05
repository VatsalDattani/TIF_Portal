export default () => (

    <header className="header_area home_menu">
        <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <img src="../static/img/logo.png" className="myLogo" alt="" />

                        <ul className="nav navbar-nav menu_nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About TIF</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#banner2">Why TIF</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#banner3">How It Works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#banner4">What's in Store?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#banner5">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>

)