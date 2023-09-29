
import React from 'react';
import AddTask from './components/AddTask';
import TodoList from './components/TodoList';
import { getAllTodos } from '@/api';

export default async function Home () {

  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <main  className="max-w-4xl mx-auto mt-8">
      <div className="text-center my-5 flex flex-col gap-4" > 
        <h1 className="text-3xl font-bold" > To Do List </h1>
        < AddTask />
      </div>
      < TodoList tasks={tasks} />
      
    </main>
  )
}


