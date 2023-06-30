import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Pagination, Card, Badge, CloseButton} from '@mantine/core';
import { When } from 'react-if';
import Auth from '../Auth';

function List({list, toggleComplete, deleteItem}){
    const { pageItems, showCompleted } = useContext(SettingsContext);
    const [currentPage, setPage] = useState(1)
    
    const displayedItems = showCompleted
    ? list
    : list.filter((item) => !item.complete);
    
    const pages = Math.ceil(displayedItems.length / pageItems)
    const firstItem = (currentPage - 1) * pageItems;
    const lastItem = currentPage * pageItems;
    const finalItems = displayedItems.slice(firstItem, lastItem);


    return(
      <>
        {finalItems.map(item => (
        <Card shadow="sm" padding="lg" radius="md" withBorder key={item.id} >
          <When condition={!item.complete}>
            <Badge color="green" variant="filled" onClick={() => toggleComplete(item.id)}>Pending</Badge> {item.assignee}    
            <Auth capability={'delete'}>
              <CloseButton onClick={() => deleteItem(item.id)}/>
            </Auth>
            <hr />
            <p>{item.text}</p>
            <p><small>Difficulty: {item.difficulty}</small></p>
          </When>
          <When condition={item.complete}>
            <Badge color="red" variant="filled" onClick={() => toggleComplete(item.id)}>Completed</Badge> {item.assignee}
            <Auth capability={'delete'}>
              <CloseButton onClick={() => deleteItem(item.id)}/>
            </Auth>
            <hr />
            <p>{item.text}</p>
            <p><small>Difficulty: {item.difficulty}</small></p>
          </When>
        </Card>
      ))}
      <Pagination value={currentPage} onChange={setPage} total={pages} />
      </>
    )
}

export default List;