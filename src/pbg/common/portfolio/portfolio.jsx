import React from "react";
import "./portfolio.css"

class Portfolio extends React.Component {
    state = {
        images: [],
        urls: [
            'https://www.instagram.com/p/CDubZKUgiRs/',
            'https://www.instagram.com/p/CA_THzMgCyH/', 
            'https://www.instagram.com/p/CA_TFMZgltt/',
            'https://www.instagram.com/p/CA_TBjKgJ7t/',
            'https://www.instagram.com/p/CDO4lEmA9ii/',
            'https://www.instagram.com/p/CDO4ew0A69f/',
            'https://www.instagram.com/p/CC_4m_vA2kd/',
            'https://www.instagram.com/p/CC_4h-KAmp2/',
            'https://www.instagram.com/p/CC_4Z70gxO9/',
            'https://www.instagram.com/p/CA_TReKAxFI/',
            'https://www.instagram.com/p/CA_TM1wgfhm/',
            'https://www.instagram.com/p/CA_TJvUgJTF/'
            ]
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
        const {urls} = this.state
        images.map((image, index )=> {
            renderImages.push(
                <div className="portfolio-image" key={index}>
                    <a href={urls[index]} className="column col-xs-6" id="caption" target="_blank">
                        <span className="text">
                            <h3>Ver mais...</h3>
                        </span>
                        <img src={image}/>
                    </a>
                    
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