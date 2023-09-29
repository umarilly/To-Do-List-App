import React from 'react'
import { ITasks } from "@/types/tasks";
import Tasks from './Tasks';

interface TodoListProps {
    tasks: ITasks[];
}

const TodoList: React.FC<TodoListProps> = ({tasks}) => {
    return (
        <div>
            <div className="overflow-x-auto">

                <table className="table">

                    <thead>
                        <tr>
                            <th> Task </th>
                            <th> Actions </th>
                        </tr>
                    </thead>

                    <tbody>
                        {tasks.map((task) => (
                            < Tasks key={task.id} task={task} />
                        ))}

                    </tbody>

                </table>

            </div>
        </div>
    )
}

export default TodoList
