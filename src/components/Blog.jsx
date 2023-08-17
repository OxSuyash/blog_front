import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import "../styles/Blog.scss"
import { useEffect } from 'react'
import { server } from "../main"
import toast from "react-hot-toast"
import { useState } from 'react'



const Blog = () => {

  const [posts, setPosts] = useState([])


  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(`${server}/post/all`, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })

      setPosts(data.posts)

      // console.log(data.posts[0].title)
      console.log(posts)

    };

    getPosts()



    // (async (e)=> {
    //   e.preventDefault();

    //   const {data} = await axios.get(`${server}/post/all`, {
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     withCredentials: true
    //   })




    // })

    toast.success("success")


  }, [])



  return (
    <div className="blog-main">
      <div className="blog-page-title">
        <p>Blogs</p>
      </div>

      {
        posts.map(post => {
          return (
            <div className="card" key={post._id}>

              <div className="blogs">

                <div className="blog-card">
                  <div className="blog-title">
                    <h2>{post.title}</h2>
                  </div>
                  <div className="blog-desc">
                    <p>{post.body.slice(0,50)+"....."} </p>
                  </div>
                  <div className="blog-button">
                    <Link to={"/blog"} className="blog-link"><button>Read further</button></Link>
                  </div>
                </div>

              </div>


            </div>
          )
        })
      }




    </div>
  )
}

export default Blog