import React from 'react'

const AddNavbar = () => {
  return (
    <div>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Add">Add bus</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Delete">Delete bus</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Search">search bus</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>



        </div>
    </div>
</div>




    </div>
  )
}

export default AddNavbar