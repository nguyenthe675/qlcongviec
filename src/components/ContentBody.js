import React from 'react';
import uuidv1 from 'uuid/v1';

class ContentHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [] // id : unique, name, status
    }
  }

  onGenerateData = () => {
    console.log('Khởi tạo dữ liệu');
    let tasks = [
      {
        id : uuidv1(),
        name : 'Quản lý kế hoạch mua sắm',
        status : true
      },
      {
        id : uuidv1(),
        name : 'Tăng tài sản',
        status : false
      },
      {
        id : uuidv1(),
        name : 'Thay đổi thông tin tài sản',
        status : true
      }
    ];
    this.setState({
      tasks : tasks
    });

    console.log('Khởi tạo thành công');
  }

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
              <div className="form-group">
                <button type="button" className="btn btn-primary waves-effect waves-light add">
                  <i className="icofont icofont-plus m-r-5"></i>  Thêm mới
                </button>&nbsp;
                <button type="button" 
                  className="btn btn-success waves-effect waves-light add" 
                  onClick={ this.onGenerateData }>
                    Khởi tạo dữ liệu
                </button>
              </div>
              
              <table className="table table-striped table-bordered">
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
                          <span className="icofont icofont-ui-edit"></span>
                        </button>
                        <button type="button" className="tabledit-delete-button btn btn-sm btn-danger" >
                          <span className="icofont icofont-ui-delete"></span>
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
                          <span className="icofont icofont-ui-edit"></span>
                        </button>
                        <button type="button" className="tabledit-delete-button btn btn-sm btn-danger" >
                          <span className="icofont icofont-ui-delete"></span>
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
                          <span className="icofont icofont-ui-edit"></span>
                        </button>
                        <button type="button" className="tabledit-delete-button btn btn-sm btn-danger" >
                          <span className="icofont icofont-ui-delete"></span>
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
                          <span className="icofont icofont-ui-edit"></span>
                        </button>
                        <button type="button" className="tabledit-delete-button btn btn-sm btn-danger" >
                          <span className="icofont icofont-ui-delete"></span>
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
    );
  }
}

export default ContentHeader;