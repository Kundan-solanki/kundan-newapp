import React from 'react'
import './homestyle.css'

export default function Home() {

  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner h-70">
          <div className="carousel-item active">
            <img src="https://www.naukri.com/campus/career-guidance/wp-content/uploads/2024/12/IT-Project-Manager-Roles-and-Responsibilities-1024x576.jpg" className="d-block w-100 h-90" alt="..." />

          </div>
          <div>

          </div>
        </div>


        <div className='d-flex m-2 p-3'>

          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">Featured post</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="stretched-link">Continue reading</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09ImkbA35PAeU7bCMsvtvcaimxoUwxxBq1BGVNlAWcMrlhjahXynTmpSG6ATk1xpf_Ig&usqp=CAU" role="img"
                ></img>

              </div>
            </div>
          </div>

          {/* //  second box */}

          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">Featured post</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="stretched-link">Continue reading</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnLSrpwPrKY_k86NxD6GJThjGtCOCjYgfOhyP102VkWGgvQ9RIkAqFXIWlLeK7TdZ8_P8&usqp=CAU" role="img"
                ></img>

              </div>
            </div>
          </div>
        </div>


        {/* third box */}
        <div classNameName='p-3 m-3 d-flex'>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">Featured post</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="stretched-link">Continue reading</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwC5voq5Ib5P5pd74zrqgmyIx5a7gfKq47oMTfe1zobQ-qQdgYg7GF5BwCKVsGvvZsd1U&usqp=CAU" role="img"
                ></img>

              </div>
            </div>
          </div>


          {/* // four box hs */}
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">Featured post</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="stretched-link">Continue reading</a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy5TqDqBJ253y0Pqb-xFGBFvcY115VTaLvqDmdyVfX0sa5_aEn17xf7EO-coHhx6-y10g&usqp=CAU" role="img"
                ></img>

              </div>
            </div>
          </div>
        </div>

        <footer classNameName="footer">
          Made with ❤️ by Kundan
        </footer>




      </div>
    </div>
  )
}
