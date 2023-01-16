import React from 'react'

export const HeaderMenu = ({categories}) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand p-2" href="#">Gif Expert App</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
            {categories.map((category, index) => {
            return (
                <li key={index} className="nav-item active">
                    <a className="nav-link" href={'#' + category}>{category} 
                    <span className="sr-only">{index == 0 &&'(current)'}</span>
                    </a>
                </li>
                ) 
            })}
        </ul>
      </div>
    </nav>
  )
}
