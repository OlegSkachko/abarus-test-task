import axios from 'axios'
import { useState } from 'react'
import { IPost } from '../interfaces';

export function useFetcherPosts(search:string, page: number) {
  const [posts, setPosts] = useState<IPost[]>([])

  const getPosts = async () => {
    await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((response)=> {
        let posts: IPost[] = response.data
        if(search !== '') {
          let searchReg = new RegExp(search, 'gmi')
          posts = posts.filter((post)=> {
            let title = post.title
            return title.search(searchReg) !== -1
          })
          .sort((a,b) => a.id > b.id ? 1 : -1)
          while(posts.length<10) {
          posts.push({userId: '', id: '', title: '', body: ''})
          }
        }
        setPosts(posts)
      })
      .catch((err) => console.log(err))
    }

  return {getPosts, posts, setPosts}
}