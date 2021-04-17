import Australia from '../assets/about/desktop/illustration-australia.svg';
import Canada from '../assets/about/desktop/illustration-canada.svg';
import UK from '../assets/about/desktop/illustration-uk.svg';
import Commitment from '../assets/about/desktop/image-commitment.jpg';
import Quality from '../assets/about/desktop/image-quality.jpg';
const About = () => (
  <main>
    <section className="hero-about u-margin-bottom-m-2 u-border-radius u-margin-left-right-s">
      <div className="hero-about__container u-margin-left-right-s">
        <h2 className="heading-secondary">About Us</h2>
        <p className="text-light">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </section>
    <section className="commitment u-margin-bottom-m u-margin-left-right-m">
      <img
        className="u-border-radius"
        src={Commitment}
        alt="employee making coffee"
      />
      <div className="commitment__text">
        <h2 className="heading-secondary">Our Commitment</h2>
        <p className="text-dark">
          Our commitment We’re built on a simple mission and a commitment to
          doing good along the way. We want to make it easy for you to discover
          and brew the world’s best coffee at home. It all starts at the source.
          To locate the specific lots we want to purchase, we travel nearly 60
          days a year trying to understand the challenges and opportunities in
          each of these places. We collaborate with exceptional coffee growers
          and empower a global community of farmers through with well above
          fair-trade benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </section>
    <section className="quality u-border-radius u-margin-bottom-m-2 u-margin-left-right-s">
      <div className="quality__container u-margin-left-right-s">
        <div className="quality__text">
          <h2 className="heading-secondary">Uncompromising quality</h2>
          <p className="text-light">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
        <img className="u-border-radius" src={Quality} alt="cup of coffee" />
      </div>
    </section>
    <section className="location u-margin-bottom-m-2 u-margin-left-right-m">
      <h4 className="heading-quaternary">Our headquarters</h4>
      <div className="grid-3">
        <div className="location__item">
          <img src={UK} alt="United Kingdom" />
          <h3 className="heading-tertiary heading-tertiary--dark">
            United Kingdom
          </h3>
          <p className="text-dark">
            68 Asfordby Rd <br />
            Alcaston <br />
            SY6 1YA <br />
            +44 1241 918425
          </p>
        </div>
        <div className="location__item">
          <img src={Canada} alt="Canada" />
          <h3 className="heading-tertiary heading-tertiary--dark">Canada</h3>
          <p className="text-dark">
            1528 Eglinton Avenue <br />
            Toronto <br />
            Ontario M4P 1A6 <br />
            +1 416 485 2997
          </p>
        </div>
        <div className="location__item">
          <img src={Australia} alt="Australia" />
          <h3 className="heading-tertiary heading-tertiary--dark">Australia</h3>
          <p className="text-dark">
            36 Swanston Street <br />
            Kewell <br />
            Victoria <br />
            +61 4 9928 3629
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default About;
