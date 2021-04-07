const ListTodos = ({ todos, removeTodoList }) => {
  return (
    <ul>
      {todos.map(
        (todo: any, index: number) => {
          return (
            <li key={index}>
              {todo.title}
              <button
                // onClick={() => removeList(todo.id)}
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => removeTodoList(todo.id)}
              >
                x
              </button>
            </li>
          );
        }
        // Only do this if items have no stable IDs
      )}
    </ul>
  );
};

export default ListTodos;
