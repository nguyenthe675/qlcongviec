import React from 'react';
import uuidv1 from 'uuid/v1';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class ContentBody extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [], // id : unique, name, status
      isShowForm : false
    }
  }

  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks'))
    {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks
      });
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
    localStorage.setItem('tasks' , JSON.stringify(tasks));
    console.log('Khởi tạo thành công');
  }

  onShowForm = () => {
    this.setState({
      isShowForm : !this.state.isShowForm
    });
  }

  render() {
    let { tasks, isShowForm } = this.state;
    return (
      <div className="row">
        <div className={isShowForm ? "col-sm-4" : ""}>
          { isShowForm ? <TaskForm></TaskForm> : ''}
        </div>
        <div className={ isShowForm ? "col-sm-8" : "col-sm-12"}>
          <div className="card">
            <div className="card-header">
              <h5 className="card-header-text">Danh sách công việc</h5>
              <p>Quản lý danh sách công việc cho phép thêm, sửa, xóa và tìm kiếm công việc.</p>
            </div>
            <div className="card-block">
              <div className="form-group">
                <button type="button" 
                className="btn btn-primary waves-effect waves-light add"
                onClick={ this.onShowForm }
                >
                  <i className="icofont icofont-plus m-r-5"></i>  Thêm mới
                </button>&nbsp;
                <button type="button" 
                  className="btn btn-success waves-effect waves-light add" 
                  onClick={ this.onGenerateData }>
                    Khởi tạo dữ liệu
                </button>
              </div>
              <TaskList tasks= { tasks }></TaskList>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ContentBody;