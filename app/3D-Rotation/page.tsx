import Image from "next/image";
import React from "react"
import './style.css'
const page = () => {
  return (
    <div>

      <header>
        <div className="left">
          <h1>CSS ONLY</h1>
          {/* <Image width={20} height={20} src="/2.png" alt="a" className="img" /> */}
          <img src="/2.png" alt="" />
        </div>
        <div className="author">
          <h3>Sown</h3>
          <div >
            <p>Design By</p>
            <p>Sown</p>
          </div>
          <div>
            <p>Code By</p>
            <p>Sown</p>
          </div>
          {/* <Image src="/code.png" alt="b" width={20} height={20} className="imgBg" /> */}
          <img src="/code.png" alt="" />
        </div>
      </header>
      <div className="banner">
        <div className="product">
          <div className="soda" style={{ ['--url' as any]: 'url("/bg.png")' }}></div>
          <div className="soda" style={{ ['--url' as any]: 'url("/bg2.png")' }}></div>
        </div>
        <div className="rock">
          <img src="/rock1.png" alt="rock1" />
          <img src="/rock2.png" alt="rock2" />
          <img src="/rock3.png" alt="rock3" />
        </div>
      </div>


    </div >
  )
};

export default page;
