import React from 'react';

function Carousels(props) {
    return (
        <div>
            <div className="all-slides">
            <div className="img-slides">
                <h1>Films du moments</h1>
                <div className="wrapper">
                    <section id="section1">
                        <a href="#section2">‹</a>
                        <div className="item">
                            <img src={require("./card (1).png")}/>
                        </div>
                        <div className="item">
                            <img src={require("./card (2).png")} />
                        </div>
                        <div className="item">
                            <img src="./card (3).png" />
                        </div>
                        <div className="item">
                            <img src={require("./card (8).png")}/>
                        </div>
                        <div className="item">
                            <img src={require("./card (5).png")}/>
                        </div>
                        <a href="#section2">›</a>
                    </section>
                    <section id="section2">
                        <a href="#section1">‹</a>
                        <div className="item">
                            <img src={require("./card (6).png")}/>
                        </div>
                        <div className="item">
                            <img src={require("./card (7).png")}/>
                        </div>
                        <div className="item">
                            <img src={require("./card (8).png")}/>
                        </div>
                        <div className="item">
                            <img src={require("./card (9).png")}/>
                        </div>
                        <div className="item">
                            <img src={require("./card (10).png")}/>
                        </div>
                        <a href="#section1">›</a>
                    </section>

                </div>
                <div className="img-slides2">
                    <h1>Series du Moments</h1>
                    <div className="wrapper">
                        <section id="section4">
                            <a href="#section5">‹</a>
                            <div className="item">
                                <img src={require("./card (11).png")}/>
                            </div>
                            <div className="item">
                                <img src={require("./card (12).png")}/>
                            </div>
                            <div className="item">
                                <img src={require("./card (13).png")}/>
                            </div>
                            <div className="item">
                                <img src={require("./card (14).png")}/>
                            </div>
                            <div className="item">
                                <img src={require("./card (15).png")} />
                            </div>
                            <a href="#section5">›</a>
                        </section>
                        <section id="section5">
                            <a href="#section4">‹</a>
                            <div className="item">
                                <img src={require("./card (16).png")}/>
                            </div>
                            <div className="item">
                                <img src={require("./card (17).png")}/>
                            </div>
                            <div className="item">
                                <img src={require("./card (18).png")} />
                            </div>
                            <div className="item">
                                <img src={require("./card (15).png")}/>
                            </div>
                            <div className="item">
                                <img src={require("./card (20).png")} />
                            </div>
                            <a href="#section4">›</a>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );
}

export default Carousels;
