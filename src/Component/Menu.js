import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../reduxdata/UserSlice";

function Menu() {
    const user = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    var logout = () => {
        dispatch(loginUser({ token: undefined, loginStatus: false, username: undefined }))
    }
    return (

        <div>
            <div className="loader_bg">
                <div className="loader"><img src="images/loading.gif" alt="#" /></div>
            </div>
            {/* <!-- end loader -->
      <!-- header --> */}
            <header>
                {/* <!-- header inner --> */}
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo">
                                            <a href="index.html"><img src="images/logo.png" alt="#" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarsExample04">
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item">
                                                <Link to="/" className="nav-link"> Home  </Link>
                                            </li>
                                            {/* <img src="..\hp\Desktop\html\AtoZ\az\google.jpg"/> */}
                                            <li className="nav-item">
                                                <Link to="/car" className="nav-link" >Best Cars</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/contact" className="nav-link" >Contact us</Link>
                                            </li>
                                        </ul>

                                        {user.loginstatus ? <>
                                            <li class="nav-item">
                                                <b>
                                                    {user.username}
                                                    <br />
                                                    <span onClick={logout}
                                                        style={{ cursor: 'pointer' }}>(Logout)</span>
                                                </b>
                                            </li>
                                        </> : <>
                                            <li class="nav-item">
                                                <Link class="nav-link" to="/login">
                                                    Login / Register
                                                </Link>
                                            </li>
                                        </>}
                                    </div>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="banner_main">
                <div className="container">
                    <div className="row d_flex">
                        <div className="col-md-12">
                            <div className="text-bg">
                                <h1>Find best car Here For rent</h1>
                                <strong>Free Multipurpose Responsive</strong>
                                <span>Landing Page 2019</span>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since theLorem Ipsum is simply dummy text of the printing
                                    <head></head>
                                </p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Car/> */}
            {/* <!-- end header inner -->
      <!-- end header --> */}
        </div>
    )
}

export default Menu
