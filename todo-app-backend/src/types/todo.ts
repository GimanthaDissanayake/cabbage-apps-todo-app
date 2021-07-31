import { Document } from "mongoose"

export interface MyTodo extends Document {
  title: string
  active_state: boolean
  end_date: Date
}