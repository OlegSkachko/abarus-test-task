import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IPageFooter } from '../interfaces'

const PageFooter: FC<IPageFooter> = ({setPages, pages, setPage, page}: IPageFooter) => {

    const toBackPage = () => {
        let newPage = page - 1
        if(newPage >= 1) setPage(newPage)
        if(newPage<pages[0] && newPage >= 1) {
            let newPages = pages.map((page) => page - 1)
            setPages(newPages)
        }
    }

    const toNextPage = () => {
        let newPage = page + 1
        if(newPage <= 10) setPage(newPage)
        if(newPage>pages[4] && newPage <= 10) {
            let newPages = pages.map((page) => page + 1)
            setPages(newPages)
        }
    }

  return (
    <div className='page-container'>
        <Link className='link' to={`/${page}`}>
          <span className='page-text' onClick={toBackPage}>Назад</span>
        </Link>
        <div className='page-numbers'>
            {pages.map(el => 
              <Link className='link' to={`/${el}`}>
                  <div 
                    key={el} 
                    onClick={()=>setPage(el)} 
                    className={el === page ? 'active page-number' : 'page-number' }
                  >
                    {el}
                  </div>
              </Link>
            )}
          </div>
          <Link className='link' to={`/${page+1}`}>
            <span className='page-text' onClick={toNextPage}>Далее</span>
          </Link>
      </div>
  )
}

export default PageFooter