import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function About() {
    return (
        <div className="about">
            <main style={{background:"#141414", color:"#fff"}}>	
                <section id="hero" class="about-us-page about-bg">
                    <div class="container">
                        
                        <div class="row align-items-center justify-content-center">
                        
                            <div class="col-lg-8 text-center d-flex flex-column pt-5 mt-5 mb-5">
                                <div class="mb-4">
                                    <span class="sub-title-text">Here is Our Secret: Vision and Talent</span>
                                </div>
                                <h1 style={{fontSize:"2.375rem", lineHeight:"1", paddingTop:"1rem"}}>The Unique Platform Created By</h1>
                                <h2 style={{color:"#fd961a", fontSize:"35px"}}><b>A Genuine Group Of Creators &amp; Believers</b></h2>
                                <p class="pb-4 pt-4">As the PRIME MINNERS team, we work together; to create bigger, stronger things. We are proud to be a family of hundreds of people with experienced businessmen, successful investors, talented engineers, technology gurus, researchers and international user masses. In this job that requires insanity, we do great things with geniuses and dreamers working for the future. We do what we love for the people we love.</p>
                                    {/* <div class="pb-4">
                                        <a class="btn" href="https://www.crypto-mining.biz/files/cert.pdf" target="_blank" role="button"><span>Certification <i class="fas fa-file-alt"></i></span></a>
                                        <a class="btn" href="https://www.crypto-mining.biz/Crypto%20Mining%20WP.pdf" target="_blank" role="button"><span style={{color:"#fff"}}>Company Presentation <i class="fas fa-file-alt"></i></span></a>
                                    </div> */}
                            </div>
                            
                            <div class="col-md-12 text-center d-flex ">
                                <div class="row flex-fill">
                                
                                    <div class="col-lg-4 col-6 pt-3 pb-4">
                                        <div class="site-stats d-flex align-items-lg-center">
                                            <div class="d-flex flex-column pl-2">
                                                <h2 style={{color:"#fd961a", fontWeight:"600"}}>250.000+</h2>
                                                <p class="d-flex align-items-center">Satisfied customers all over the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-4 col-6 pt-3 pb-4">
                                        <div class="site-stats d-flex align-items-lg-center">
                                            <div class="d-flex flex-column pl-2">
                                                <h2 style={{color:"#fd961a", fontWeight:"600"}}>$165M</h2>
                                                <p class="d-flex align-items-center">Total Investment since company foundation.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-4 pt-3 pb-4 col-6 ">
                                        <div class="site-stats d-flex align-items-lg-center">
                                            <div class="d-flex flex-column pl-2">
                                                <h2 style={{color:"#fd961a", fontWeight:"600"}}>278</h2>
                                                <p class="d-flex align-items-center">Total number of team members spread out 6 countries</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                
                                    
                                    
                                </div>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                </section>



                <section id="about-tabs">
                    
                    <div class="container">
                        <div class="row our-members">
                        
                        
                        
                            
                            
                            <div class="col-lg-3 offset-lg-2">
                                <div class=" all-center d-flex flex-column">
                                    
                                    
                                
                                    
                                    
                                </div>
                            </div>
                            
                            
                                
                                
                            
                            
                        
                            
                            
                        </div>
                        
                    </div>
                    
                </section>



                <section id="affiliate-banners" style={{marginBottom:"50px"}}>
                    <div class="container">
                        <div class="row">
                        
                                <div class="col-lg-4 d-flex flex-column justify-content-center">

                                <div class="d-flex aff-list">
                                    <div class="d-flex pr-4">
                                        <span class="goget head-icon-small"><i class="fas fa-award"></i></span>
                                    </div>
                                    <div class="pr-4">
                                        <h6 class="pb-0">+120 Patent Applications.</h6>
                                        <p class="mb-0">
                                        We invest a major portion of our revenue on blockchain and crypto money research and has been the most patent application institution in the last 1 year.
                                        </p>
                                    </div>
                                </div>

                            </div>


                            <div class="col-lg-4 d-flex flex-column justify-content-center">

                                <div class="d-flex aff-list">
                                    <div class="d-flex pr-4">
                                        <span class="goget head-icon-small"><i class="fas fa-cloud"></i></span>
                                    </div>
                                    <div class="pr-4">
                                        <h6 class="pb-0">State Of Art Mining Facilities.</h6>
                                        <p class="mb-0">
                                            Operating in 6 countries, we have the latest technology infrastructures. Facilities are sensitive to environment and social life, taking the advantage of government policy, weather conditions and cost advantages.
                                        </p>
                                    </div>
                                </div>

                            </div>


                            <div class="col-lg-4 d-flex flex-column justify-content-center">

                                <div class="d-flex aff-list">
                                    <div class="d-flex pr-4">
                                        <span class="goget head-icon-small"><i class="fas fa-server"></i></span>
                                    </div>
                                    <div class="pr-4">
                                        <h6 class="pb-0">Renewable Energy Sources.</h6>
                                        <p class="mb-0">
                                            Sustainable facility management is one of our sus. We use environmentally friendly energy sources and make considerable investments in wind, solar and hydroelectric resources.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        
                        
                        </div>
                    </div>
                </section>


            </main>
        </div>
    )
}

export default About
