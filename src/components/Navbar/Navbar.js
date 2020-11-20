
import logo from '../../images/logo.png';


const Navbar = () => {

    return (
        <nav  className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <a href="/"><img style = {{width: "180px" , height: '120px'}} className = 'mr-auto img-fluid ml-5 mt-3' src={logo} alt=""/></a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="#">Our Team</a>
                    </li>
                    <button style ={{backgroundColor: '#1BD5BE' , color: "white" , border: 'none' , borderRadius: '20px 0px 20px 0px' , padding: '10px 40px 10px 40px' , fontWeight: 800 , backgroundImage: 'linear-gradient(to right, #1ddbb6, #07adec)'}} className = 'btn btn-primary'>Login</button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;