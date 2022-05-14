import React from "react";
import lg from '../vector/default-monochrome-white.svg';
import '../App.css';
const Home = () => {
return (
	<div> 
<body>
    <header>
        <div class="main">
          
            <ul>
                <li class="active"><a href="/home">Home</a></li>
                <li><a href="/gallery">Convert</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/aboutus">About</a></li>
            </ul>
        </div>
        <div class="title">
            <h1>Word To Pdf</h1>
            <h3>Convert Here</h3>
        </div>
        <div class="main-opt">
            <a href="/login" class="main-opt-btn">Get Started</a>
        </div>
    </header>
</body>

	</div>
);
};

export default Home;
