import { ChakraProvider, Button } from "@chakra-ui/react";

export const NewTask = (props) => {

  // 分割代入
  const {
    todoSort,
    newTask,
    onClickEdit,
    onClickDelete,
    onClickSort,
    // sortArray
  } = props;

  return (
    <ChakraProvider>
      <div className='new_task'>
        <h2 className='Inter_B'>New task</h2>
        <div className='sort_btn_wrapper'>
          <Button
            className='sort Inter_B'
            id='sort'
            onClick={onClickSort}
          >
            {todoSort}
          </Button>
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
                  <Button
                    className='task_btn_edit Inter_B'
                    onClick={() => onClickEdit(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    className='task_btn_dis Inter_B'
                    onClick={() => onClickDelete(index)}
                  >
                    Discontinued
                  </Button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </ChakraProvider>
  );
}
