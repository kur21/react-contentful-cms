import heroImg from './assets/hero.svg'

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto blanditiis hic nisi aperiam minus, nam tempore. Recusandae modi quisquam iste eveniet. Nesciunt soluta doloremque, laborum iure ea odio adipisci suscipit.</p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="dev" className='img' />
        </div>
      </div>
		</section>
	)
}
export default Hero
