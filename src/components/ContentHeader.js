import React from 'react';

class ContentHeader extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="main-header">
          {/* <h4>Quản lý công việc</h4> */}
          <ol className="breadcrumb breadcrumb-title breadcrumb-arrow">
            <li className="breadcrumb-item"><a href="index.html"><i className="icofont icofont-home"></i></a>
            </li>
            <li className="breadcrumb-item"><a href="#!">Công việc</a>
            </li>
            <li className="breadcrumb-item"><a href="general-elements-materialize.html">Danh sách công việc</a>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default ContentHeader;