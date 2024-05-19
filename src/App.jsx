import { useState } from 'react';
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
    if( todoSort === todoStatus || todoSort === 'Sort' ){
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
          todoTitle = {todoTitle}
          todoTerm = {todoTerm}
          todoStatus = {todoStatus}
          todoCont = {todoCont}
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
          editTitle = {editTitle}
          editTerm = {editTerm}
          editStatus = {editStatus}
          editCont = {editCont}
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
