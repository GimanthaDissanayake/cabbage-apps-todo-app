import { MyTodo } from "../types/todo";
import { model, Schema } from "mongoose";

const todoSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        active_state: {
            type: Boolean,
            required: true,
        },
        end_date: {
            type: Date,
            required: true,
        },
    },
    {timestamps: true}
)

export default model<MyTodo>("Todo", todoSchema)