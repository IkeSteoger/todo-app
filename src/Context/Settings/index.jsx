import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({ children }){
  const [pageItems, setPageItems] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');

  // useEffect(() => {
  //   const pageItemData = JSON.parse(localStorage.getItem('pageItems'));
  //   const showCompletedData = JSON.parse(localStorage.getItem('showCompleted'));
  //   const sortData = JSON.parse(localStorage.getItem('sort'));

  //   if(pageItemData){
  //     setPageItems(pageItemData)
  //   }
  //   if(showCompletedData){
  //     setShowCompleted(showCompletedData)
  //   }
  //   if(sortData){
  //     setSort(sortData)
  //   }
  // }, [])

  useEffect(() => {
    const pageItemData = JSON.parse(localStorage.getItem('pageItems'));
    if(pageItemData){
      setPageItems(pageItemData)
    }
  }, [])

  useEffect(() => {
    const showCompletedData = JSON.parse(localStorage.getItem('showCompleted'));
    if(showCompletedData){
      setShowCompleted(showCompletedData)
    }
  }, [])

  useEffect(() => {
    const sortData = JSON.parse(localStorage.getItem('sort'));
    if(sortData){
      setSort(sortData)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('pageItem', JSON.stringify(pageItems))
  }, [pageItems])

  useEffect(() => {
    localStorage.setItem('showCompleted', JSON.stringify(showCompleted))
  }, [showCompleted])

  useEffect(() => {
    localStorage.setItem('sort', JSON.stringify(sort))
  }, [sort])

  const values = {
    pageItems,
    setPageItems,
    showCompleted,
    setShowCompleted,
    sort,
    setSort,
  }

  return(
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;