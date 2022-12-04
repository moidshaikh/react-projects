import React from "react"

export default function Main() {
    return (
        <div className="main">
            <Title />
            <About />
        </div>
    )
}

function Title(){
    return (
        <div className="main--title">
            <h3>Moid Shaikh</h3>
            <h5>Python Developer</h5>
            <a href="https://www.google.com">My website</a>
            <Social />
        </div>
    )
}

function Social(){
    return (
        <div className="main--title--social">
            <button>Email</button>
            <button>Linkedin</button>
            {/* <button className="btn btn-email"><i className="ion-social-email"></i><span>Email</span></button> */}
            {/* <button className="btn btn-linkedin"><i className="ion-social-linkedin"></i><span>Linkedin</span></button> */}
        </div>
    )
}

function About(){
    return (
        <div className="main--about">
            <div className="main--about--about">
                <h4>About</h4>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            <div className="main--about--interests">
                <h4>Interests</h4>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}