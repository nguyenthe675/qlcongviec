import React from 'react';
import TaskItem from './TaskItem';
class TaskList extends React.Component {
  render() {
    let { tasks } = this.props;
    let elmTask = tasks.map((task,index)=>{
      return <TaskItem key= {task.Id} index = {index} task={task}></TaskItem>;
    });
    return (
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã tài sản</th>
            <th>Mã tài sản đơn vị quản lý</th>
            <th>Tên</th>
            <th>Trạng thái</th>
            {/* <th>Hành động</th> */}
          </tr>
        </thead>
        <tbody>
          { elmTask }
        </tbody>
      </table>
    );
  }
}

export default TaskList;