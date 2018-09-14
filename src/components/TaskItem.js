import React from 'react';

class TaskItem extends React.Component {
    render() {
        let {task, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.MaTaiSan}</td>
                <td>{task.MaTaiSanCu}</td>
                <td>{task.TenTaiSan}</td>
                <td>
                    <span className={ task.TrangThai === 2 ?  "badge badge-default" : "badge badge-success" }>{ task.TrangThai === 2 ? 'Đã giảm': 'Tăng mới'}</span>
                </td>
                {/* <td>
                    <div className="tabledit-toolbar btn-toolbar" >
                        <button type="button" className="tabledit-edit-button btn btn-sm btn-primary" >
                            <span className="icofont icofont-ui-edit"></span>
                        </button>
                        <button type="button" className="tabledit-delete-button btn btn-sm btn-danger" >
                            <span className="icofont icofont-ui-delete"></span>
                        </button>
                    </div>
                </td> */}
            </tr>
        );
    }
}

export default TaskItem;