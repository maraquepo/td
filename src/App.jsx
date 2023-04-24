import './App.css';
import { TasksProvider } from './TasksProvider';
import AddTask from './components/AddTask';
import Btn from './components/Btn';
import Tasks from './components/Tasks';
import { Paper } from '@mui/material';

function App() {
  return (
    <TasksProvider>
      <Paper className='p-3' sx={{ borderRadius: '12px', width: '500px'}}>
        <h1 className='p-5'>Task Tracker</h1>
        <Tasks />
        <AddTask />
        {/* <Btn /> */}
      </Paper>
    </TasksProvider>
  );
}

export default App;
