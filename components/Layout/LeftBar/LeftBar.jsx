const LeftBar = () => {
  return (
    <div>
      <aside className="main-sidebar">
        <section className="sidebar position-relative">
          <div className="d-flex align-items-center logo-box justify-content-start d-md-block d-none">
            <a href="index.html" className="logo">
              <div className="logo-mini">
                <span className="light-logo">
                  <img src="../../../images/logo-letter.png" alt="logo" />
                </span>
              </div>
              <div className="logo-lg">
                <span className="light-logo fs-36 fw-700">
                  CRM<span className="text-primary">i</span>
                </span>
              </div>
            </a>
          </div>
          <div className="user-profile my-15 px-20 py-10 b-1 rounded10 mx-15">
            <div className="d-flex align-items-center justify-content-between">
              <div className="image d-flex align-items-center">
                <img
                  src="../../../images/avatar/avatar-13.png"
                  className="rounded-0 me-10"
                  alt="User Image"
                />
                <div>
                  <h4 className="mb-0 fw-600">Nil Yeager</h4>
                  <p className="mb-0">Super Admin</p>
                </div>
              </div>
              <div className="info">
                <a
                  className="dropdown-toggle p-15 d-grid"
                  data-bs-toggle="dropdown"
                  href="#"
                ></a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="extra_profile.html">
                    <i className="ti-user"></i> Profile
                  </a>
                  <a className="dropdown-item" href="mailbox.html">
                    <i className="ti-email"></i> Inbox
                  </a>
                  <a className="dropdown-item" href="contact_app_chat.html">
                    <i className="ti-link"></i> Conversation
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="auth_login.html">
                    <i className="ti-lock"></i> Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="multinav">
            <div className="multinav-scroll" style="height: 97%;">
              <ul className="sidebar-menu" data-widget="tree">
                <li className="header">Main Menu</li>
                <li>
                  <a href="index.html">
                    <i className="icon-Layout-4-blocks">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="ecommerce_products.html">
                    <i className="icon-Box3">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                    <span>Products</span>
                  </a>
                </li>
                <li>
                  <a href="ecommerce_products_edit.html">
                    <i className="icon-Edit">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                    <span>Product Edit</span>
                  </a>
                </li>
                <li>
                  <a href="ecommerce_details.html">
                    <i className="icon-Cart2">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                    <span>Product Details</span>
                  </a>
                </li>
                <li>
                  <a href="ecommerce_orders.html">
                    <i className="icon-Loader">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                    </i>
                    <span>Product Orders</span>
                  </a>
                </li>
                <li>
                  <a href="ecommerce_cart.html">
                    <i className="icon-Cart">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                    <span>Product Cart</span>
                  </a>
                </li>
                <li>
                  <a href="ecommerce_checkout.html">
                    <i className="icon-Money">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                    <span>Product Chackout</span>
                  </a>
                </li>
                <li>
                  <a href="expenses.html">
                    <i className="icon-Wallet">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                    <span>Expenses</span>
                  </a>
                </li>
                <li className="header">Components</li>
                <li className="treeview">
                  <a href="#">
                    <i className="icon-Library">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                    <span>Features</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-right pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Card
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="box_cards.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            User Card
                          </a>
                        </li>
                        <li>
                          <a href="box_advanced.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Advanced Card
                          </a>
                        </li>
                        <li>
                          <a href="box_basic.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Basic Card
                          </a>
                        </li>
                        <li>
                          <a href="box_color.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Card Color
                          </a>
                        </li>
                        <li>
                          <a href="box_group.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Card Group
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        BS UI
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="ui_grid.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Grid System
                          </a>
                        </li>
                        <li>
                          <a href="ui_badges.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Badges
                          </a>
                        </li>
                        <li>
                          <a href="ui_border_utilities.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Border
                          </a>
                        </li>
                        <li>
                          <a href="ui_buttons.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Buttons
                          </a>
                        </li>
                        <li>
                          <a href="ui_color_utilities.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Color
                          </a>
                        </li>
                        <li>
                          <a href="ui_dropdown.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Dropdown
                          </a>
                        </li>
                        <li>
                          <a href="ui_dropdown_grid.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Dropdown Grid
                          </a>
                        </li>
                        <li>
                          <a href="ui_progress_bars.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Progress Bars
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Icons
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="icons_fontawesome.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Font Awesome
                          </a>
                        </li>
                        <li>
                          <a href="icons_glyphicons.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Glyphicons
                          </a>
                        </li>
                        <li>
                          <a href="icons_material.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Material Icons
                          </a>
                        </li>
                        <li>
                          <a href="icons_themify.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Themify Icons
                          </a>
                        </li>
                        <li>
                          <a href="icons_simpleline.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Simple Line Icons
                          </a>
                        </li>
                        <li>
                          <a href="icons_cryptocoins.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Cryptocoins Icons
                          </a>
                        </li>
                        <li>
                          <a href="icons_flag.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Flag Icons
                          </a>
                        </li>
                        <li>
                          <a href="icons_weather.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Weather Icons
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Custom UI
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="ui_ribbons.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Ribbons
                          </a>
                        </li>
                        <li>
                          <a href="ui_sliders.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Sliders
                          </a>
                        </li>
                        <li>
                          <a href="ui_typography.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Typography
                          </a>
                        </li>
                        <li>
                          <a href="ui_tab.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Tabs
                          </a>
                        </li>
                        <li>
                          <a href="ui_timeline.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Timeline
                          </a>
                        </li>
                        <li>
                          <a href="ui_timeline_horizontal.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Horizontal Timeline
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Components
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="component_bootstrap_switch.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Bootstrap Switch
                          </a>
                        </li>
                        <li>
                          <a href="component_date_paginator.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Date Paginator
                          </a>
                        </li>
                        <li>
                          <a href="component_media_advanced.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Advanced Medias
                          </a>
                        </li>
                        <li>
                          <a href="component_rangeslider.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Range Slider
                          </a>
                        </li>
                        <li>
                          <a href="component_rating.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Ratings
                          </a>
                        </li>
                        <li>
                          <a href="component_animations.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Animations
                          </a>
                        </li>
                        <li>
                          <a href="extension_fullscreen.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Fullscreen
                          </a>
                        </li>
                        <li>
                          <a href="extension_pace.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Pace
                          </a>
                        </li>
                        <li>
                          <a href="component_nestable.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Nestable
                          </a>
                        </li>
                        <li>
                          <a href="component_portlet_draggable.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Draggable Portlets
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="icon-Box2">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                    <span>Forms, Tables & Charts</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-right pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Forms
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="forms_advanced.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Form Elements
                          </a>
                        </li>
                        <li>
                          <a href="forms_general.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Form Layout
                          </a>
                        </li>
                        <li>
                          <a href="forms_wizard.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Form Wizard
                          </a>
                        </li>
                        <li>
                          <a href="forms_validation.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Form Validation
                          </a>
                        </li>
                        <li>
                          <a href="forms_mask.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Formatter
                          </a>
                        </li>
                        <li>
                          <a href="forms_xeditable.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Xeditable Editor
                          </a>
                        </li>
                        <li>
                          <a href="forms_dropzone.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Dropzone
                          </a>
                        </li>
                        <li>
                          <a href="forms_code_editor.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Code Editor
                          </a>
                        </li>
                        <li>
                          <a href="forms_editors.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Editor
                          </a>
                        </li>
                        <li>
                          <a href="forms_editor_markdown.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Markdown
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Tables
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="tables_simple.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Simple tables
                          </a>
                        </li>
                        <li>
                          <a href="tables_data.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Data tables
                          </a>
                        </li>
                        <li>
                          <a href="tables_editable.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Editable Tables
                          </a>
                        </li>
                        <li>
                          <a href="tables_color.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Table Color
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Charts
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="charts_chartjs.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            ChartJS
                          </a>
                        </li>
                        <li>
                          <a href="charts_flot.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Flot
                          </a>
                        </li>
                        <li>
                          <a href="charts_inline.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Inline charts
                          </a>
                        </li>
                        <li>
                          <a href="charts_morris.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Morris
                          </a>
                        </li>
                        <li>
                          <a href="charts_peity.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Peity
                          </a>
                        </li>
                        <li>
                          <a href="charts_chartist.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Chartist
                          </a>
                        </li>
                        <li>
                          <a href="charts_c3_axis.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Axis Chart
                          </a>
                        </li>
                        <li>
                          <a href="charts_c3_bar.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Bar Chart
                          </a>
                        </li>
                        <li>
                          <a href="charts_c3_data.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Data Chart
                          </a>
                        </li>
                        <li>
                          <a href="charts_c3_line.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Line Chart
                          </a>
                        </li>
                        <li>
                          <a href="charts_echarts_basic.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Basic Charts
                          </a>
                        </li>
                        <li>
                          <a href="charts_echarts_bar.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Bar Chart
                          </a>
                        </li>
                        <li>
                          <a href="charts_echarts_pie_doughnut.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Pie & Doughnut Chart
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="icon-Globe">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                    <span>Apps & Widgets</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-right pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Apps
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="extra_calendar.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Calendar
                          </a>
                        </li>
                        <li>
                          <a href="contact_app.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Contact List
                          </a>
                        </li>
                        <li>
                          <a href="extra_taskboard.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Todo
                          </a>
                        </li>
                        <li>
                          <a href="mailbox.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Mailbox
                          </a>
                        </li>
                        <li>
                          <a href="contact_userlist_grid.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Contacts
                          </a>
                        </li>
                        <li>
                          <a href="contact_app_chat.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Chat
                          </a>
                        </li>
                        <li>
                          <a href="extra_app_ticket.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Support
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Widgets
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li className="treeview">
                          <a href="#">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Custom
                            <span className="pull-right-container">
                              <i className="fa fa-angle-right pull-right"></i>
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="widgets_blog.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Blog
                              </a>
                            </li>
                            <li>
                              <a href="widgets_chart.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Chart
                              </a>
                            </li>
                            <li>
                              <a href="widgets_list.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                List
                              </a>
                            </li>
                            <li>
                              <a href="widgets_social.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Social
                              </a>
                            </li>
                            <li>
                              <a href="widgets_statistic.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Statistic
                              </a>
                            </li>
                            <li>
                              <a href="widgets_weather.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Weather
                              </a>
                            </li>
                            <li>
                              <a href="widgets.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Widgets
                              </a>
                            </li>
                            <li>
                              <a href="email_index.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Emails
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="treeview">
                          <a href="#">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Maps
                            <span className="pull-right-container">
                              <i className="fa fa-angle-right pull-right"></i>
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="map_google.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Google Map
                              </a>
                            </li>
                            <li>
                              <a href="map_vector.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Vector Map
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="treeview">
                          <a href="#">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Modals
                            <span className="pull-right-container">
                              <i className="fa fa-angle-right pull-right"></i>
                            </span>
                          </a>
                          <ul className="treeview-menu">
                            <li>
                              <a href="component_modals.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Modals
                              </a>
                            </li>
                            <li>
                              <a href="component_sweatalert.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Sweet Alert
                              </a>
                            </li>
                            <li>
                              <a href="component_notification.html">
                                <i className="icon-Commit">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                Toastr
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="treeview">
                      <a href="#">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Sample Pages
                        <span className="pull-right-container">
                          <i className="fa fa-angle-right pull-right"></i>
                        </span>
                      </a>
                      <ul className="treeview-menu">
                        <li>
                          <a href="invoice.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Invoice
                          </a>
                        </li>
                        <li>
                          <a href="invoicelist.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Invoice List
                          </a>
                        </li>
                        <li>
                          <a href="extra_profile.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            User Profile
                          </a>
                        </li>
                        <li>
                          <a href="contact_userlist.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Userlist
                          </a>
                        </li>
                        <li>
                          <a href="sample_faq.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            FAQs
                          </a>
                        </li>
                        <li>
                          <a href="sample_blank.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Blank
                          </a>
                        </li>
                        <li>
                          <a href="sample_coming_soon.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Coming Soon
                          </a>
                        </li>
                        <li>
                          <a href="sample_custom_scroll.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Custom Scrolls
                          </a>
                        </li>
                        <li>
                          <a href="sample_gallery.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Gallery
                          </a>
                        </li>
                        <li>
                          <a href="sample_lightbox.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Lightbox Popup
                          </a>
                        </li>
                        <li>
                          <a href="sample_pricing.html">
                            <i className="icon-Commit">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                            Pricing
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="icon-Lock-overturning">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                    <span>Authentication</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-right pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="auth_login.html">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="auth_register.html">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Register
                      </a>
                    </li>
                    <li>
                      <a href="auth_lockscreen.html">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Lockscreen
                      </a>
                    </li>
                    <li>
                      <a href="auth_user_pass.html">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Recover password
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="treeview">
                  <a href="#">
                    <i className="icon-Warning-2">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                    </i>
                    <span>Miscellaneous</span>
                    <span className="pull-right-container">
                      <i className="fa fa-angle-right pull-right"></i>
                    </span>
                  </a>
                  <ul className="treeview-menu">
                    <li>
                      <a href="error_404.html">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Error 404
                      </a>
                    </li>
                    <li>
                      <a href="error_500.html">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Error 500
                      </a>
                    </li>
                    <li>
                      <a href="error_maintenance.html">
                        <i className="icon-Commit">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                        Maintenance
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="sidebar-widgets">
                <div className="mx-25 mb-30 pb-20 side-bx bg-primary-light rounded20">
                  <div className="text-center">
                    <img
                      src="../../../images/svg-icon/color-svg/custom-17.svg"
                      className="sideimg p-5"
                      alt=""
                    />
                    <h4 className="title-bx text-primary">View Full Report</h4>
                    <a href="#" className="py-10 fs-14 mb-0 text-primary">
                      Best CRM App here <i className="mdi mdi-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="copyright text-center m-25">
                  <p>
                    <strong className="d-block">CRMi Dashboard</strong> ©{" "}
                    <script>document.write(new Date().getFullYear())</script>{" "}
                    All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
};

export default LeftBar;
