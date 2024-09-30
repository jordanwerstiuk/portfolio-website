import React from "react";
import "./Website.css";

function Website() {
  return (
    <div>
      <div className="website-container-title">
        <h1 className="website-h1">REACT WEBSITE</h1>
      </div>
      <div className="website-container-main">
        <h5 className="date-text5">
          May 2024 - Present
        </h5>
        <div className="content-wrapper">
          <div className="text-content">
          <h6 className="website-text">
            The website I am referring to is, of course, the very one you are looking at right now.
            I made this website for a few reasons:
            <br />
            The first is because I wanted a more personalized and interesting method of displaying my favourite projects that I've worked on during my time at UBC.
            <br />
            Secondly, I am all for new learning opportunities, and something such as website development is a fairly relevant skill to have these days. As such, I made a point of choosing ReactJS because of it's popularity.
            <br />
            The third reason is because I had a great time creating this website! I enjoyed making a much more basic website in high school, which is how I knew I would enjoy making this one.
          </h6>
          <h6 className="website-text">
          <br />
            I was able to get started using React on my own by following guides online.
            Once I had an intuition for how the code was structured, I was able to start freestyling my own pages and features.
            For new features, such as automatic scrolling up or down upon the click of a button, I would once again look for help online.
            It's amazing how easy something can be if you just enjoy doing it! 
          </h6>
          <h6 className="website-text">
          <br />
            If you are reading this on your phone, forgive me for the mobile formatting...
          </h6>
          </div>
          <div className="image-content">
          <img src="/images/website_code_example.png" alt="Code snippet image" className="website-image" />
          </div>
        </div>
        <h6 className="bottom-text">
          As you look through the website, you'll probably notice (or maybe you already have) that while some pages look rather basic (such as this one), 
          others look nicer. As I made more pages I tried to make them better and better, and I spent more time on my favourite projects. 
          As of writing this, the best page is definitely Robot Competition 2024 (under class projects), so make sure you take a look at that one. 
          This website is a constant work in progress, so check back for new projects that I'll be adding!
        </h6>
      </div>
    </div>
  );
}

export default Website;
