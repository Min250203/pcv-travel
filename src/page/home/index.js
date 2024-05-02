import React, { useState } from 'react';
import logokhongvien from '../../image/logokhongvien.png'; // Import the image
import dulich from '../../image/dulich.jpg'; // Import the image
import tour1 from '../../image/tour1.jpg'; // Import the image
import tour2 from '../../image/tour2.jpg'; // Import the image
import tour3 from '../../image/tour3.jpg'; // Import the image
import tour__nation1 from '../../image/tour__nation1.jpg'; // Import the image
import tour__nation2 from '../../image/tour__nation2.jpg'; // Import the image
import tour__nation3 from '../../image/tour__nation3.jpg'; // Import the image
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiHeadphones } from "react-icons/ci";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";

import { MdHomeRepairService } from "react-icons/md";
import { LuPlaneTakeoff } from "react-icons/lu";



function HomePage() {
    const [status, setStatus] = useState(0);

    // const handleChangeItemSearch = () => {

    // }
    return (
        <>
            <div className='container__homePage'>
                <nav class="navbar-expand-sm pt-3">
                    <div class="container-fluid">
                        <ul class="navbar-nav align-items-center justify-content-between m-auto fw-bold" style={{ height: "65px", width: "80%" }}>
                            <li class="nav-item item__logo">
                                <a class="nav-link" href="#"><img class='logo__image' src={logokhongvien} /></a>

                            </li>
                            <ul class="navbar-nav align-items-center gap-4">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">TOUR KHÁCH LẺ</a>
                                    {/* <ul class="sub__nav_item-list">
                                <li class="fortfolio__product">Hoodies</li>
                                <li class="fortfolio__product">Sweater</li>
                                <li class="fortfolio__product">Jackets</li>
                                <li class="fortfolio__product">Cardigants</li>
                                <li class="fortfolio__product">Gile</li>
                                <li class="fortfolio__product">T-Shirt</li>
                                <li class="fortfolio__product">Polo</li>
                                <li class="fortfolio__product">Shirt</li>
                                <li class="fortfolio__product">Wallets</li>
                            </ul> */}
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">TOUR KHÁCH ĐOÀN</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">COMBO DU LỊCH</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">DỊCH VỤ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">CẢM NANG DU LỊCH</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">TUYỂN DỤNG</a>
                                </li>
                            </ul>
                            <FaUser />

                        </ul>
                    </div>

                </nav>

                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active p-3 w-100" style={{ height: "600px" }}>
                            <img src={dulich} class="d-block w-100 rounded-3 h-100" alt="..." style={{ position: "relative" }} />
                            <div className='title__page'>
                                <div className='title'>
                                    KHÁM PHÁ CÁC TRẢI NGHIỆM HẤP DẪN <br />CÙNG PHONG CÁCH VIỆT TRAVEL
                                </div>
                                <div class="btn-group w-50 rounded-circle mt-3" role="group" aria-label="Basic outlined example">
                                    <button
                                        type="button"
                                        class={`btn btn__item ${status === 0 ? 'choose__item' : ''}`}
                                        style={{ backgroundColor: "#fff" }}
                                        onClick={() => {
                                            setStatus(0)
                                        }}

                                    >TÌM TOUR</button>
                                    <button
                                        type="button"
                                        class={`btn btn__item ${status === 1 ? 'choose__item' : ''}`}
                                        style={{ backgroundColor: "#fff" }}
                                        onClick={() => {
                                            setStatus(1)
                                        }}
                                    >TRA CỨU BOOKING</button>
                                </div>
                                {status === 0 ?
                                    <div class="input-group mt-3 ">
                                        <input type="text" class="form-control" placeholder="Tìm điểm đến, Tour, dịch vụ, ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button class="btn btn__search" style={{ backgroundColor: "#fff" }} type="button" id="button-addon2">TÌM KIẾM</button>
                                    </div>
                                    : <div class="input-group mt-3 ">
                                        <input type="text" class="form-control" placeholder="Nhập thông tin ID booking" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button class="btn btn__search" style={{ backgroundColor: "#fff" }} type="button" id="button-addon2">TÌM KIẾM</button>
                                    </div>

                                }



                            </div>
                        </div>

                    </div>
                </div>

                <div class="content__pre_tour d-flex flex-row justify-content-between m-auto pt-5 pb-3" style={{ width: "80%" }}>
                    <div class="item__infor d-flex flex-row gap-3">
                        <MdHomeRepairService style={{
                            color: "#1765aa",
                            fontSize: "50px"

                        }} />
                        <div class="desc__infor d-flex flex-column">
                            <div class="infor__">Trụ sở Bình Thạnh: 0934 008 116</div>
                            <div class="infor__des">Chi nhánh TP. Thủ Đức: 093 705 9977</div>
                        </div>
                    </div>

                    <div class="item__infor d-flex flex-row gap-3">
                        <IoIosMail style={{
                            color: "#1765aa",
                            fontSize: "50px"

                        }} />
                        <div class="desc__infor d-flex flex-column">
                            <div class="infor__">Email</div>
                            <div class="infor__des"><a class="nav-link" href="#">contact@phongcachviettravel.vn</a></div>
                        </div>
                    </div>

                    <div class="item__infor d-flex flex-row gap-3">
                        <CiHeadphones style={{
                            color: "#1765aa",
                            fontSize: "50px"

                        }} />
                        <div class="desc__infor d-flex flex-column">
                            <div class="infor__">Chăm sóc khách hàng</div>
                            <div class="infor__des">(0283) 553 2095 - (0283) 553 1128</div>
                        </div>
                    </div>

                </div>

                <div class="tour__sale m-auto pt-3 pb-3" style={{ width: "80%" }}>
                    <div class="head__title m-auto pb-6 d-flex flex-row align-items-center justify-content-center">
                        <MdOutlineTravelExplore style={{
                            color: "#1765aa",
                            fontSize: "50px"

                        }} />
                        <div class="title__tour">TOUR KHUYẾN MÃI</div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card">
                                <img src={tour1} class="card-img-top" alt="..." />
                                <div class="card-body d-flex flex-column justify-content-between " style={{ height: "290px" }}>
                                    <div class="title__tour_item d-flex flex-column justify-content-between pb-1">
                                        <div class="title__date d-flex flex-row justify-content-between pb-1">
                                            <span class="date">05/06/2024 - 5N4Đ</span>
                                            <span class="seat fw-bold text-decoration-underline">Số chỗ còn 40</span>
                                        </div>
                                        <h5 class="card-title fw-bold">TOUR DU LỊCH HÀ NỘI - SAPA - HẠ LONG 5N4Đ - ĐI BẰNG MÁY BAY</h5>
                                    </div>
                                    <div class="card-text">
                                        <div>Mã Tour</div>
                                        <div>Nơi khởi hành: TP Hồ Chí Minh | Tây Ninh</div>
                                        <div>
                                            Giá:
                                            <span class="text-decoration-line-through"> 7,890,000</span>
                                        </div>
                                        <div class="price fs-5 fw-bold" style={{ color: "#fd5056" }}>7,890,000VNĐ</div>
                                        <button type="button" class="btn btn-outline-primary w-100 mt-2 fw-bold">Còn 31 ngày </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={tour2} class="card-img-top" alt="..." />
                                <div class="card-body d-flex flex-column justify-content-between " style={{ height: "290px" }}>
                                    <div class="title__tour_item d-flex flex-column justify-content-between pb-1">
                                        <div class="title__date d-flex flex-row justify-content-between pb-1">
                                            <span class="date">05/06/2024 - 5N4Đ</span>
                                            <span class="seat fw-bold text-decoration-underline">Số chỗ còn 40</span>
                                        </div>
                                        <h5 class="card-title fw-bold">TOUR THÁI LAN HÈ 2024: BANGKOK – PATTAYA – NONG NOOCH – LIGHTING ART & BALLOON 5N4D</h5>
                                    </div>
                                    <div class="card-text">
                                        <div>Mã Tour: TL001</div>
                                        <div>Nơi khởi hành: TP Hồ Chí Minh | Tây Ninh</div>
                                        <div>
                                            Giá:
                                            <span class="text-decoration-line-through"> 7,890,000</span>
                                        </div>
                                        <div class="price fs-5 fw-bold" style={{ color: "#fd5056" }}>7,890,000VNĐ</div>
                                        <button type="button" class="btn btn-outline-primary w-100 mt-2 fw-bold">Còn 31 ngày </button>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={tour3} class="card-img-top" alt="..." />
                                <div class="card-body d-flex flex-column justify-content-between " style={{ height: "290px" }}>
                                    <div class="title__tour_item d-flex flex-column justify-content-between pb-1">
                                        <div class="title__date d-flex flex-row justify-content-between pb-1">
                                            <span class="date">05/06/2024 - 5N4Đ</span>
                                            <span class="seat fw-bold text-decoration-underline">Số chỗ còn 40</span>
                                        </div>
                                        <h5 class="card-title fw-bold">TOUR TÂY NINH - NÚI BÀ - TÒA THÁNH TÂY NINH 1 NGÀY</h5>
                                    </div>
                                    <div class="card-text">
                                        <div>Mã Tour: HH001</div>
                                        <div>Nơi khởi hành: TP Hồ Chí Minh | Tây Ninh</div>
                                        <div>
                                            Giá:
                                            <span class="text-decoration-line-through"> 7,890,000</span>
                                        </div>
                                        <div class="price fs-5 fw-bold" style={{ color: "#fd5056" }}>7,890,000VNĐ</div>
                                        <button type="button" class="btn btn-outline-primary w-100 mt-2 fw-bold">Còn 31 ngày </button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* tour upcountry */}
                <div class="tour__sale m-auto pt-3 pb-3" style={{ width: "80%" }}>
                    <div class="head__title m-auto pb-6 d-flex flex-row align-items-center justify-content-center">
                        <AiOutlineGlobal style={{
                            color: "#1765aa",
                            fontSize: "50px"

                        }} />
                        <div class="title__tour">DU LỊCH NỘI ĐỊA 2024</div>
                    </div>
                    <div class="btn__group_tour d-flex flex-row justify-content-between align-items-center pb-4">
                        <div class="btn__option_tour">
                            <button class="btn btn-light rounded-pill" type="submit">Tour du lịch lễ 30/04</button>
                            <button class="btn btn-light rounded-pill" type="submit">Tour nội địa khách lẻ</button>
                            <button class="btn btn-light rounded-pill" type="submit">Tour khách đoàn</button>
                            <button class="btn btn-light rounded-pill" type="submit">Combo du lịch</button>
                        </div>
                        <div class="more">
                            <button class="btn btn-outline-primary rounded-pill" type="submit">Xem thêm <FaAngleRight style={{
                                color: "#ccc",
                                fontSize: "25px"

                            }} />
                            </button>

                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card">
                                <img src={tour1} class="card-img-top" alt="..." />
                                <div class="card-body d-flex flex-column justify-content-between"style={{ height: "230px" }}>
                                    <div class="title__tour_item d-flex flex-column pb-1">
                                        <div class="title__date d-flex flex-column justify-content-between pb-1">
                                            <span class="date">Thời gian: 3N3Đ</span>
                                            <span class="date">Ngày khởi hành: Tối 27, 28/4</span>
                                        </div>
                                        <h5 class="card-title fw-bold">TOUR ĐÀ LẠT XE GIƯỜNG 3N3Đ LỄ 30/4</h5>
                                    </div>
                                    <div class="card-text">
                                        <div class="price fs-5 fw-bold" style={{ color: "#fd5056" }}>2,490,000VNĐ</div>
                                        <div class="btn__book d-flex flex-row gap-2">
                                            <button type="button" class="btn btn-danger w-100 mt-2 fw-bold">ĐẶT NGAY</button>
                                            <button type="button" class="btn btn-outline-primary w-100 mt-2 fw-bold">XEM</button>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={tour2} class="card-img-top" alt="..." />
                                <div class="card-body d-flex flex-column justify-content-between" style={{ height: "230px" }}>
                                     <div class="title__tour_item d-flex flex-column pb-1">
                                        <div class="title__date d-flex flex-column justify-content-between pb-1">
                                            <span class="date">Thời gian: 3N3Đ</span>
                                            <span class="date">Ngày khởi hành: Tối 27, 28/4</span>
                                        </div>
                                        <h5 class="card-title fw-bold">TOUR BUÔN MÊ - GIA LAI - MĂNG ĐEN 3N3Đ LỄ 30/4</h5>
                                    </div>
                                    <div class="card-text">

                                        <div class="price fs-5 fw-bold" style={{ color: "#fd5056" }}>2,890,000 VNĐ</div>
                                        <div class="btn__book d-flex flex-row gap-2">
                                            <button type="button" class="btn btn-danger w-100 mt-2 fw-bold">ĐẶT NGAY</button>
                                            <button type="button" class="btn btn-outline-primary w-100 mt-2 fw-bold">XEM</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={tour3} class="card-img-top" alt="..." />
                                <div class="card-body d-flex flex-column justify-content-between " style={{ height: "230px" }}>
                                     <div class="title__tour_item d-flex flex-column pb-1">
                                        <div class="title__date d-flex flex-column justify-content-between pb-1">
                                            <span class="date">Thời gian: 3N3Đ</span>
                                            <span class="date">Ngày khởi hành: Tối 27, 28/4</span>
                                        </div>
                                        <h5 class="card-title fw-bold">TOUR TÂY NINH - NÚI BÀ - TÒA THÁNH TÂY NINH 1 NGÀY</h5>
                                    </div>
                                    <div class="card-text">
                                        <div class="price fs-5 fw-bold" style={{ color: "#fd5056" }}>7,890,000VNĐ</div>
                                        <div class="btn__book d-flex flex-row gap-2">
                                            <button type="button" class="btn btn-danger w-100 mt-2 fw-bold">ĐẶT NGAY</button>
                                            <button type="button" class="btn btn-outline-primary w-100 mt-2 fw-bold">XEM</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* tour nation */}
               <div class="tour__sale m-auto pt-3 pb-3" style={{ width: "80%" }}>
                    <div class="head__title m-auto pb-6 d-flex flex-row align-items-center justify-content-center">
                        <LuPlaneTakeoff style={{
                            color: "#1765aa",
                            fontSize: "50px"

                        }} />
                        <div class="title__tour">DU LỊCH NƯỚC NGOÀI 2024</div>
                    </div>
                    <div class="btn__group_tour d-flex flex-row justify-content-between align-items-center pb-4">
                        <div class="btn__option_tour">
                            <button class="btn btn-light rounded-pill" type="submit">Tour nước ngoài khách lẻ - Hè 2024</button>
                            <button class="btn btn-light rounded-pill" type="submit">Inbound Tours</button>
                        </div>
                        <div class="more">
                            <button class="btn btn-outline-primary rounded-pill" type="submit">Xem thêm <FaAngleRight style={{
                                color: "#ccc",
                                fontSize: "25px"

                            }} />
                            </button>

                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card">
                                <img src={tour__nation1} class="card-img-top" alt="..." />
                                <div class="card-body d-flex flex-column justify-content-between"style={{ height: "240px" }}>
                                    <div class="title__tour_item d-flex flex-column pb-1">
                                        <div class="title__date d-flex flex-column justify-content-between pb-1">
                                            <span class="date">Thời gian: 6N5D</span>
                                            <span class="date">Ngày khởi hành: 30/05/2024</span>
                                        </div>
                                        <h5 class="card-title fw-bold">TOUR PHƯỢNG HOÀNG CỔ TRẤN - VŨ LĂNG NGUYÊN 6 NGÀY 5 ĐÊM</h5>
                                    </div>
                                    <div class="card-text">
                                        <div class="price fs-5 fw-bold" style={{ color: "#fd5056" }}>15,650,000VNĐ</div>
                                        <div class="btn__book d-flex flex-row gap-2">
                                            <button type="button" class="btn btn-danger w-100 mt-2 fw-bold">ĐẶT NGAY</button>
                                            <button type="button" class="btn btn-outline-primary w-100 mt-2 fw-bold">XEM</button>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={tour__nation2} class="card-img-top" alt="..." />
                                <div class="card-body d-flex flex-column justify-content-between" style={{ height: "240px" }}>
                                     <div class="title__tour_item d-flex flex-column pb-1">
                                        <div class="title__date d-flex flex-column justify-content-between pb-1">
                                            <span class="date">Thời gian: 5N4D</span>
                                            <span class="date">Ngày khởi hành: 14/05/2024</span>
                                        </div>
                                        <h5 class="card-title fw-bold">TOUR PHƯỢNG HOÀNG CỔ TRẤN - VŨ LĂNG NGUYÊN 5 NGÀY 4 ĐÊM</h5>
                                    </div>
                                    <div class="card-text">

                                        <div class="price fs-5 fw-bold" style={{ color: "#fd5056" }}>14,450,000 VNĐ</div>
                                        <div class="btn__book d-flex flex-row gap-2">
                                            <button type="button" class="btn btn-danger w-100 mt-2 fw-bold">ĐẶT NGAY</button>
                                            <button type="button" class="btn btn-outline-primary w-100 mt-2 fw-bold">XEM</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src={tour__nation3} class="card-img-top w-100" alt="..." />
                                <div class="card-body d-flex flex-column justify-content-between " style={{ height: "240px" }}>
                                     <div class="title__tour_item d-flex flex-column pb-1">
                                        <div class="title__date d-flex flex-column justify-content-between pb-1">
                                            <span class="date">Thời gian: 6N5Đ</span>
                                            <span class="date">Ngày khởi hành: 05/06/2024</span>
                                        </div>
                                        <h5 class="card-title fw-bold">TOUR NHẬT BẢN HÈ: KOBE – OSAKA – KYOTO – YAMANASHI – FUJI – TOKYO 6N5Đ</h5>
                                    </div>
                                    <div class="card-text">
                                        <div class="price fs-5 fw-bold" style={{ color: "#fd5056" }}>27,890,000VNĐ</div>
                                        <div class="btn__book d-flex flex-row gap-2">
                                            <button type="button" class="btn btn-danger w-100 mt-2 fw-bold">ĐẶT NGAY</button>
                                            <button type="button" class="btn btn-outline-primary w-100 mt-2 fw-bold">XEM</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage;