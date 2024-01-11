import TodoItem from "../todoItem";
import "./index.scss";

const TodoList = ({ list, setListData }) => {
  return (
    <div className="TodoList">
      {list.map((item) => (
        <TodoItem todoData={item} setListData={setListData} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
