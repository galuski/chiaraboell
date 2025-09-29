import AboutImg from "./../../public/images/about/1.jpg"
import { Counter } from "./Counter"
export function About() {
    return (
        <section className="about">
            <div className="about-txt">
                <h2>About me</h2>
                <p className="about-txt-opening">Hi, I’m Chiara</p>
                <p>I am 29 years old, model & UGC-Creator from Germany.</p>
                <br />
                <p>In addition to my passion for sports, health and lifestyle, I love</p>
                <p>I love to put myself in the shoes of my clients' target group and present to present products authentically & effectively.</p>
                <br />
                <p>Through my background in online marketing, I have a deep understanding of brand messaging & audience engagement.</p>
                <br />
                <p>As a UGC creator, I can combine my passion for videography & storytelling with my modeling experience in front of the camera to create high-quality & approachable content that perfectly showcases your brand.</p>
                <p>your brand perfectly.</p>
                <br />
                <p>I look forward to working with you to create creative content!</p>
                <p>together with you!</p>
            </div>
            <img src={AboutImg} alt="about img" />
        </section>
    )
}