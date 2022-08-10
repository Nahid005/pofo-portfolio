import Layout from "../layout/Layout"
import classes from './Home.module.css'
import Slider from "../../homepage-3-slider-img-1.jpg"
import option from "../../homepage-option17-banner-bg.jpg"

function Home () {
    return(
        <Layout> 
            <div className={classes.mainSlider}>
                <div className={classes.sliderImg}>
                    <img src={Slider} alt="" />
                </div>
                <div className={classes.sliderContant}>
                    <p> We Work Hard, We Play Hard </p>
                    <h1> A Software Development Company </h1>
                    <button className={classes.btn}> Explore More.. </button>
                </div>
            </div>
            <div className={classes.optionSection} style={{backgroundImage:`url(${option})`,}}>
                <div className={classes.optionContant}>
                    <h6> Easy way to build perfect websites </h6>
                    <h3> Beautifully handcrafted templates for your website </h3>
                    <article>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 's standard dummy text. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text.</p>
                    </article>
                </div>
            </div>
        </Layout>
    )
}

export default Home