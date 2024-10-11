import "../css/Footer.css"

function App() {
    return (
        <section id="footer">
            <div id="footer-div">
                <div>
                    <h3 style={{marginBottom:'2rem'}}>Navigation</h3>
                    <h3 style={{color:'#b2d1f5'}}>Home</h3>
                    <h3 style={{color:'#b2d1f5'}}>Contact</h3>
                </div>
                <div>
                    <h3>Resources</h3>
                    <h3 style={{color:'#b2d1f5'}}>Docs</h3>
                </div>
                <div>
                    <h3>Social</h3>
                    <ul style={{listStyle:'none'}}>
                        <li style={{color:'#b2d1f5'}}><a href="https://twitter.com/exploringengin1"><img src="/twitter.svg" alt="" /></a></li>
                        <li style={{color:'#b2d1f5'}}><a href="https://github.com/rajesh604"><img src="/github.svg" alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <footer>
                <div>
                <img src="/vect.png" alt="" style={{"width" : "auto", "height" : "8rem"}} /> 
                </div>
                <h3>The Cosmos of <span style={{color:'rgb(114 17 190)'}}>Software</span> & <span style={{color:'rgb(221 9 169)'}}>Development</span> Services</h3>
            </footer>
        </section> 
    )
}

export default App;