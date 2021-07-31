interface ITodo {
    _id: string
    title: string
    active_state: boolean
    end_date: boolean
    createdAt?: string
    updatedAt?: string
  }
  
  interface TodoProps {
    todo: ITodo
  }
  
  type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
  }