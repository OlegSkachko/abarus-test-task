import React, {FC, useState} from 'react'
import { ITableHead } from '../interfaces'

const TableHead: FC<ITableHead> = ({posts,setPosts}: ITableHead) => {
    const [rotateIconId, setRotateIconId ] = useState<boolean>(false)
    const [rotateIconTitle, setRotateIconTitle ] = useState<boolean>(false)
    const [rotateIconBody, setRotateIconBody ] = useState<boolean>(false)

    const sortFilter = (value: string, typeSort: boolean) => {
        let newPosts = [...posts]
        if(typeSort) newPosts.sort((a,b) => a[value] > b[value] ? 1 : -1)
        else newPosts.sort((a,b) => a[value] > b[value] ? -1 : 1)
        return newPosts
    }

    const filterPosts = (value:string) => {
        let filteredPosts 
        if(value === 'id') {
            setRotateIconId(!rotateIconId)
            filteredPosts = sortFilter(value, rotateIconId)
        }
        if(value === 'title') { 
            setRotateIconTitle(!rotateIconTitle)
            filteredPosts = sortFilter(value, rotateIconTitle)
            } else {
            setRotateIconBody(!rotateIconBody)
            filteredPosts = sortFilter(value, rotateIconBody)
        }
        setPosts(filteredPosts)
    }

  return (
    <div className='table-head'>
        <div className='table-head_title'>
          <span className='table-head_title1'>ID</span>
          <div 
            className={rotateIconId ? 'table-filter rotate' : 'table-filter'} 
            onClick={()=>filterPosts('id')}
          />
        </div>
        <div className='table-head_title'>
          <span className='table-head_title2'>Заголовок</span>
          <div 
            className={rotateIconTitle ? 'table-filter rotate' : 'table-filter'} 
            onClick={()=>filterPosts('title')}
          />
        </div>
        <div className='table-head_title'>
          <span className='table-head_title3'>Описание</span>
          <div 
            className={rotateIconBody ? 'table-filter rotate' : 'table-filter'} 
            onClick={()=>filterPosts('body')}
          />
        </div>
      </div>
  )
}

export default TableHead
