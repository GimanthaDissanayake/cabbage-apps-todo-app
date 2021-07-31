import { Response, Request } from "express"
import { MyTodo } from "./../../types/todo"
import Todo from "../../models/todo"

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: MyTodo[] = await Todo.find()
    res.status(200).json({ todos })
  } catch (error) {
    throw error
  }
}

const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as Pick<MyTodo, "title" | "active_state" | "end_date">
  
      const todo: MyTodo = new Todo({
        title: body.title,
        active_state: body.active_state,
        end_date: body.end_date,
      })
  
      const newTodo: MyTodo = await todo.save()
      const allTodos: MyTodo[] = await Todo.find()
  
      res
        .status(201)
        .json({ message: "Todo added", todo: newTodo, todos: allTodos })
    } catch (error) {
      throw error
    }
}

const updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        params: { id },
        body,
      } = req
      const updateTodo: MyTodo | null = await Todo.findByIdAndUpdate(
        { _id: id },
        body
      )
      const allTodos: MyTodo[] = await Todo.find()
      res.status(200).json({
        message: "Todo updated",
        todo: updateTodo,
        todos: allTodos,
      })
    } catch (error) {
      throw error
    }
}

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedTodo: MyTodo | null = await Todo.findByIdAndRemove(
        req.params.id
      )
      const allTodos: MyTodo[] = await Todo.find()
      res.status(200).json({
        message: "Todo deleted",
        todo: deletedTodo,
        todos: allTodos,
      })
    } catch (error) {
      throw error
    }
}
  
  export { getTodos, addTodo, updateTodo, deleteTodo }