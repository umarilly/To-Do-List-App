
'use client';

import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Model from './Model';

const AddTask = () => {

    const [modelOpen, setModelOpen] = useState<boolean>(false);

    return (
        <>
            <div>
                <button className='btn btn-primary w-full' onClick={ () => setModelOpen(true)}> ADD NEW TASK <AddIcon className='text-2xl' /> </button>
            </div>
            
            <Model modelOpen={modelOpen} setModelOpen = {setModelOpen} >
                <form>
                    <h3 className='font-bold text-lg' > Add new task </h3>
                    <div className='modal-action' >
                    <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </Model>
        </>
    );
};

export default AddTask;
