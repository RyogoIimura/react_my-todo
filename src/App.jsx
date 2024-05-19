import React, { useState } from 'react';
import './App.css';

function App() {
  const statusArray = [
    'Waiting',
    'Working',
    'Completed'
  ];

  // useState
  const [todoTitle, setTodoTitle] = useState('');
  const [todoTerm, setTodoTerm] = useState('');
  const [todoStatus, setTodoStatus] = useState('Waiting');
  const [todoCont, setTodoCont] = useState('');

  const [newTask, setNewTask] = useState([]);

  // input
  const onChangeTitle = (e) => {
    setTodoTitle(e.target.value);
  };
  const onChangeTerm = (e) => {
    setTodoTerm(e.target.value);
  };
  const onChangeStatus = (e) => {
    setTodoStatus(e.target.value);
  };
  const onChangeCont = (e) => {
    setTodoCont(e.target.value);
  };

  // click
  const onClickAdd = () => {
    const newDate = new Date();
    const year = newDate.getFullYear(); // 年
    const month = newDate.getMonth(); // 月
    const date = newDate.getDate(); // 日
    const todoDate = `${year} / ${month} / ${date}`;

    const task = [...newTask];
    task.push({
      title: todoTitle,
      term: todoTerm,
      status: todoStatus,
      cont: todoCont,
      date: todoDate
    });
    setNewTask(task);
    setTodoTitle('');
    setTodoTerm('');
    setTodoStatus('Waiting');
    setTodoCont('');
  }

  return (
    <>
      <div className='todo'>
        <h1 className='Inter_B'>My todo APP</h1>

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

        <div className='new_task'>
          <h2 className='Inter_B'>New task</h2>
          <div className='sort_btn_wrapper'>
            <button className='sort_btn Inter_B'>Sort</button>
          </div>

          <ul>
            {
              newTask.map((task, index) => (
                <li key={index}>
                  <p>タイトル : {task.title}</p>
                  <p>期日 : {task.term}</p>
                  <p>ステータス : {task.status}</p>
                  <p>内容 : {task.cont}</p>
                  <p className='created_date'>作成日 : {task.date}</p>
                  <div className='task_btn_wrapper'>
                    <button
                      className='task_btn_edit Inter_B'
                    >
                      Edit
                    </button>
                    <p>&nbsp;/&nbsp;</p>
                    <button
                      className='task_btn_dis Inter_B'
                    >
                      Discontinued
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>

        </div>
      </div>
    </>
  );
}

export default App;
