import React from 'react';

export const AddTodo = (props) => {

  // 分割代入
  const {
    todoTitle,
    todoTerm,
    todoStatus,
    todoCont,
    onChangeTitle,
    onChangeTerm,
    onChangeStatus,
    onChangeCont,
    onClickAdd,
    statusArray,
  } = props;

  return (
    <div className='add_todo'>
      <div className='add_todo_cont'>
        <p>タイトル</p>
        <input
          id='title'
          value={todoTitle}
          onChange={onChangeTitle}
        />
      </div>
      <div className='add_todo_cont'>
        <p>期日</p>
        <input
          id='term'
          value={todoTerm}
          onChange={onChangeTerm}
        />
      </div>
      <div className='add_todo_cont'>
        <p>ステータス</p>
        <select
          id='status'
          value={todoStatus}
          onChange={onChangeStatus}
        >
          {
            statusArray.map((status) => {
              return (
                <option value={status} key={status}>{status}</option>
              )
            })
          }
        </select>
        <div className='triangle'></div>
      </div>
      <div className='add_todo_cont'>
        <p>内容</p>
        <input
          id='cont'
          value={todoCont}
          onChange={onChangeCont}
        />
      </div>
      <div className='add_btn_wrapper'>
        <button
          className='Inter_B'
          onClick={onClickAdd}
        >
          Add todo
        </button>
      </div>
    </div>
  );
}
