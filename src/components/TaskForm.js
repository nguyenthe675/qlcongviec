import React from 'react';
import $ from 'jquery';

const serviceUrl = 'http://qlts.vass.gov.vn/QLTS_API/';
//const localUrl = 'http://localhost:4001/API/';
class TaskForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        var token = "";
        this.getTokenKey(this.state.username,this.state.password);
        this.props.onSetToken(token);
        this.props.onCloseForm();
    }
    
    getTokenKey = (username,password) => {
        $("#loadingIcon").show();
        var data = { 
            grant_type: "password",
            username: username,
            password: password,
            client_id : "koFeApp",
            donvi: "a40321db-8dcd-bd4c-9701-8b20eb296681"
        };
        $.ajax({
            type: 'POST',
            async: true,
            data: data,
            url: serviceUrl + '/oauth/token',
            contentType: "application/x-www-form-urlencoded",
            dataType: 'Json',
            crossDomain: true,
        }).done((token) => {
            this.props.onSetToken(token.access_token);
                localStorage.setItem('qlts_token',token.access_token);
        }).always(function() {
            $("#loadingIcon").hide();
          });
       
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-header-text">Thông tin đăng nhập</h5>
                    </div>
                    <div className="card-block">
                        <div className="row">
                            <div className="md-input-wrapper">
                                <input type="text"
                                    className="md-form-control md-static"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                <label>Tài khoản</label>
                                <span className="md-line"></span>
                            </div>
                            <div className="md-input-wrapper">
                                <input type="password"
                                    className="md-form-control md-static"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <label>Mật khẩu</label>
                                <span className="md-line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-inverse-primary"><i className="icofont icofont-key"></i> Lấy Token </button> &nbsp;
                    <button type="button"
                            className="btn btn-inverse-disable"
                            onClick={this.onCloseForm}
                        ><i className="icofont icofont-close"></i> Đóng </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default TaskForm;