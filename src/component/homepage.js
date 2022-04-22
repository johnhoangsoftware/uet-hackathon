
import React, { Component } from "react";
export default class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <h2>Dành cho bạn</h2>
                <h2>Nội dung mới</h2>
                <div className="info-show">
                    <div className="info-row">
                        <div className="info-box">
                            <img src='assets/images/1.png' alt="1" />
                            <div className="info-title">
                                <p>Khuyến cáo của Bộ y tế</p>
                            </div>
                        </div>
                        <div className="info-box">
                            <img src="assets/images/2.png" alt="2" />
                            <div className="info-title">
                                <p>Thông kê số ca nhiễm Covid-19</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="info-show">
                    <div className="info-row">
                        <div className="info-box">
                            <img src="assets/images/virus.png" alt="3"/>
                            <div className="info-title">
                                <p>Các cách phòng tránh Covid</p>
                            </div>
                        
                        </div>
                        <div className="info-box">
                            <img src="assets/images/4.png" alt = "4"/>
                            <div className="info-title">
                                <p>Các bài thuốc dân gian</p>
                            </div>
                        
                        </div>
                    </div>
                </div>
                    <div className="info-row">
                        <div className="info-box">
                            <img src="assets/images/5.png" alt = "5"/>
                            <div className="info-title">
                                <p>Bài tập hỗ trợ hồi phục sức khỏe hậu Covid</p>
                        
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}