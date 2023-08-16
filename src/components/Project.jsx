import React from 'react'
import "../styles/Project.scss"
import { Link } from 'react-router-dom'

const Project = () => {
    return (
        <div className="project">
            <div className="page-title">
                <p>Projects</p>
            </div>
            
            <div className="project-card">
                <div className="project-title">
                    <h2>Project Title 1</h2>
                </div>
                <div className="project-desc">
                    <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
                </div>
                <div className="project-button">
                    <Link to={"/project"} className="project-link"><button>Go to project</button></Link>
                </div>
            </div>
            <div className="project-card">
                <div className="project-title">
                    <h2>Project Title 2</h2>
                </div>
                <div className="project-desc">
                    <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
                </div>
                <div className="project-button">
                    <Link to={"/project"} className="project-link"><button>Go to project</button></Link>
                </div>
            </div>
            <div className="project-card">
                <div className="project-title">
                    <h2>Project Title 3</h2>
                </div>
                <div className="project-desc">
                    <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
                </div>
                <div className="project-button">
                    <Link to={"https://youtube.com"} className="project-link"><button>Go to project</button></Link>
                </div>
            </div>
            <div className="project-card">
                <div className="project-title">
                    <h2>Project Title 4</h2>
                </div>
                <div className="project-desc">
                    <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
                </div>
                <div className="project-button">
                    <Link to={"https://youtube.com"} className="project-link"><button>Go to project</button></Link>
                </div>
            </div>
            <div className="project-card">
                <div className="project-title">
                    <h2>Project Title 5</h2>
                </div>
                <div className="project-desc">
                    <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
                </div>
                <div className="project-button">
                    <Link to={"https://youtube.com"} className="project-link"><button>Go to project</button></Link>
                </div>
            </div>
            <div className="project-card">
                <div className="project-title">
                    <h2>Project Title 6</h2>
                </div>
                <div className="project-desc">
                    <p>Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis incidunt eos qui dolores id odio, atque cum et ut possimus deleniti perspiciatis iusto quasi sed? Consectetur provident totam unde repellat?</p>
                </div>
                <div className="project-button">
                    <Link to={"https://youtube.com"} className="project-link"><button>Go to project</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Project