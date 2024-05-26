import { ChakraProvider, Button } from "@chakra-ui/react";

export const EditTodo = (props) => {

  // 分割代入
  const {
    editTitle,
    editTerm,
    editStatus,
    editCont,
    onChangeEditTitle,
    onChangeEditTerm,
    onChangeEditStatus,
    onChangeEditCont,
    onClickEditKeep,
    statusArray
  } = props;

  return (
    <ChakraProvider>
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
          <Button
            className='Inter_B'
            onClick={onClickEditKeep}
          >
            Keep
          </Button>
        </div>
      </div>
    </ChakraProvider>
  );
}
