import React, { useState } from 'react';
import './App.css';

function App() {
  const statusArray = [
    'Waiting',
    'Working',
    'Completed'
  ];
  const sortArray = [
    'Sort',
    ...statusArray
  ];

  // useState
  const [todoTitle, setTodoTitle] = useState('');
  const [todoTerm, setTodoTerm] = useState('');
  const [todoStatus, setTodoStatus] = useState('Waiting');
  const [todoCont, setTodoCont] = useState('');

  const [todoSort, setTodoSort] = useState('Sort');

  const [editIndex, setEditIndex] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editTerm, setEditTerm] = useState('');
  const [editStatus, setEditStatus] = useState('');
  const [editCont, setEditCont] = useState('');

  const edit_back = document.getElementById('edit_back');
  const edit_todo = document.getElementById('edit_todo');

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

  const onChangeEditTitle = (e) => {
    setEditTitle(e.target.value);
  };
  const onChangeEditTerm = (e) => {
    setEditTerm(e.target.value);
  };
  const onChangeEditStatus = (e) => {
    setEditStatus(e.target.value);
  };
  const onChangeEditCont = (e) => {
    setEditCont(e.target.value);
  };

  const onChangeSort = (e) => {
    const sort = e.target.value;
    setTodoSort(sort);

    let task = [...newTask];
    task.map((t) => {
      if( t.status === sort ){
        t.sort = 'invisible'
      } else {
        t.sort = 'visible'
      }
    })
    setNewTask(task);
  }

  // click
  const onClickAdd = () => {
    const newDate = new Date();
    const year = newDate.getFullYear(); // 年
    const month = newDate.getMonth(); // 月
    const date = newDate.getDate(); // 日
    const todoDate = `${year} / ${month} / ${date}`;

    let sort;
    if( todoSort !== todoStatus){
      sort = 'visible'
    } else{
      sort = 'invisible'
    }

    const task = [...newTask];
    task.push({
      title: todoTitle,
      term: todoTerm,
      status: todoStatus,
      cont: todoCont,
      date: todoDate,
      sort: sort
    });
    setNewTask(task);
    setTodoTitle('');
    setTodoTerm('');
    setTodoStatus('Waiting');
    setTodoCont('');
  };
  const onClickDelete = (index) => {
    const todo = [...newTask];
    todo.splice(index,1)
    setNewTask(todo);
  };
  const onClickEdit = (index) => {
    document.body.classList.add('visible');
    edit_back.classList.add('visible');
    edit_todo.classList.add('visible');
    setEditIndex(index);
    setEditTitle(newTask[index].title);
    setEditTerm(newTask[index].term);
    setEditStatus(newTask[index].status);
    setEditCont(newTask[index].cont);
  }
  const onClickEditKeep = () => {
    const newDate = new Date();
    const year = newDate.getFullYear(); // 年
    const month = newDate.getMonth(); // 月
    const date = newDate.getDate(); // 日
    const editDate = `${year} / ${month} / ${date}`;

    let task = [...newTask];
    task[editIndex] = {
      title: editTitle,
      term: editTerm,
      status: editStatus,
      cont: editCont,
      date: editDate
    };
    task.map((t) => {
      if( t.status === todoSort ){
        t.sort = 'invisible'
      } else {
        t.sort = 'visible'
      }
    })
    setNewTask(task);

    document.body.classList.remove('visible');
    edit_back.classList.remove('visible');
    edit_todo.classList.remove('visible');
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

        <div className='edit_back' id='edit_back'>
        </div>
        <div className='edit_todo' id='edit_todo'>
          <div className='edit_todo_cont'>
            <p>タイトル</p>
            <input
              id='editTitle'
              value={editTitle}
              onChange={onChangeEditTitle}
            />
          </div>
          <div className='edit_todo_cont'>
            <p>期日</p>
            <input
              id='editTerm'
              value={editTerm}
              onChange={onChangeEditTerm}
            />
          </div>
          <div className='edit_todo_cont'>
            <p>ステータス</p>
            <select
              id='editStatus'
              value={editStatus}
              onChange={onChangeEditStatus}
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
          <div className='edit_todo_cont'>
            <p>内容</p>
            <input
              id='editCont'
              value={editCont}
              onChange={onChangeEditCont}
            />
          </div>
          <div className='edit_btn_wrapper'>
            <button
              className='Inter_B'
              onClick={onClickEditKeep}
            >
              Keep
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
