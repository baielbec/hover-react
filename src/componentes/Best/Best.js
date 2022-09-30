import React from "react";
import img from "../../image/Rectangle 1.svg"
import "../../Style/Best/Best.scss"
const Best = () => {
    return (
        <div id="Best">
            <div className="container">
                <div className="Best-item-glava">
                    <h1>Best-Selling Programs <br/>
                        are Included in Membership</h1>
                </div>
                <div className="Best-item">
                    <div className="Best-item-slider">
                        <div className="Best-item-img">
                            <img className="Best-item-img-min" src={img} alt=""/>
                            <h3 className="Best-item-img-text"> El masaje es como una <br/>
                                danza de amor</h3>
                            <p>Zinovieva Irina</p>
                        </div>
                    </div>
                    <div className="Best-item-slider">
                        <div className="Best-item-img">
                            <img className="Best-item-img-min" src={img} alt=""/>
                            <h3 className="Best-item-img-text"> El masaje es como una <br/>
                                danza de amor</h3>
                            <p>Zinovieva Irina</p>
                        </div>
                    </div>
                    <div className="Best-item-slider">
                        <div className="Best-item-img">
                            <img className="Best-item-img-min"  src={img} alt=""/>
                            <h3 className="Best-item-img-text"> El masaje es como una <br/>
                                danza de amor</h3>
                            <p>Zinovieva Irina</p>
                        </div>
                    </div>
                    <div className="Best-item-slider">
                        <div className="Best-item-img">
                            <img className="Best-item-img-min"  src={img} alt=""/>
                            <h3 className="Best-item-img-text"> El masaje es como una <br/>
                                danza de amor</h3>
                            <p>Zinovieva Irina</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Best;