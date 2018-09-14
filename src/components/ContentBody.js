import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import uuidv1 from 'uuid/v1';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import SearchForm from './SearchForm';
const apiUrl = 'http://qlts.vass.gov.vn/QLTS_API/API/';
axios.defaults.baseURL = 'http://qlts.vass.gov.vn/QLTS_API/API/';
const actionUrl = "AsTaiSan/GetAll";
class ContentBody extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [],
      isShowForm: false,
      token: '',
      donViId: "09634426-c58d-c846-b443-3183801513cb",
      boPhanId: '',
      keySearch: ''
    }
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem('qlts_token')) {
      let token = localStorage.getItem('qlts_token');
      this.setState({
        token: token
      });
    }
  }


  getAllTaiSan = (donviid, bpsdid, keysearch) => {
    $("#loadingIcon").show();
    $.ajax({
      type: 'GET',
      data: {
        donViId: donviid,
        boPhanId: bpsdid,
        keySearch: keysearch
      },
      url: apiUrl + actionUrl,
      contentType: "application/json",
      dataType: 'json',
      headers: {
        'Authorization': 'Bearer ' + this.state.token
      },
      crossDomain: true,
    }).done((response) => {
      this.setState({
        tasks: response
      })
    }).always(function() {
      $("#loadingIcon").hide();
    });
  }

  onGenerateData = () => {
    console.log('Khởi tạo dữ liệu');
    let tasks = [
      {
        id: uuidv1(),
        name: 'Quản lý kế hoạch mua sắm',
        status: true
      },
      {
        id: uuidv1(),
        name: 'Tăng tài sản',
        status: false
      },
      {
        id: uuidv1(),
        name: 'Thay đổi thông tin tài sản',
        status: true
      }
    ];
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Khởi tạo thành công');
  }

  onShowForm = () => {
    this.setState({
      isShowForm: !this.state.isShowForm
    });
  }

  onCloseForm = () => {
    this.setState({
      isShowForm: false
    });
  }

  onSetToken = (token) => {
    this.setState({
      token: token
    });
  }

  onSearch = (donviid, bpsdid, keysearch) => {
    this.setState({
      donViId: donviid,
      boPhanId: bpsdid,
      keySearch: keysearch
    });
    this.getAllTaiSan(donviid, bpsdid, keysearch);
    console.log('Search');
  }
  render() {
    let { tasks, isShowForm } = this.state;
    let elementF = isShowForm ? <TaskForm onCloseForm={this.onCloseForm} onSetToken={this.onSetToken}></TaskForm> : '';
    return (
      <div className="row">
        <div className={isShowForm ? "col-sm-4" : ""}>
          {elementF}
        </div>
        <div className={isShowForm ? "col-sm-8" : "col-sm-12"}>
          <div className="card">
            <div className="card-header">
              <h5 className="card-header-text">Danh sách tài sản</h5>
              <p>Sử dụng API lấy thông tin chung của tài sản.</p>
            </div>
            <div className="card-block">
              <div className="form-group">
                <button type="button"
                  className="btn btn-primary waves-effect waves-light add"
                  onClick={this.onShowForm}
                >
                  <i className="icofont icofont-key m-r-5"></i>  Lấy Token Key
                </button>&nbsp;
                {/* <button type="button"
                  className="btn btn-info waves-effect waves-light add"
                  onClick={this.onGenerateData}>
                  Lưu vào LocalStorage
                </button>&nbsp;
                <button type="button"
                  className="btn btn-success waves-effect waves-light add"
                  onClick={this.getAllTaiSan}>
                  Khởi tạo dữ liệu
                </button> */}
              </div>
              <SearchForm onSearch={this.onSearch} token={this.state.token !== '' ? this.state.token : ''}></SearchForm>
              <TaskList tasks={tasks}></TaskList>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ContentBody;