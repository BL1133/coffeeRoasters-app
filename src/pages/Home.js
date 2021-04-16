import { Link } from 'react-router-dom';
import granEspresso from '../assets/home/desktop/image-gran-espresso.png';
import piccollo from '../assets/home/desktop/image-piccollo.png';
import planalto from '../assets/home/desktop/image-planalto.png';
import coffeeBean from '../assets/home/desktop/icon-coffee-bean.svg';
import danche from '../assets/home/desktop/image-danche.png';
import iconGift from '../assets/home/desktop/icon-gift.svg';
import iconTruck from '../assets/home/desktop/icon-truck.svg';
const Home = () => (
  <main>
    {/* Hero Section --> */}
    <section className="hero-container u-margin-left-right-s u-margin-bottom-m u-border-radius">
      <div className="hero u-margin-left-right-s">
        <h1 className="heading-primary">Great coffee made simple.</h1>
        <p className="text-light">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link to="#" className="btn-plan">
          Create your plan
        </Link>
      </div>
    </section>
    {/*  Products Section --> */}
    <section className="products-section u-margin-bottom-m u-margin-left-right-m">
      <h1 className="heading-large">our collection</h1>
      <div className="product-container">
        <div className="product">
          <img
            className="product__img"
            alt="gran expresso"
            src={granEspresso}
          />
          <h3 className="heading-quaternary heading-quaternary--dark">
            Gran Espresso
          </h3>
          <p className="text-dark">
            Light and flavorful blend with cocoa and black pepper for an intense
            experience
          </p>
        </div>
        <div className="product">
          <img className="product__img" src={planalto} alt="planalto" />
          <h3 className="heading-quaternary heading-quaternary--dark">
            Planalto
          </h3>
          <p className="text-dark">
            Brazilian dark roast with rich and velvety body, and hints of fruits
            and nuts
          </p>
        </div>
        <div className="product">
          <img className="product__img" src={piccollo} alt="piccollo" />
          <h3 className="heading-quaternary heading-quaternary--dark">
            Piccollo
          </h3>
          <p className="text-dark">
            Mild and smooth blend featuring notes of toasted almond and dried
            cherry
          </p>
        </div>
        <div className="product">
          <img className="product__img" src={danche} alt="danche" />
          <h3 className="heading-quaternary heading-quaternary--dark">
            Danche
          </h3>
          <p className="text-dark">
            Ethiopian hand-harvested blend densely packed with vibrant fruit
            notes
          </p>
        </div>
      </div>
    </section>
    {/* features section --> */}
    <section className="features u-margin-left-right-s">
      <div className="features__header u-border-radius">
        <h2 className="heading-secondary">Why choose us?</h2>
        <p className="text-light">
          Why choose us? A large part of our role is choosing which particular
          coffees will be featured in our range. This means working closely with
          the best coffee growers to give you a more impactful experience on
          every level.
        </p>
      </div>
      <div className="features__card-container grid-3 u-margin-left-right-s">
        <div className="card u-border-radius">
          <img src={coffeeBean} alt="coffee bean" />
          <h3 className="heading-quaternary">Best Quality</h3>
          <p className="text-light">
            Discover an endless variety of the world’s best artisan coffee from
            each of our roasters.
          </p>
        </div>
        <div className="card u-border-radius">
          <img src={iconGift} alt="gift" />
          <h3 className="heading-quaternary">Exclusive Benefits</h3>
          <p className="text-light">
            Special offers and swag when you subscribe, including 30% off your
            first shipment.
          </p>
        </div>
        <div className="card u-border-radius">
          <img src={iconTruck} alt="transport truck" />
          <h3 className="heading-quaternary">Free shipping</h3>
          <p className="text-light">
            We cover the cost and coffee is delivered fast. Peak freshness:
            guaranteed.
          </p>
        </div>
      </div>
    </section>
    {/* process section --> */}
    <section className="process u-margin-bottom-m u-margin-left-right-m">
      <h3 className="heading-quaternary">How it works</h3>
      <div className="process__items grid-3">
        <div className="process-item">
          <h1 className="heading-primary heading-primary--orange">01</h1>
          <h2 className="heading-secondary heading-secondary--dark">
            Pick your
            <br />
            coffee
          </h2>
          <p className="text-dark">
            Pick your coffee Select from our evolving range of artisan coffees.
            Our beans are ethically sourced and we pay fair prices for them.
            There are new coffees in all profiles every month for you to try
            out.
          </p>
        </div>
        <div className="process-item">
          <h1 className="heading-primary heading-primary--orange">02</h1>
          <h2 className="heading-secondary heading-secondary--dark">
            Choose the <br />
            frequency
          </h2>
          <p className="text-dark">
            Choose the frequency Customize your order frequency, quantity, even
            your roast style and grind type. Pause, skip or cancel your
            subscription with no commitment through our online portal.
          </p>
        </div>
        <div className="process-item">
          <h1 className="heading-primary heading-primary--orange">03</h1>
          <h2 className="heading-secondary heading-secondary--dark">
            Receive and <br />
            enjoy!
          </h2>
          <p className="text-dark">
            Receive and enjoy! We ship your package within 48 hours, freshly
            roasted. Sit back and enjoy award-winning world-className coffees
            curated to provide a distinct tasting experience.
          </p>
        </div>
      </div>
      <Link to="#" className="btn-plan">
        Create your plan
      </Link>
    </section>
  </main>
);

export default Home;
