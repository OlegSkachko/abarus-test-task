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
          <span 
            className='table-head_title1'   
            onClick={()=>filterPosts('id')}
          >
            ID
          </span>
          <div 
            className={rotateIconId ? 'table-filter rotate' : 'table-filter'} 
          />
        </div>
        <div className='table-head_title'>
          <span 
            className='table-head_title2'
            onClick={()=>filterPosts('title')}
          >
            Заголовок
          </span>
          <div 
            className={rotateIconTitle ? 'table-filter rotate' : 'table-filter'}
          />
        </div>
        <div className='table-head_title'>
          <span 
            className='table-head_title3'
            onClick={()=>filterPosts('body')}
          >
            Описание
          </span>
          <div 
            className={rotateIconBody ? 'table-filter rotate' : 'table-filter'} 
          />
        </div>
      </div>
  )
}

export default TableHead
