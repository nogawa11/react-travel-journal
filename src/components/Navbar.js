import logo from '../logo.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar--logo"/>
      <h5 className="navbar--title">my travel journal.</h5>
    </div>
 )
}
