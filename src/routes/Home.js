import React from "react";
import Footer from "../components/Footer";

function Home() {

	const urlFeaturedImage = 'https://blog.epikube.fr/content/images/2019/08/Base-Profile-Screenshot-2019.07.31---01.00.11.99.png'
	const urlTestImage = 'https://teamvisionary.net/wp-content/uploads/2020/06/Mageville.jpg'

	return (
		<React.Fragment>
			<div className="featured-content">
				<div className="featured-image"
					style={{ backgroundImage: 'url(' + urlFeaturedImage + ')' }}>
				</div>
				<div className="featured-wrapper">
					<div className="featured-container">
						<span className="tag tag-featured">
							<i className="ri-star-line"></i> Featured
                    </span>
						<h1><a href="#">Lorem ipsum dolor sit amet.</a>
						</h1>
						<div className="featured-meta">
							<span>by</span>
							<a href="/author/3DX900/">3DX900</a>
							<time datetime="2020-09-12">16 days ago</time>
						</div>
					</div>
				</div>
			</div>
			<div className="loop-content container">
				<div className="row">
					<div className="col-lg-4 item-wrapper">
						<div className="item-container"
							style={{ backgroundImage: 'url(' + urlTestImage + ')' }}>
							<a className="item-link" href="#"></a>
							<h1>Lorem ipsum dolor sit amet.</h1>
							<div className="item-meta">
								<span>by</span>
								<a href="/author/3DX900/">3DX900</a>
								<time datetime="2020-09-12">16 days ago</time>
							</div>
							<a href="tag.html" className="tag tag-item">
								Interview
                        </a>
						</div>
					</div>
					<div className="col-lg-4 item-wrapper">
						<div className="item-container"
							style={{ backgroundImage: 'url(' + urlTestImage + ')' }}>
							<h1><a href="#">Lorem ipsum dolor sit amet.</a>
							</h1>
							<div className="item-meta">
								<span>by</span>
								<a href="/author/3DX900/">3DX900</a>
								<time datetime="2020-09-12">16 days ago</time>
							</div>
							<a href="tag.html" className="tag tag-item">
								Interview
                        </a>
						</div>
					</div>
					<div className="col-lg-4 item-wrapper">
						<div className="item-container"
							style={{ backgroundImage: 'url(' + urlTestImage + ')' }}>
							<h1><a href="#">Lorem ipsum dolor sit amet.</a>
							</h1>
							<div className="item-meta">
								<span>by</span>
								<a href="/author/3DX900/">3DX900</a>
								<time datetime="2020-09-12">16 days ago</time>
							</div>
							<a href="tag.html" className="tag tag-item">
								Interview
                        </a>
						</div>
					</div>
					<div className="col-lg-4 item-wrapper">
						<div className="item-container"
							style={{ backgroundImage: 'url(' + urlTestImage + ')' }}>
							<h1><a href="#">Lorem ipsum dolor sit amet.</a>
							</h1>
							<div className="item-meta">
								<span>by</span>
								<a href="/author/3DX900/">3DX900</a>
								<time datetime="2020-09-12">16 days ago</time>
							</div>
							<a href="tag.html" className="tag tag-item">
								Interview
                        </a>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default Home;
