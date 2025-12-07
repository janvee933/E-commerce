import React from 'react';
import Newsletter from '../components/Newsletter';
import bannerBook from '../assets/bannerBook.png';
import b1 from '../assets/banner2.png'; // Using banner2 as placeholder for blog images if needed
import b2 from '../assets/banner3.png';

const Blog = () => {
    return (
        <>
            <section id="page-header" className="blog-header" style={{ backgroundImage: `url(${bannerBook})` }}>
                <h2>#readmore</h2>
                <p>Read all case studies about our products!</p>
            </section>

            <section id="blog">
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={b1} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>The Cotton-Jersey Zip-Up Hoodie</h4>
                        <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr
                            wolf chartreuse hexagon irony, godard...</p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>13/01</h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={b2} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>How to Style a Quiff</h4>
                        <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr
                            wolf chartreuse hexagon irony, godard...</p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>13/04</h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={b1} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>Must-Have Skater Girl Items</h4>
                        <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr
                            wolf chartreuse hexagon irony, godard...</p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>12/01</h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src={b2} alt="" />
                    </div>
                    <div className="blog-details">
                        <h4>Runway-Inspired Trends</h4>
                        <p>Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr
                            wolf chartreuse hexagon irony, godard...</p>
                        <a href="#">CONTINUE READING</a>
                    </div>
                    <h1>16/01</h1>
                </div>
            </section>

            <section id="pagination" className="section-p1">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
            </section>

            <Newsletter />
        </>
    );
};

export default Blog;
