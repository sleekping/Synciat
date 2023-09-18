
  <main>
	<div class="footer">
	  <div class="bubbles">
		<!-- Small numbers looks nice too -->
		<!-- Generate bubbles dynamically using JavaScript -->
		<!-- This part should be handled in JavaScript -->
	  </div>
	  <div class="content">
		<div>
		  <div>
			<b>Eldew</b>
			<a href="#">Secuce</a>
			<a href="#">Drupand</a>
			<a href="#">Oceash</a>
			<a href="#">Ugefe</a>
			<a href="#">Babed</a>
		  </div>
		  <div>
			<b>Spotha</b>
			<a href="#">Miskasa</a>
			<a href="#">Agithe</a>
			<a href="#">Scesha</a>
			<a href="#">Lulle</a>
		  </div>
		  <div>
			<b>Chashakib</b>
			<a href="#">Chogauw</a>
			<a href="#">Phachuled</a>
			<a href="#">Tiebeft</a>
			<a href="#">Ocid</a>
			<a href="#">Izom</a>
			<a href="#">Ort</a>
		  </div>
		  <div>
			<b>Athod</b>
			<a href="#">Pamuz</a>
			<a href="#">Vapert</a>
			<a href="#">Neesk</a>
			<a href="#">Omemanen</a>
		  </div>
		</div>
		<div>
		  <a class="image" href="#" target="_blank" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg')"></a>
		  <p>©2019 Not Really</p>
		</div>
	  </div>
	</div>
	<svg style="position: fixed; top: 100vh">
	  <defs>
		<filter id="blob">
		  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
		  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
		  <!-- feComposite(in="SourceGraphic" in2="blob" operator="atop") -->
		  <!-- After reviewing this after years I can't remember why I added this but it isn't necessary for the blob effect -->
		</filter>
	  </defs>
	</svg>
  </main>



  h1 {
    font-weight: bold;
    margin: 0;
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
}

span {
    font-size: 12px;
}

a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

button {
    border-radius: 20px;
    border: 1px solid #d77c62;
    background-color: #d77c62;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background-color: transparent;
    border-color: #ffffff;
}

form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
}

input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
}

.social-c

.social-container a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}
.container {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 100%;
    /* max-width: 100%; */
    min-height: 480px;
    
}
.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.right-panel-active .sign-in-container {
    transform: translateX(100%);
}

.container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

@keyframes show {
    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}
.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 60%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.overlay {
    background: #707d82;
    background: -webkit-linear-gradient(to right, #d77c62, #707d82);
    background: linear-gradient(to right, #d77c62, #707d82);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-left {
    transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.overlay-right {
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(20%);
}