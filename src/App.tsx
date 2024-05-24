import React, { useState } from 'react';
import { AddTodo } from './components/AddTodo';
import { NewTask } from './components/NewTask';
import { EditTodo } from './components/EditTodo';
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
  const [newTodo, setNewTodo] = useState({
    title: '',
    term: '',
    status: 'Waiting',
    cont: ''
  });

  const [editTodo, setEditTodo] = useState({
    title: '',
    term: '',
    status: '',
    cont: '',
    index: ''
  });

  const edit_back = document.getElementById('edit_back');
  const edit_todo = document.getElementById('edit_todo');

  const [todoSort, setSort] = useState('Sort');
  const [newTask, setNewTask] = useState([]);

  // input
  const onChangeTitle = (e) => setNewTodo((state) => ({ ...state, title: e.target.value}));
  const onChangeTerm = (e) => setNewTodo((state) => ({ ...state, term: e.target.value}));
  const onChangeStatus = (e) => setNewTodo((state) => ({ ...state, status: e.target.value}));
  const onChangeCont = (e) => setNewTodo((state) => ({ ...state, cont: e.target.value}));

  const onChangeEditTitle = (e) => setEditTodo((state) => ({ ...state, title: e.target.value}));
  const onChangeEditTerm = (e) => setEditTodo((state) => ({ ...state, term: e.target.value}));
  const onChangeEditStatus = (e) => setEditTodo((state) => ({ ...state, status: e.target.value}));
  const onChangeEditCont = (e) => setEditTodo((state) => ({ ...state, cont: e.target.value}));

  const onChangeSort = (e) => {
    const sort = e.target.value;
    setSort(sort);

    let task = [...newTask];
    task.map((t) => {
      if( t.status === sort || sort === 'Sort' ){
        t.sort = 'visible'
      } else {
        t.sort = 'invisible'
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
    if( todoSort === newTodo.status || todoSort === 'Sort' ){
      sort = 'visible'
    } else{
      sort = 'invisible'
    }

    const task = [...newTask];
    task.push({
      title: newTodo.title,
      term: newTodo.term,
      status: newTodo.status,
      cont: newTodo.cont,
      date: todoDate,
      sort: sort
    });
    setNewTask(task);
    console.log(task);
    setNewTodo({
      title: '',
      term: '',
      status: 'Waiting',
      cont: ''
    });
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
    setEditTodo({
      title: newTask[index].title,
      term: newTask[index].term,
      status: newTask[index].status,
      cont: newTask[index].cont,
      index: index
    });
  }
  const onClickEditKeep = () => {
    const newDate = new Date();
    const year = newDate.getFullYear(); // 年
    const month = newDate.getMonth(); // 月
    const date = newDate.getDate(); // 日
    const editDate = `${year} / ${month} / ${date}`;

    let task = [...newTask];
    task[editTodo.index] = {
      title: editTodo.title,
      term: editTodo.term,
      status: editTodo.status,
      cont: editTodo.cont,
      date: editDate
    };
    task.map((t) => {
      if( t.status === todoSort || todoSort === 'Sort' ){
        t.sort = 'visible'
      } else {
        t.sort = 'invisible'
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

        <AddTodo
          todoTitle = {newTodo.title}
          todoTerm = {newTodo.term}
          todoStatus = {newTodo.status}
          todoCont = {newTodo.cont}
          onChangeTitle = {onChangeTitle}
          onChangeTerm = {onChangeTerm}
          onChangeStatus = {onChangeStatus}
          onChangeCont = {onChangeCont}
          onClickAdd = {onClickAdd}
          statusArray = {statusArray}
        />

        <NewTask
          todoSort = {todoSort}
          newTask = {newTask}
          onChangeSort = {onChangeSort}
          onClickEdit = {onClickEdit}
          onClickDelete = {onClickDelete}
          sortArray = {sortArray}
        />

        <div className='edit_back' id='edit_back'>
        </div>
        <EditTodo
          editTitle = {editTodo.title}
          editTerm = {editTodo.term}
          editStatus = {editTodo.status}
          editCont = {editTodo.cont}
          onChangeEditTitle = {onChangeEditTitle}
          onChangeEditTerm = {onChangeEditTerm}
          onChangeEditStatus = {onChangeEditStatus}
          onChangeEditCont = {onChangeEditCont}
          onClickEditKeep = {onClickEditKeep}
          statusArray = {statusArray}
        />
      </div>
    </>
  );
}

export default App;
