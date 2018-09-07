import React from 'react';

class ContentHeader extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-header-text">Danh sách công việc</h5>
              <p>Quản lý danh sách công việc cho phép thêm, sửa, xóa và tìm kiếm công việc.</p>
            </div>
            <div className="card-block">
              <div className="row">
                <div className="col-sm-12 table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>
                          <span className="badge badge-success">Active</span>
                        </td>
                        <td>
                          <div className="tabledit-toolbar btn-toolbar" >
                            <button type="button" className="tabledit-edit-button btn btn-sm btn-primary" >
                              <span class="icofont icofont-ui-edit"></span>
                            </button>
                            <button type="button" className="tabledit-delete-button btn btn-sm btn-danger" >
                              <span class="icofont icofont-ui-delete"></span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>
                          <span className="badge badge-default">Disabled</span>
                        </td>
                        <td>
                          <div className="tabledit-toolbar btn-toolbar" >
                            <button type="button" className="tabledit-edit-button btn btn-sm btn-primary" >
                              <span class="icofont icofont-ui-edit"></span>
                            </button>
                            <button type="button" className="tabledit-delete-button btn btn-sm btn-danger" >
                              <span class="icofont icofont-ui-delete"></span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>
                          <span className="badge badge-default">Disabled</span>
                        </td>
                        <td>
                          <div className="tabledit-toolbar btn-toolbar" >
                            <button type="button" className="tabledit-edit-button btn btn-sm btn-primary" >
                              <span class="icofont icofont-ui-edit"></span>
                            </button>
                            <button type="button" className="tabledit-delete-button btn btn-sm btn-danger" >
                              <span class="icofont icofont-ui-delete"></span>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Larry</td>
                        <td>
                          <span className="badge badge-success">Active</span>
                        </td>
                        <td>
                          <div className="tabledit-toolbar btn-toolbar" >
                            <button type="button" className="tabledit-edit-button btn btn-sm btn-primary" >
                              <span class="icofont icofont-ui-edit"></span>
                            </button>
                            <button type="button" className="tabledit-delete-button btn btn-sm btn-danger" >
                              <span class="icofont icofont-ui-delete"></span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentHeader;