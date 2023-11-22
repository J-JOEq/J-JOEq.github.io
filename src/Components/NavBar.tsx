import './styles.css';
function NavBar(){
    return(
    <div className='NavBarContainer'>
        <a className='HyperLink' href='index.html'>Home</a>
        <a className='HyperLink'>Schedule Tests</a>
        <a className='HyperLink'>Contact</a>
    </div>
    )
}
export default NavBar;