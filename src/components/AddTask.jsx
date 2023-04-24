import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useTasksContext } from '../TasksProvider';

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const { handleAddTask } = useTasksContext();

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (taskText.trim() === '') {
      return;
    }
    handleAddTask(taskText);
    setTaskText('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleAddButtonClick();
    }
  };

  return (
    <form className='flex items-center'>
      <div className='flex justify-center w-full space-x-2'>
        <TextField
          hiddenLabel
          id='filled-hidden-label-small'
          value={taskText}
          onChange={handleTaskTextChange}
          variant='filled'
          size='small'
          autoComplete='off'
          placeholder='Add Task'
          onKeyDown={handleKeyDown}
          className='w-9/12'
        />
        <Button variant='contained' size='small' onClick={handleAddButtonClick}>
          Save Task
        </Button>
      </div>
    </form>
  );
};

export default AddTask;
