
import React from 'react'
import { ITasks } from "@/types/tasks";

interface TaskProps {
    task: ITasks;
}

const Tasks: React.FC<TaskProps> = ( {task} ) => {
    return (
            <tr key={task.id} >
                <td> {task.text} </td>
                <td>Blue</td>
            </tr>
    )
}

export default Tasks
