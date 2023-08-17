import React from 'react'
import "../styles/Project.scss"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { server } from "../main"
import axios from "axios"
import toast from "react-hot-toast"

const Project = () => {

    const [project, setProject] = useState([])

    useEffect(() => {
        const getProjects = async () => {
            const { data } = await axios.get(`${server}/project/all`, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })

            setProject(data.projects)

            // console.log(data.posts[0].title)
            console.log(project)

        };

        getProjects()



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
        <div className="project">
            <div className="page-title">
                <p>Projects</p>
            </div>

            {
                project.map(project => {
                    return (
                        <div className="card" key={project._id}>

                            <div className="project-card">
                                <div className="project-title">
                                    <h2>{project.title}</h2>
                                </div>
                                <div className="project-desc">
                                    <p>{project.description}</p>
                                </div>
                                <div className="project-button">
                                    <Link to={project.link} className="project-link" target="_blank"><button>Go to project</button></Link>
                                </div>
                            </div>

                        </div>
                    )
                })
            }

            {/* {
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
      } */}






        </div>
    )
}

export default Project