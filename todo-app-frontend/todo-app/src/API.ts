import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    )
    return todos
  } catch (error) {
    throw new Error(error)
  }
}

export const addTodo = async (
    formData: ITodo
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const todo: Omit<ITodo, "_id"> = {
        title: formData.title,
        active_state: formData.active_state,
        end_date: formData.end_date,
      }
      const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
        baseUrl + "/add-todo",
        todo
      )
      return saveTodo
    } catch (error) {
      throw new Error(error)
    }
}

  export const updateTodo = async (
    todo: ITodo
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const todoUpdate: Pick<ITodo, "active_state"> = {
        active_state: todo.active_state,
      }
      const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
        `${baseUrl}/edit-todo/${todo._id}`,
        todoUpdate
      )
      return updatedTodo
    } catch (error) {
      throw new Error(error)
    }
}

export const deleteTodo = async (
    _id: string
  ): Promise<AxiosResponse<ApiDataType>> => {
    try {
      const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
        `${baseUrl}/delete-todo/${_id}`
      )
      return deletedTodo
    } catch (error) {
      throw new Error(error)
    }
}