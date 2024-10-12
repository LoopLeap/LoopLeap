import "../css/Products.css";

function App() {
    return (
        <div id="products">
            <h1>Providing <span style={{color:'rgb(114 17 190)'}}>Quality</span> <span style={{color:'rgb(221 9 169)'}}>Support</span> In</h1>
            <div id="boxes">
                <div className="box">
                    <h2>Web Development</h2>
                    <img className="product-img" src="/web.png" alt="Web Development" />
                </div>
                <div className="box">
                    <h2>Mobile App Development</h2>
                    <img className="product-img" src="/mobile.png" alt="Mobile App Development" />
                </div>
                <div className="box">
                    <h2>API Development</h2>
                    <img className="product-img" src="/api.png" alt="API Development" />
                </div>
            </div>
            <div id="boxes1">
                <div className="box1">
                    <h1>Custom Web Applications</h1>
                    <p>We create tailored web applications to meet your business needs, enhancing user experience and functionality.</p>
                    <h4 className="orange-down">Explore Our Web Solutions →</h4>
                </div>
                <div className="box1">
                    <h1>Cross-Platform Mobile Apps</h1>
                    <p>Our team develops mobile applications that run seamlessly on both iOS and Android, ensuring broad reach and user engagement.</p>
                    <h4 className="orange-down">Get Started with Mobile Apps →</h4>
                </div>
                <div className="box1">
                    <h1>Robust API Development</h1>
                    <p>We design and implement secure and scalable APIs to facilitate integration and enhance application interoperability.</p>
                    <h4 className="orange-down">Discover Our API Services →</h4>
                </div>
            </div>
        </div>
    );
}

export default App;
