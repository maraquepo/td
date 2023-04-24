import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTasksContext } from '../TasksProvider';

const Tasks = () => {
  const { tasks, handleToggle, handleDelete, checked } = useTasksContext();

  return (
    <List sx={{ width: '100%' }}>
      {tasks.map((task, value) => {
        const isTaskChecked = checked.indexOf(value) !== -1;
        return (
          <ListItem
            key={task.id}
            disablePadding
          >
            <ListItemButton onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge='start'
                  checked={isTaskChecked}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText
                id={task.id}
                primary={task.text}
                sx={isTaskChecked ? { textDecoration: 'line-through' } : {}}
              />
            </ListItemButton>
            {isTaskChecked && (
              <IconButton onClick={handleDelete(task.id)}>
                <DeleteIcon />
              </IconButton>
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

export default Tasks;
