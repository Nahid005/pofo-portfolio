import {Link} from '@reach/router'
import classes from './Layout.module.css'

function Layout (props) {

    return(
        <div>
            <header>
                <nav>
                    <div className={classes.brandName}>
                        <h2> POFO * </h2>
                    </div>
                    <div className={classes.navItems}>
                        <ul>
                            <Link to='/'> Home </Link>
                            <Link to='/about'> About </Link>
                            <Link to='/portfolio'> Portfolio </Link>
                            <Link to='/blog'> Blog </Link>
                            <Link to='/contact'> Contact </Link>
                        </ul>
                    </div>
                    <div className={classes.socialIcon}>
                        <ul>
                            
                        </ul>
                    </div>
                </nav>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <div className={classes.footerTop}>
                    <p> London based highly creative studio </p>
                    <div className={classes.brandName}>
                        <h2> POFO * </h2>
                    </div>
                    <div className={classes.socialIcon}>

                    </div>
                </div>
                <div className={classes.footerMiddle}>
                    <div className={classes.footerWidget}>
                        <div className={classes.footerTitle}>
                            <h5> ABOUT AGENCY </h5>
                        </div>
                        <article>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the and typesetting industry. </p>
                        </article>
                    </div>
                    <div className={classes.footerWidget}>
                        <div className={classes.footerTitle}>
                            <h5> LATEST BLOG POST </h5>
                        </div>
                    </div>
                    <div className={classes.footerWidget}>
                        <div className={classes.footerTitle}>
                            <h5> SUBSCRIBE NEWSLETTER </h5>
                        </div>
                        <article>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </article>
                        <div className={classes.formGroup}>
                            <input type="text" name="" id="" placeholder='subscribe newsletter' />
                        </div>
                    </div>
                    <div className={classes.footerWidget}>
                        <div className={classes.footerTitle}>
                            <h5> FOLLOW US INSTAGRAM </h5>
                        </div>
                    </div>
                </div>
                <div className={classes.footerBottom}>
                    <p> POFO - Portfolio Concept Theme </p>
                    <p> &coppy; 2021 POFO is Proudly Powered by ThemeZaa </p>
                </div>
            </footer>
        </div>
    )
}

export default Layout