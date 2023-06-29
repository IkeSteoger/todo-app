import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import List from '../List';
import { Button, TextInput, Grid, Slider, Card, createStyles } from '@mantine/core';
import { v4 as uuid } from 'uuid';

const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '16px auto',
    padding: '16px',
    width: '80%',
    fontFamily: 'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  }
}));

const Todo = () => {

  const { classes } = useStyles();
  const [defaultValues] = useState({
    difficulty: 3,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);  

  return (
    <>
      <h1 data-testid="header-h1" className={classes.h1}>To Do List: {incomplete} items pending</h1>
      {/* leave the form code inside of the Todo Component */}
      <Grid style={{width: '80%', margin: 'auto'}}>
        <Grid.Col span={6}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
          <form onSubmit={handleSubmit}>
            <h2>Add To Do Item</h2>

            <label>
              <span>To Do Item</span>
              <TextInput onChange={handleChange} name="text" type="text" placeholder="Item Details" />
            </label>

            <label>
              <span>Assigned To</span>
              <TextInput onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
            </label>
            <label>
              <span>Difficulty</span>
              <Slider
                    marks={[
                      { value: 20 },
                      { value: 40 },
                      { value: 60 },
                      { value: 80 },
                      { value: 100 },
                    ]}
                    onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty"/>
            </label>

            <label>
              <Button type="submit">Add Item</Button>
            </label>
          </form>
          </Card>
        </Grid.Col>
        <Grid.Col span={6}>
          <Card shadow="sm" padding="lg" radius="md" withBorder >
            <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
          </Card>
        </Grid.Col>
        </Grid>
    </>
  );
};

export default Todo;
