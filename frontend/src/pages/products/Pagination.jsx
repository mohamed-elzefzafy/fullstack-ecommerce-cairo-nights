


const Pagination = ({pages , currentPage , setcurrentPage}) => {
const generatedPages = []

  for(let i = 1 ; i <= pages ; i++) 
  {
      generatedPages.push(i);
    
  }

  return (
    <div className="pagination">
    <button disabled={currentPage === 1} onClick={()=> setcurrentPage(prev => prev -1 )} className="page previous">
  
    <i className="bi bi-caret-right"></i>
    </button>
    {generatedPages.map((page)=> {
      return (
        <div key={page} className={currentPage === page ? "page active" : "page"}  onClick={()=> setcurrentPage(page)}>
          {page}
          </div>
      )
    })}
<button disabled={currentPage === pages} onClick={()=> setcurrentPage(prev => prev + 1)} className="page next">
<i className="bi bi-caret-left"></i>
    </button>
  </div>
  )
}

export default Pagination;