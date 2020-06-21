import React from 'react';
import Tilt from 'react-tilt';

const LiveSite = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADeElEQVR42u3c30tTYRgH8Od5nWvaRWEuhDJKKkoCr7qKbgrEBRFJuMuCQJEuQqK/oT8h6K5Lu5AiKG/aTZdBEIWFlUnLGLqkH2hH3TlPFymZ2zxrc37b9v3c7bw7h+d9vnvPOdvYRIiIiIiIqNFoKU+aGU5EdqSnByXwh8WsW80cuvD/kakGojohrum213nwzv7bj3Nh+4QG8Gk4EYl9nBpV3+9HT7CWWFPTmHegKxkWQugrOZaeHmTz/536fn8sPT0Y9rzwU0ngD6MnU7NK6F14AGbd6HnUrBJ6FxoAL7jlK6V3bC4YAwCLVHqAPePvSnovUa++9B22SvbnCgBjAGAMAIwBgDEAMAYAxgDAGAAYAwBjAGAMAIwBgDEAMAYAxgDAGAAYAwBjAGAMAIwBgDEAMAYAxgDAGAAYAwBjAGAMAIwBgDEAMAYAxgDAGAAYAwBjAGAMAKzi34hV+hupRscVAMYAwBgAGAMAYwBgDACMARAREYFs+l8/cxdOnHFL3hN0kbUs2BE7G3/wKlVsfNO7IF1ZvoGeQK0L62HRFTDX33NMFxdeN/TfYW0BExFr3Xk8PvbiTaHxoitAl7zrbH7lVH73crPxPLPJk23u29e0irWiJ1APTHQx2LW7c+/os/mNYwVXgFv4cYXN3zoq1uoWflwpNJYXQHrkYkT84Bq66LrjB9fSIxfzvoHMC6Dl/WSfWtCFrrfeqAVdLe8n+zZuzz8F5Vb46q+WAr396yI8199zWBcX3vLupzpWb0mPxMdevFvb9tcK0CVviM2vntVb0qGN20REJHP5dCwym5lRszZ0ofXMVOdzezv2ddx96omsWwGR+ewlNr/61KwtMp+9tPb4zynI94fKOiL9u3W9VhF+7rPd1n8+5EREdMm7yuZvn9WL8VUREf082BuJpj+k1awDXVgh5lyq/dHk2XL2zZ47+kSD4Ax6DgXnpZpZ7jzU6aKZmd7/tfkiItbcfAuxb7WpWUc0M9PrJJdLoospxpx7PpUYSJW7/1RiIGXOPUfPo6hcLqnZxNE5taAdXUshQXM0GX84ca+SY2TPdw/oyvIoei6FmLqsZhNHfqpZDF1MIzJVz4m6spc4VUhdylk0etNEvqNraTQm8t2i0Zsufv/lhMVaTplz46bqoQurd6a6bM6NW6zlVPz+ywl0PUREREREtP1+AS6lBspN2NUGAAAAAElFTkSuQmCC"

export default function Projects() {
  return (
    <div className="project">
      <div className="project-heading">
        <span>Recent Projects</span>
      </div>
      <br />
      <br />

      <div data-aos="fade-up" className="project-container-right">
        <div className="project-span-container">
          <span>Universal Recipe Book</span>
        </div>
        <div data-aos="zoom-in" className="project-tilt-container">
          <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 300, width: 500 }} >
            <div className="Tilt-inner">
              <img className="tilt-img" src="https://media.giphy.com/media/Y0CZ1Sh7VWEKGXwm1o/giphy.gif" alt="verdure demo" />
            </div>
            <div className="hover-site">
              <a href="https://github.com/jenniferawesomecoder/Recipes-javascript" target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-plain-wordmark colored-project"></i>
              </a>
              <a href="http://verdure.surge.sh/" target="_blank" rel="noopener noreferrer">
                <img className="live-site-img" src={LiveSite} alt="live site" />
              </a>
            </div>
          </Tilt>
        </div>
        <div className="project-content-container">
          <div className="project-content-container-sub">
            <div data-aos="fade-right">
              <p className="p-padding">
              Universal recipe book is a web app that, through member generated content, is a one-stop-shop for Recipes; with access to global cuisine.
              The goal is to help people to contribute their recipes, and then be able to pass it on to the global community.
              Members will be able to save their favorite  recipes with a click of a button!</p>
            </div>
            <div data-aos="zoom-out-down" className="project-content-right-container">
              <div className="project-content-right top">
                <i className="devicon-html5-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-css3-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-javascript-plain colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-ruby-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-rails-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-postgresql-plain-wordmark colored"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="project-container-left">
        <div className="project-span-container-left">
          <span>Quotes Galore</span>
        </div>
        <div data-aos="zoom-in" className="project-tilt-container">
          <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 300, width: 500 }} >
            <div className="Tilt-inner">
              <img className="tilt-img" src="https://media.giphy.com/media/da6SeBMGGSYMfNo41Q/giphy.gif" alt="verdure demo" />
            </div>
            <div className="hover-site">
              <a href="https://github.com/jenniferawesomecoder/Quotes-React-Redux" target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-plain-wordmark colored-project"></i>
              </a>
              <a href="http://riverside-art.surge.sh/" target="_blank" rel="noopener noreferrer">
                <img className="live-site-img" src={LiveSite} alt="live site" />
              </a>
            </div>
          </Tilt>
        </div>
        <div className="project-content-container">
          <div className="project-content-container-sub">
            <div data-aos="fade-right">
              <p className="p-padding">
                How many times have we seen or read a quote and, loved it but, when we wanted to recollect lost it.
                Well not anymore. Quotesgalore app will help you not only get quotes from an API that gives you some helpful random quotes but,
                you can also save those quotes to your favorites so, you can refer to them at your convenience.
              </p>
            </div>
            <div data-aos="zoom-out-down" className="project-content-right-container">
              <div className="project-content-right top">
                <i className="devicon-html5-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-css3-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-react-original-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-ruby-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-rails-plain-wordmark colored"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="project-container-right">
        <div className="project-span-container">
          <span>Project Plan</span>
        </div>
        <div data-aos="zoom-in" className="project-tilt-container">
          <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 300, width: 500 }} >
            <div className="Tilt-inner">
              <img className="tilt-img" src="https://media.giphy.com/media/Y1YbrCMXb22KYAZWfe/giphy.gif" alt="verdure demo" />
            </div>
            <div className="hover-site">
              <a href="https://github.com/jenniferawesomecoder/MarioProjectPlan-React-App" target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-plain-wordmark colored-project"></i>
              </a>
              <a href="https://projectplan-30217.web.app/signin" target="_blank" rel="noopener noreferrer">
                <img className="live-site-img" src={LiveSite} alt="live site" />
              </a>
            </div>
          </Tilt>
        </div>
        <div className="project-content-container">
          <div className="project-content-container-sub">
            <div data-aos="fade-right">
              <p className="p-padding">
                This app can be used to create a list of projects.  Users can signup, and create their projects and, get notifications when a project is created.
              </p>
            </div>
            <div data-aos="zoom-out-down" className="project-content-right-container">
              <div className="project-content-right top">
                <i className="devicon-html5-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-css3-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-react-original-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                 <i class="devicon-github-plain"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div data-aos="fade-up" className="project-container-left">
        <div className="project-span-container-left">
          <span>Canvas</span>
        </div>
        <div data-aos="zoom-in" className="project-tilt-container">
          <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 300, width: 500 }} >
            <div className="Tilt-inner">
              <img className="tilt-img" src="https://media.giphy.com/media/jpWvY2Qu7gXbyzJyH3/giphy.gif" alt="verdure demo" />
            </div>
            <div className="hover-site">
              <a href="https://github.com/RaulJiminian/project-two-seedling" target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-plain-wordmark colored-project"></i>
              </a>
              <a href="http://canvas-museums.surge.sh/" target="_blank" rel="noopener noreferrer">
                <img className="live-site-img" src={LiveSite} alt="live site" />
              </a>
            </div>
          </Tilt>
        </div>
        <div className="project-content-container">
          <div className="project-content-container-sub">
            <div data-aos="fade-right">
              <p className="p-padding">Canvas is a web app that serves as a museum walkthrough and focuses on providing information on a vast array of artwork within The Rijksmuseum. The Rijksmuseam offers a representative overview of Dutch art and history from the Middle Ages onwards, and of major aspects of European and Asian art. Using the Rijksmuseum API, we are able to grab a whole host of information valuable to understanding various pieces of artwork.</p>
            </div>
            <div data-aos="zoom-out-down" className="project-content-right-container">
              <div className="project-content-right top">
                <i className="devicon-html5-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-css3-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-react-original-wordmark colored"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="project-container-right">
        <div className="project-span-container">
          <span>Good News!</span>
        </div>
        <div data-aos="zoom-in" className="project-tilt-container">
          <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 300, width: 500 }} >
            <div className="Tilt-inner">
              <img className="tilt-img" src="https://media.giphy.com/media/J5AG2bkrLiDQaFQJMg/giphy.gif" alt="verdure demo" />
            </div>
            <div className="hover-site">
              <a href="https://github.com/RaulJiminian/Project-1" target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-plain-wordmark colored-project"></i>
              </a>
              <a href="http://goodnews.surge.sh/" target="_blank" rel="noopener noreferrer">
                <img className="live-site-img" src={LiveSite} alt="live site" />
              </a>
            </div>
          </Tilt>
        </div>
        <div className="project-content-container">
          <div className="project-content-container-sub">
            <div data-aos="fade-right">
              <p className="p-padding">The Good News! web application is a one stop shop for news around the world. Good News! incorporates a bottomless library of news from countless sources around the world using the News API. You can search for any topic and even include a date range for older articles. Good News! also offers additional features that can help with the anxiety that generally comes along with reading news in today's time.</p>
            </div>
            <div data-aos="zoom-out-down" className="project-content-right-container">
              <div className="project-content-right top">
                <i className="devicon-html5-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-css3-plain-wordmark colored"></i>
              </div>
              <div className="project-content-right">
                <i className="devicon-javascript-plain colored"></i>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  )
}
