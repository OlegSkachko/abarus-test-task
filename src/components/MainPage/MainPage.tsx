import React, { FC, useEffect, useState } from 'react'
import './index.css'
import { IPost } from '../interfaces';
import { useFetcherPosts } from '../hooks/useFetcherPosts';
import InputSearch from './InputSearch';
import PageFooter from './PageFooter';
import TableHead from './TableHead';


const MainPage: FC = () => {
  const [page, setPage] = useState<number>(1)
  const [pages, setPages] = useState<number[]>([1,2,3,4,5])
  const [search, setSearch] = useState<string>('')
  const {posts, setPosts, getPosts } = useFetcherPosts(search, page)
  
  useEffect(()=> { 
    getPosts()
    // eslint-disable-next-line
  }, [page])
  
  
  return (
    <div className='main-page'>
      <InputSearch 
        setSearch={setSearch} 
        getPosts={getPosts}
      />
      <div className='container'>
        <TableHead posts={posts} setPosts={setPosts}/>
        <div className='table'>
          { posts.length >= 1 && 
            posts.map((post:IPost, index) => {
              return (
                <React.Fragment key={index}>
                  <div className='table-body'>{post.id}</div>
                  <div className='table-body'>{post.title}</div>
                  <div className='table-body'>{post.body}</div>
                </React.Fragment>
              )
            })
          }
        </div>
      </div>
      <PageFooter 
        setPages={setPages} 
        pages={pages} 
        setPage={setPage} 
        page={page}
      />
    </div>
  )
}

export default MainPage
