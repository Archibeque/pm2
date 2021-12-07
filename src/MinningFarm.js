import React from 'react'
import './MinningFarm.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

function MinningFarm() {

    

    return (
        <div className="farm">
            <main>
                <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
                    <div class="carousel-inner">
                        
                        <div class="carousel-item active">
                            <div style={{filter: "blur(32px)", webkitFilter: "blur(32px)", backgroundSize: "cover", position:"absolute", width:"120%", height:"120%", top:"-10%", left:"-10%"}}></div>
                            <img src="20200426152751.jpg" class="d-block" />
                        </div>
                        <div class="carousel-item">
                            <div style={{filter: "blur(32px)", webkitFilter: "blur(32px)", backgroundSize: "cover", position:"absolute", width:"120%", height:"120%", top:"-10%", left:"-10%"}}></div>
                            <img src="202004261527511.jpg" class="d-block" />
                        </div>
                        <div class="carousel-item">
                            <div style={{filter: "blur(32px)", webkitFilter: "blur(32px)", backgroundSize: "cover", position:"absolute", width:"120%", height:"120%", top:"-10%", left:"-10%"}}></div>
                            <img src="202004161122395.jpg" class="d-block" />
                        </div>
                        
                        
                        
                        <div class="carousel-item">
                            <div style={{background: "url(&#39;pic/abcma.jpg&#39;) center no-repeat", filter: "blur(32px);", webkitFilter: "blur(32px);", backgroundSize: "cover", position:"absolute", width:"120%;", height:"120%;", top:"-10%", left:"-10%"}}></div>
                            <img src="202004161122392.jpg" class="d-block" /> 
                        </div>
                        <div class="carousel-item">
                            <div style={{background: "url(&#39;pic/abcmb.jpg&#39;) center no-repeat;", filter: "blur(32px);", webkitFilter: "blur(32px);", backgroundSize: "cover", position:"absolute", width:"120%;", height:"120%;", top:"-10%", left:"-10%"}}></div>
                            <img src="202004161122395.jpg" class="d-block" />
                        </div>
                        <div class="carousel-item">
                            <div style={{background: "url(&#39;pic/abcmc.jpg&#39;) center no-repeat;", filter: "blur(32px)", webkitFilter: "blur(32px);", backgroundSize: "cover", osition:"absolute", width:"120%;", height:"120%;", top:-"10%;", left:-"10%"}}></div>
                            <img src="202004161122393.jpg" class="d-block" />
                        </div>
                        {/* <div class="carousel-item">
                            <div style={{background: "url(&#39;pic/abcm16.jpg&#39;) center no-repeat", filter: "blur(32px)", webkitFilter: "blur(32px)", backgroundSize: "cover", position:"absolute", width:"120%", height:"120%", top:"-10%", left:"-10%"}}></div>
                            <img src="" class="d-block" />
                        </div>
                        <div class="carousel-item">
                            <div style={{background: "url(&#39;pic/abcm17.jpg&#39;) center no-repeat", filter: "blur(32px)", webkitFilter: "blur(32px)", backgroundSize: "cover", position:"absolute", width:"120%", height:"120%", top:"-10%", left:"-10%"}}></div>
                            <img src="" class="d-block" />
                        </div>
                        <div class="carousel-item">
                            <div style={{background: "url(&#39;pic/abcm18.jpg&#39;) center no-repeat", filter: "blur(32px)", webkitFilter: "blur(32px)", backgroundSize: "cover", position:"absolute", width:"120%", height:"120%", top:"-10%", left:"-10%"}}></div>
                            <img src="" class="d-block" />
                        </div> */}
                    
                    </div>
                
                
                
                
                    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span style={{color:"#fff"}} class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span style={{color:"#fff"}} class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                    
                <section id="about-tabs" style={{background:"#141414"}}>
                    
                    <div class="container">
                        <div class="row our-members">
                        
                        
                        
                            <div class="col-lg-8 offset-lg-2 d-flex justify-content-center">
                                <div class="d-flex flex-column justify-content-center">
                                    <div class="d-flex">
                                        <img src="./ourfarm_files/5d127d002d63f322047a7792_chevrons green.png" width="46" alt="" class="icon-split-screen mb-4" />
                                    </div>
                                    <h1 class="pb-3" style={{color:"#fd961a"}}>Powered By Nature<br /><b>Empowering Future.</b></h1>
                                    <p class="pb-2" style={{color:"#fff"}}>
                                        PRIME MINNERS is a cloud mining service created by the professional crypto enthusiasts. Having facilities with state of art technologies in 3 continents, PRIME MINNERS is powered by nature-friendly recyclable power sources for sustainable future of decentralized finance.

                                    </p>
                                    <p class="pb-2"style={{color:"#fff"}} >
                                        PRIME MINNERS, which stands out with its patented cooling hardware, hundreds of academic studies and consultancy services on energy efficiency, aims to make crypto ownership accessible to everyone. The idea of offering crypto mining as a cloud service is rooted upon the desire of easy involvement while, at the same time, pioneering scalable computational power with expanding facilities.
                                    </p>
                                    <p class="pb-2" style={{color:"#fff"}}>
                                        Since 2016(?) facilities have an increasing number mining devices making it achievable to mine Bitcoin, Ethereum, Litecoin, Dash, Dogecoin and Zcash with smart allocation of computational power. Investors are free to engage in any defined mining plan via subscription without any time restrictions. Weekly profit accumulation, instant balance control, coin shift and fast withdrawal are the main features making PRIME MINNERS a trusted global brand.
                                    </p>
                                    <p class="pb-2" style={{color:"#fff"}}>
                                        Through tremendous work made by the engineers, academicians, developers and crypto specialists, PRIME MINNERS is providing mining service to over 3M+ users and have an annual persistent and increasing company growth per year.
                                    </p>
                                    <div>
                                        <Link to="/signup" class="btn btn-outline" role="button"  style={{background:"#fd961a"}}><span>Create an Account</span></Link>
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

export default MinningFarm
