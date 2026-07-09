import React from 'react'

const NavBar = () => {
  return (
<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Employee</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/add">Add Employee</a>
        <a class="nav-link" href="/search">Search Employee</a>
        <a class="nav-link" href="/delete">Delete Employee</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar