const Header = () => {
    return ( 
        <header className="py-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div><p>Foodieland</p></div>
                    <div>
                        <nav>
                            <ul className="flex items-center gap-x-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Recipes</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-x-5">
                        <a href="#"><img src="/public/images/icon/facebook.svg" alt="facebook" /></a>
                        <a href="#"><img src="/public/images/icon/twitter.svg" alt="twitter" /></a>
                        <a href="#"><img src="/public/images/icon/instagram.svg" alt="instagram" /></a>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;