import React from 'react';

export const NewTask = (props) => {

  // 分割代入
  const {
    todoSort,
    newTask,
    onChangeSort,
    onClickEdit,
    onClickDelete,
    sortArray
  } = props;

  return (
    <div className='new_task'>
      <h2 className='Inter_B'>New task</h2>
      <div className='sort_btn_wrapper'>
        <select
          className='sort Inter_B'
          id='sort'
          value={todoSort}
          onChange={onChangeSort}
        >
          {
            sortArray.map((sort) => {
              return (
                <option value={sort} key={sort}>{sort}</option>
              )
            })
          }
        </select>
        <div className='triangle'></div>
      </div>

      <ul>
        {
          newTask.map((task, index) => (
            <li key={index} className={task.sort}>
              <p>タイトル : {task.title}</p>
              <p>期日 : {task.term}</p>
              <p>ステータス : {task.status}</p>
              <p>内容 : {task.cont}</p>
              <p className='created_date'>作成日 : {task.date}</p>
              <div className='task_btn_wrapper'>
                <button
                  className='task_btn_edit Inter_B'
                  onClick={() => onClickEdit(index)}
                >
                  Edit
                </button>
                <p>&nbsp;/&nbsp;</p>
                <button
                  className='task_btn_dis Inter_B'
                  onClick={() => onClickDelete(index)}
                >
                  Discontinued
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
