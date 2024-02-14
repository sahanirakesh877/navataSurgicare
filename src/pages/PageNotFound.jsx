import React from 'react'

const PageNotFound = () => {
  return (
    <>
 <div className="container">
  <div className="row" style={{padding:'140px 0'}}>
    <div className="col-md-12">
      <div className="error-template">
        <h1>
          Oops!</h1>
        <h2 className='text-danger'>
          404 Not Found</h2>
        <div className="error-details">
          Sorry, an error has occured, Requested page not found!
        </div>
        <div className="error-actions">
          <a href="/" className="btn btn-primary btn-lg"><i class="bi bi-house-add-fill"></i>
            Take Me Home </a><a href="/contact" className="btn btn-success btn-lg"><i class="bi bi-person-rolodex"></i> Contact Support </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default PageNotFound
