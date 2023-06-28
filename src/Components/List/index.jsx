import { useContext, useState } from 'react';
import { Pagination } from '@mantine/core';
import { SettingsContext } from '../../Context/Settings';

function List(props){
    const { pageItems, completed, sort } = useContext(SettingsContext);
    const [currentPage, setPage] = useState(1)
    const pages = Math.ceil(props.list.length / pageItems)

    const displayedItems = completed
    ? props.list.filter((item) => !item.complete)
    : props.list;

    const firstItem = (currentPage - 1) * pageItems;
    const lastItem = currentPage * pageItems;
    const finalItems = displayedItems.slice(firstItem, lastItem);


    return(
      <>
        {finalItems.map(item => (
        <div key={item.id} >
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}
      <Pagination value={currentPage} onChange={setPage} total={pages} />
      </>
    )
}

export default List;