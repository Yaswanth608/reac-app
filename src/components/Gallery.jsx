import React from "react";
import lg from '../vector/default-monochrome-white.svg';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.png';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.png';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import '../App.css';
const Gallery = () => {
return (
	<div> 
<body>
    <header>
        <div class="main">
           
            <ul>

            <li><a href="/home">Home</a></li>
                <li  class="active"><a href="/gallery">Convert</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/aboutus">About</a></li>
            </ul>
        </div>
        <div class="container-all">
            <br>
            </br>
            <br></br>
            <br></br>
            <br></br>
            <div class="title">
          <h1>
              DOCX to PDF Converter
          </h1>
          
            <div class="form-group">
                <input type="file" name="file" id="" required class="form-control" />
            </div>
            <div class="form-group">
                <button class="btn btn-danger btn-block">
                    Convert to DOCX
                </button>
            </div>
      </div>
            </div>
    </header>
</body>

	</div>
);
};

export default Gallery;
