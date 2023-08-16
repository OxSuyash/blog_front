import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Blog.scss"

const Blog = () => {
  return (
    <div className="blog-main">
      <div className="blog-page-title">
        <p>Blogs</p>
      </div>
      <div className="blogs">

        <div className="blog-card">
          <div className="blog-title">
            <h2>Blog Title 1</h2>
          </div>
          <div className="blog-desc">
            <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
          </div>
          <div className="blog-button">
            <Link to={"/blog"} className="blog-link"><button>Read further</button></Link>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-title">
            <h2>Blog Title 2</h2>
          </div>
          <div className="blog-desc">
            <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
          </div>
          <div className="blog-button">
            <Link to={"/blog"} className="blog-link"><button>Read further</button></Link>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-title">
            <h2>Blog Title 3</h2>
          </div>
          <div className="blog-desc">
            <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
          </div>
          <div className="blog-button">
            <Link to={"/blog"} className="blog-link"><button>Read further</button></Link>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-title">
            <h2>Blog Title 4</h2>
          </div>
          <div className="blog-desc">
            <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
          </div>
          <div className="blog-button">
            <Link to={"/blog"} className="blog-link"><button>Read further</button></Link>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-title">
            <h2>Blog Title 5</h2>
          </div>
          <div className="blog-desc">
            <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
          </div>
          <div className="blog-button">
            <Link to={"/blog"} className="blog-link"><button>Read further</button></Link>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-title">
            <h2>Blog Title 6</h2>
          </div>
          <div className="blog-desc">
            <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
          </div>
          <div className="blog-button">
            <Link to={"/blog"} className="blog-link"><button>Read further</button></Link>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-title">
            <h2>Blog Title 7</h2>
          </div>
          <div className="blog-desc">
            <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
          </div>
          <div className="blog-button">
            <Link to={"/blog"} className="blog-link"><button>Read further</button></Link>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-title">
            <h2>Blog Title 8</h2>
          </div>
          <div className="blog-desc">
            <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
          </div>
          <div className="blog-button">
            <Link to={"/blog"} className="blog-link"><button>Read further</button></Link>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-title">
            <h2>Blog Title 9</h2>
          </div>
          <div className="blog-desc">
            <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
          </div>
          <div className="blog-button">
            <Link to={"/blog"} className="blog-link"><button>Read further</button></Link>
          </div>
        </div>

        <div className="blog-card">
          <div className="blog-title">
            <h2>Blog Title 10</h2>
          </div>
          <div className="blog-desc">
            <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
          </div>
          <div className="blog-button">
            <Link to={"/blog"} className="blog-link"><button>Read further</button></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blog