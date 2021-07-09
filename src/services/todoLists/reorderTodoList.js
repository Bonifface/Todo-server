import { todo } from "../../models/todo.js";

const getNewTodos = (todos, fromIndex, toIndex) => {
  const result = Array.from(todos);
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
};

const getBulkNewTodos = (newTodos) =>
  newTodos.map((el, index) => ({
    updateOne: {
      filter: { _id: el._id },
      update: {
        $set: {
          _id: el._id,
          text: el.text,
          active: el.active,
          position: index,
        },
      },
    },
  }));

export const reorderTodoList = async (req, res) => {
  try {
    const { id,todos, fromIndex, toIndex } = req.body;


    // const todoss = await todo.find(
    //   { id: id },
    //   { text: true, active: true, position: true }
    // );
    console.log(todos);
    // console.log(todoss)

    const newPositions = getNewTodos(todos, fromIndex, toIndex);
    // console.log(newPositions)
    const bulkNewTodos = getBulkNewTodos(newPositions);

    await todo.bulkWrite(bulkNewTodos);

    const newTodos = await todo.find(
      { id: id },
      { text: true, active: true, position: true }
    );

    return res.json(newTodos);
  } catch (e) {
    res.status(500).json(e);
  }
};
