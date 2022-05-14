import React from "react";
import '../App.css';
import lg from '../vector/default-monochrome-white.svg';
const Login = () => {
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
                PDF Converter
            </h1>
            
              <div class="form-group">
                  <input type="file" name="file" id="" required class="form-control" />
              </div>
              <div class="form-group">
                  <button class="btn btn-danger btn-block">
                      Convert to PDF
                  </button>
              </div>
        </div>
              </div>
      </header>
  </body>
  
    </div>
  );
  };
  
  
export default Login;