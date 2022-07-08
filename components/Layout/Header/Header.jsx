const Header = () => {
  return (
    <div>
      <header className="main-header">
        <div className="d-flex align-items-center logo-box justify-content-start d-md-none d-block">
          <a href="index.html" className="logo">
            <div className="logo-mini w-30">
              <span className="light-logo">
                <img src="../../../images/logo-letter.png" alt="logo" />
              </span>
              <span className="dark-logo">
                <img src="../../../images/logo-letter-white.png" alt="logo" />
              </span>
            </div>
            <div className="logo-lg">
              <span className="light-logo">
                <img src="../../../images/logo-dark-text.png" alt="logo" />
              </span>
              <span className="dark-logo">
                <img src="../../../images/logo-light-text.png" alt="logo" />
              </span>
            </div>
          </a>
        </div>

        <nav className="navbar navbar-static-top">
          <div className="app-menu">
            <ul className="header-megamenu nav">
              <li className="btn-group nav-item">
                <a
                  href="#"
                  className="waves-effect waves-light nav-link push-btn btn-primary-light"
                  data-toggle="push-menu"
                  role="button"
                >
                  <i className="icon-Menu">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </a>
              </li>
              <li className="btn-group d-lg-inline-flex d-none">
                <div className="app-menu">
                  <div className="search-bx mx-5">
                    <form>
                      <div className="input-group">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn"
                            type="submit"
                            id="button-addon3"
                          >
                            <i className="icon-Search">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="navbar-custom-menu r-side">
            <ul className="nav navbar-nav">
              <li className="dropdown notifications-menu btn-group nav-item">
                <a
                  href="#"
                  className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon"
                  data-bs-toggle="dropdown"
                  title="Notifications"
                >
                  <i className="icon-Notifications">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  <div className="pulse-wave"></div>
                </a>
                <ul className="dropdown-menu animated bounceIn">
                  <li className="header">
                    <div className="p-20">
                      <div className="flexbox">
                        <div>
                          <h4 className="mb-0 mt-0">Notifications</h4>
                        </div>
                        <div>
                          <a href="#" className="text-danger">
                            Clear All
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <ul className="menu sm-scrol">
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-info"></i> Curabitur id
                          eros quis nunc suscipit blandit.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-warning text-warning"></i> Duis
                          malesuada justo eu sapien elementum, in semper diam
                          posuere.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-danger"></i> Donec at
                          nisi sit amet tortor commodo porttitor pretium a erat.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart text-success"></i>{" "}
                          In gravida mauris et nisi
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-danger"></i> Praesent eu
                          lacus in libero dictum fermentum.
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-primary"></i> Nunc
                          fringilla lorem
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user text-success"></i> Nullam
                          euismod dolor ut quam interdum, at scelerisque ipsum
                          imperdiet.
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">View all</a>
                  </li>
                </ul>
              </li>
              <li className="btn-group nav-item">
                <a
                  href="#"
                  className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon"
                  title=""
                  data-bs-toggle="modal"
                  data-bs-target="#quick_actions_toggle"
                >
                  <i className="icon-Layout-arrange">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </a>
              </li>
              <li className="btn-group nav-item d-xl-inline-flex d-none">
                <a
                  href="#"
                  className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon"
                  title=""
                  data-bs-toggle="modal"
                  data-bs-target="#quick_panel_toggle"
                >
                  <i className="icon-Notification">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </a>
              </li>
              <li className="btn-group nav-item d-xl-inline-flex d-none">
                <a
                  href="#"
                  className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon"
                  title=""
                  data-bs-toggle="modal"
                  data-bs-target="#quick_shop_toggle"
                >
                  <i className="icon-Cart1">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </a>
              </li>
              <li className="btn-group nav-item d-xl-inline-flex d-none">
                <a
                  href="#"
                  className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon"
                  title=""
                  id="live-chat"
                >
                  <i className="icon-Chat">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </a>
              </li>

              <li className="btn-group d-xl-inline-flex d-none">
                <a
                  href="#"
                  className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <img
                    className="rounded"
                    src="../../../images/svg-icon/usa.svg"
                    alt=""
                  />
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item my-5" href="#">
                    <img
                      className="w-20 rounded me-10"
                      src="../../../images/svg-icon/usa.svg"
                      alt=""
                    />{" "}
                    English
                  </a>
                  <a className="dropdown-item my-5" href="#">
                    <img
                      className="w-20 rounded me-10"
                      src="../../../images/svg-icon/spain.svg"
                      alt=""
                    />{" "}
                    Spanish
                  </a>
                  <a className="dropdown-item my-5" href="#">
                    <img
                      className="w-20 rounded me-10"
                      src="../../../images/svg-icon/ger.svg"
                      alt=""
                    />{" "}
                    German
                  </a>
                  <a className="dropdown-item my-5" href="#">
                    <img
                      className="w-20 rounded me-10"
                      src="../../../images/svg-icon/jap.svg"
                      alt=""
                    />{" "}
                    Japanese
                  </a>
                  <a className="dropdown-item my-5" href="#">
                    <img
                      className="w-20 rounded me-10"
                      src="../../../images/svg-icon/fra.svg"
                      alt=""
                    />{" "}
                    French
                  </a>
                </div>
              </li>

              <li className="btn-group nav-item d-xl-inline-flex d-none">
                <a
                  href="#"
                  data-provide="fullscreen"
                  className="waves-effect waves-light nav-link btn-primary-light svg-bt-icon"
                  title="Full Screen"
                >
                  <i className="icon-Expand-arrows">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </a>
              </li>

              <li className="btn-group nav-item">
                <a
                  href="reports.html"
                  className="waves-effect waves-light nav-link bg-primary btn-primary w-auto fs-14"
                  title="Full Screen"
                >
                  Report
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
