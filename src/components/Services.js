import React from 'react';
import '../styles/Home.css';

const Services = () => {
  const items = [
    {
      title: 'CLICK & PICK',
      desc: 'MUA ONLINE, LẤY TẠI CỬA HÀNG',
    },
    {
      title: 'BẢO HÀNH DÂY KÉO TRỌN ĐỜI',
      desc: 'THAY DÂY KÉO ÁO KHOÁC MIỄN PHÍ',
    },
    {
      title: 'ĐỔI HÀNG TRONG 30 NGÀY',
      desc: 'ÁP DỤNG VỚI CÁC SẢN PHẨM NGUYÊN GIÁ',
    },
    {
      title: 'GIAO HÀNG HỎA TỐC 2H',
      desc: 'ÁP DỤNG VỚI ĐƠN HÀNG NỘI THÀNH',
    },
  ];

  return (
    <section className="services">
      {items.map((item, index) => (
        <div className="service-item" key={index}>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="icon-arrow"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 19l14-14M5 5h14v14" />
            </svg>
          </div>
          <div className="service-text">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
