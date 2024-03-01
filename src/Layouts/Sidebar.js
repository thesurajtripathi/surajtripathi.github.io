import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';

function Sidebar(props) {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

  return (
    <nav id="sidebar">
            <div className="sidebar-header">
                <h3>ReactJS</h3>
            </div>
            <ul className="list-unstyled components">
                <p>Get Start</p>
                <li className="active">
                    <Link to="/">Home</Link>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"  onClick={() => setOpen(!open)} >Installation</a>
                    <Collapse in={open}>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Home 1</a>
                            </li>
                            <li>
                                <a href="#">Home 2</a>
                            </li>
                            <li>
                                <a href="#">Home 3</a>
                            </li>
                        </ul>
                    </Collapse>
                    <a href="#components" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"  onClick={() => setOpen1(!open1)} >Components</a>
                    <Collapse in={open1}>
                        <ul className="collapse list-unstyled" id="components">
                            <li>
                                <Link to="/components/class">Class Components</Link>
                            </li>
                            <li>
                            <Link to="/components/functional">Functional Components</Link>
                            </li>
                        </ul>
                    </Collapse>
                    <a href="#components" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"  onClick={() => setOpen2(!open2)} >Refs</a>
                    <Collapse in={open2}>
                        <ul className="collapse list-unstyled" id="components">
                            <li>
                                <Link to="/refs/inputref">Refs Input</Link>
                            </li>
                            <li>
                                <Link to="/refs/farref">Functional Components</Link>
                            </li>
                        </ul>
                    </Collapse>
                    <Link to="/hoc">HOC</Link>
                    <a href="#components" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"  onClick={() => setOpen3(!open3)} >Hooks</a>
                    <Collapse in={open3}>
                        <ul className="collapse list-unstyled" id="components">
                            <li>
                                <Link to="/hook">Simple</Link>
                            </li>
                            <li>
                                <Link to="/hook/counter1">Mulltiple State</Link>
                            </li>
                            <li>
                                <Link to="/hook/counter3">Mulltiple State Object</Link>
                            </li>
                            <li>
                                <Link to="/hook/counter4">Mulltiple State Array</Link>
                            </li>
                        </ul>
                    </Collapse>
                    <a href="#components" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"  onClick={() => setOpen4(!open4)} >Use Effect</a>
                    <Collapse in={open4}>
                        <ul className="collapse list-unstyled" id="components">
                            <li>
                                <Link to="/effect">Simple</Link>
                                <Link to="/effect/class">Class</Link>
                            </li>
                        </ul>
                    </Collapse>
                </li>             
            </ul>

            <ul className="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
                </li>
            </ul>
    </nav>
  )
}

export default Sidebar