import { Document } from "mongoose"

export interface ITodo extends Document {
  title: string
  active_state: boolean
  end_date: Date
}