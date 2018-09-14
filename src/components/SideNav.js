import React from 'react';

class SideNav extends React.Component {
  render() {
    return (
        <aside className="main-sidebar hidden-print ">
            <section className="sidebar" id="sidebar-scroll">

                <div className="user-panel">
                    <div className="f-left image"><img src="assets/images/avatar-1.png" alt="Ảnh đại diện" className="img-circle"/></div>
                    <div className="f-left info">
                        <p>The NV</p>
                        <p className="designation">Developer <i className="icofont icofont-caret-down m-l-5"></i></p>
                    </div>
                </div>
                {/* sidebar profile Menu*/}
                <ul className="nav sidebar-menu extra-profile-list">
                    <li>
                        <a className="waves-effect waves-dark" href="profile.html">
                            <i className="icon-user"></i>
                            <span className="menu-text">View Profile</span>
                            <span className="selected"></span>
                        </a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="#!">
                            <i className="icon-settings"></i>
                            <span className="menu-text">Settings</span>
                            <span className="selected"></span>
                        </a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="#!">
                            <i className="icon-logout"></i>
                            <span className="menu-text">Logout</span>
                            <span className="selected"></span>
                        </a>
                    </li>
                </ul>
                {/* Sidebar Menu*/}
                <ul className="sidebar-menu">
                    <li className="nav-level">Navigation</li>
                    <li className="active treeview">
                        <a className="waves-effect waves-dark" href="index.html">
                            <i className="icon-speedometer"></i><span> Danh sách tài sản đơn vị</span>
                        </a>
                    </li>
                    <li className="nav-level">Components</li>
                    <li className="treeview"><a className="waves-effect waves-dark" href="#!"><i className="icon-briefcase"></i><span>
                                Danh mục</span><i className="icon-arrow-down"></i></a>
                        <ul className="treeview-menu">
                            <li><a className="waves-effect waves-dark" ><i className="icon-arrow-right"></i>
                                    Đơn vị</a></li>
                            <li><a className="waves-effect waves-dark" href="button.html"><i className="icon-arrow-right"></i>
                                    Bộ phận sử dụng</a></li>
                            
                        </ul>
                    </li>

                    <li className="treeview"><a className="waves-effect waves-dark" href="#!"><i className="icon-chart"></i><span>
                                Báo cáo &amp; Thống kê</span><span className="label label-success menu-caption">Mới</span><i
                                className="icon-arrow-down"></i></a>
                        <ul className="treeview-menu">
                            <li><a className="waves-effect waves-dark" href="float-chart.html"><i className="icon-arrow-right"></i>
                                    Tổng hợp</a></li>
                            <li><a className="waves-effect waves-dark" href="morris-chart.html"><i className="icon-arrow-right"></i>
                                    Công khai</a></li>
                        </ul>
                    </li>

                    <li className="treeview"><a className="waves-effect waves-dark" href="#!"><i className="icon-book-open"></i><span>
                                Nghiệp vụ tài sản</span><i className="icon-arrow-down"></i></a>
                        <ul className="treeview-menu">
                            <li><a className="waves-effect waves-dark" ><i className="icon-arrow-right"></i>
                                    Tăng mới tài sản</a></li>
                            <li><a className="waves-effect waves-dark"><i className="icon-arrow-right"></i>
                                    Tăng, giảm nguyên giá</a></li>
                            <li><a className="waves-effect waves-dark"><i className="icon-arrow-right"></i>
                                    Thay đổi thông tin</a></li>
                        </ul>
                    </li>

                    <li className="treeview">
                        <a className="waves-effect waves-dark" href="basic-table.html">
                            <i className="icon-list"></i><span> Tra cứu</span>
                        </a>
                    </li>


                    <li className="nav-level">More</li>

                    <li className="treeview"><a className="waves-effect waves-dark" href="#!"><i className="icon-docs"></i><span>Cấu hình</span><i
                                className="icon-arrow-down"></i></a>
                        
                    </li>

                </ul>
            </section>
        </aside>
    );
  }
}

export default SideNav;
