import { useState } from 'react';
// css
import './App.css';
// components
import { AddTodo } from './components/AddTodo';
import { NewTask } from './components/NewTask';
import { EditTodo } from './components/EditTodo';
// types
import { Todo } from './types/todo';


function App() {
  const statusArray: Array<string> = [
    'Waiting',
    'Working',
    'Completed'
  ];
  // const sortArray: Array<string> = [
  //   'Sort',
  //   ...statusArray
  // ];

  // useState
  const [newTodo, setNewTodo] = useState<Omit<Todo, "index">>({
    title: '',
    term: '',
    status: 'Waiting',
    cont: ''
  });
  const [editTodo, setEditTodo] = useState<Todo>({
    title: '',
    term: '',
    status: '',
    cont: '',
    index: 0
  });

  const edit_back: any = document.getElementById('edit_back');
  const edit_todo: any = document.getElementById('edit_todo');

  const [todoSort, setSort] = useState('Sort');
  const [newTask, setNewTask] = useState<Array<Todo>>([]);

  // input
  const onChangeTitle = (e) => setNewTodo((state) => ({ ...state, title: e.target.value}));
  const onChangeTerm = (e) => setNewTodo((state) => ({ ...state, term: e.target.value}));
  const onChangeStatus = (e) => setNewTodo((state) => ({ ...state, status: e.target.value}));
  const onChangeCont = (e) => setNewTodo((state) => ({ ...state, cont: e.target.value}));

  const onChangeEditTitle = (e) => setEditTodo((state) => ({ ...state, title: e.target.value}));
  const onChangeEditTerm = (e) => setEditTodo((state) => ({ ...state, term: e.target.value}));
  const onChangeEditStatus = (e) => setEditTodo((state) => ({ ...state, status: e.target.value}));
  const onChangeEditCont = (e) => setEditTodo((state) => ({ ...state, cont: e.target.value}));

  const onClickSort = () => {
    let task: any = [...newTask];
    if( todoSort == 'Descending' || todoSort == 'Sort'){
      setSort('Ascending')
      task.date.sort((a,b) => (a < b ? -1 : 1))
    }
    if( todoSort == 'Ascending' ){
      setSort('Descending')
      task.date.sort((a,b) => (a > b ? -1 : 1))

    }
    setNewTask(task);
  }

  // click
  const onClickAdd = () => {
    const newDate = new Date();
    const year = newDate.getFullYear(); // 年
    const month = newDate.getMonth(); // 月
    const date = newDate.getDate(); // 日
    const todoDate = `${year} / ${month} / ${date}`;

    // let sort: any;
    // if( todoSort === newTodo.status || todoSort === 'Sort' ){
    //   sort = 'visible'
    // } else{
    //   sort = 'invisible'
    // }

    const task: any = [...newTask];
    task.push({
      title: newTodo.title,
      term: newTodo.term,
      status: newTodo.status,
      cont: newTodo.cont,
      date: todoDate,
      // sort: sort
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
  const onClickDelete = (index: number) => {
    const todo = [...newTask];
    todo.splice(index,1)
    setNewTask(todo);
  };
  const onClickEdit = (index: number) => {
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

    let task: any = [...newTask];
    task[editTodo.index] = {
      title: editTodo.title,
      term: editTodo.term,
      status: editTodo.status,
      cont: editTodo.cont,
      date: editDate
    };
    // task.map((t) => {
    //   if( t.status === todoSort || todoSort === 'Sort' ){
    //     t.sort = 'visible'
    //   } else {
    //     t.sort = 'invisible'
    //   }
    // })
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
          onClickEdit = {onClickEdit}
          onClickDelete = {onClickDelete}
          onClickSort = {onClickSort}
          // sortArray = {sortArray}
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
