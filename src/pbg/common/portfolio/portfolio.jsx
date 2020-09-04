import React from "react";
import "./portfolio.css"

class Portfolio extends React.Component {
    state = {
        images: [],
    }

    componentDidMount() {
        let images = this.importImages(require.context('./../../static/images/portfolio', false, /\.(png|jpe?g)$/));
        this.setState({images : images})
    }

    importImages = r => {
        let images = [];
         r.keys().map(item => {
             let path = images[item.replace('./', '')] = r(item);
             images.push(path)
        })
        return images;
    }

    renderImages = images => {
        let renderImages = []
        images.map(image => {
            renderImages.push(
                <div className="portfolio-image">
                    <img src={image}/>
                </div>
            )}
        )

        return renderImages
    }



    render() {
        const { images } = this.state
        return (
            <div className="portfolio" id="portfolio">
                <h2>PORTOFILIO</h2>
                <div className="portfolio-images">
                    {images.length > 0 && this.renderImages(images)}
                </div>
            </div>
        )
    }
}

export default Portfolio