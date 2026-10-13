import React from 'react'

function Pagination({ totalProducts, cardPerPage, setCurrentPage,currentPage }) {

    let pages = []

    for (let i = 1; i <= totalProducts / cardPerPage; i++) {
        pages.push(i)
    }
    return (
        <>
            <button className='btn' onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage==1}>
                <i class="fa-solid fa-backward"></i>
            </button>

            {
                pages.map(page => (
                    <button onClick={() => setCurrentPage(page)} className={`btn mx-2 ${currentPage==page?'bg-success text-dark ':''}`}>{page}</button>
                ))
            }
            <button onClick={()=>setCurrentPage(currentPage+1)} className='btn ' disabled={currentPage==pages.length}>
                <i class="fa-solid fa-forward"></i>
            </button>


        </>
    )
}

export default Pagination