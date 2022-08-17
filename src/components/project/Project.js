import React from 'react'
import './Project.css'
import portfolio from '../../assets/frontend-portfolio.png'
import frontend_portfolio from '../../assets/frontend-portfolio.png'
import news_app from '../../assets/news-app.png'
import shopping_app from '../../assets/shopping-app.png'
import task_manager from '../../assets/task-manager.png'
import sudoku from '../../assets/sudoku.png'
import pong from '../../assets/pong.png'

const project = () => {
  return (
    <section id='project'>
      <h5>My recent work</h5>
      <h2>Projects</h2>
      <div className='container project-container'>
        <article className='project-item'>
          <div className='item-img'>
            <img src={portfolio} alt='item-img' className='project-img'/>
          </div>
          <h3>Personal portfolio</h3>
          <div className='project-item-cta'>
          <a href='' className='btn'>Live project</a>
          <a href='' className='btn btn-primary'>View code</a>
          </div>
        </article>
        <article className='project-item'>
          <div className='item-img'>
            <img src={news_app} alt='item-img' className='project-img'/>
          </div>
          <h3>News app</h3>
          <div className='project-item-cta'>
          <a href='https://genuine-semolina-34e3fc.netlify.app/' className='btn'>Live project</a>
          <a href='https://github.com/aishwarya524/news-app-redux' className='btn btn-primary'>View code</a>
          </div>
        </article>
        <article className='project-item'>
          <div className='item-img'>
            <img src={frontend_portfolio} alt='item-img' className='project-img'/>
          </div>
          <h3>Frontend project portfolio</h3>
          <div className='project-item-cta'>
          <a href='https://dainty-frangipane-62dce8.netlify.app/' className='btn'>Live project</a>
          <a href='https://github.com/aishwarya524/Frontend-Project-Portfolio' className='btn btn-primary'>View code</a>
          </div>
        </article>
        <article className='project-item'>
          <div className='item-img'>
            <img src={shopping_app} alt='item-img' className='project-img'/>
          </div>
          <h3>Shopping app</h3>
          <div className='project-item-cta'>
          <a href='https://silver-cassata-d2abfc.netlify.app/' className='btn'>Live project</a>
          <a href='https://github.com/aishwarya524/Shopping-app' className='btn btn-primary'>View code</a>
          </div>
        </article>
        <article className='project-item'>
          <div className='item-img'>
            <img src={task_manager} alt='item-img' className='project-img'/>
          </div>
          <h3>Task manager</h3>
          <div className='project-item-cta'>
          <a href='https://magnificent-lamington-d13d2e.netlify.app/' className='btn'>Live project</a>
          <a href='https://github.com/aishwarya524/Task-Manager' className='btn btn-primary'>View code</a>
          </div>
        </article>
        <article className='project-item'>
          <div className='item-img'>
            <img src={sudoku} alt='item-img' className='project-img'/>
          </div>
          <h3>Sudoku</h3>
          <div className='project-item-cta'>
          <a href='https://github.com/aishwarya524/Sudoku' className='btn btn-primary'>View code</a>
          </div>
        </article>
        <article className='project-item'>
          <div className='item-img'>
            <img src={pong} alt='item-img' className='project-img'/>
          </div>
          <h3>Pong game</h3>
          <div className='project-item-cta'>
          <a href='https://github.com/aishwarya524/Pong-Game' className='btn btn-primary'>View code</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default project