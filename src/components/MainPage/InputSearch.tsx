import React, { FC } from 'react'
import { IInputSearch } from '../interfaces'

const InputSearch: FC<IInputSearch> = ({setSearch, getPosts}: IInputSearch) => {
  
  return (
    <div className='input-container'>
          <input 
            type="text" 
            placeholder='Поиск'
            onBlur={(e)=> setSearch(e.target.value)}
          />
          <div 
            className='icon'
            onClick={()=>getPosts()}
          />
      </div>
  )
}

export default InputSearch
