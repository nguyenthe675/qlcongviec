import React from 'react';

class TaskForm extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h5 className="card-header-text">Thông tin công việc</h5>
                </div>
                <div className="card-block">
                    <div className="row">
                        <div className="md-input-wrapper">
                            <input type="text" className="md-form-control md-static" />
                            <label>Tên</label>
                            <span className="md-line"></span>
                        </div>
                        <div className="md-input-wrapper">
                            <input type="text" className="md-form-control md-static" />
                            <label>Trạng thái</label>
                            <span className="md-line"></span>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-inverse-primary"> Lưu </button> &nbsp;
                    <button type="button" className="btn btn-inverse-disable"> Đóng </button>
                </div>
            </div>
        );
    }
}

export default TaskForm;