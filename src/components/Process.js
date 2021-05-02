import { Link } from 'react-router-dom';

const Process = ({ home }) => (
  <div
    className={`u-margin-left-right-s u-border-radius ${
      home === false ? 'bg-dark process__container' : ''
    }`}
  >
    <section className="process u-margin-bottom-m u-margin-left-right-s">
      <div className="process__items grid-3">
        <div
          className={`process-item ${
            home === false ? 'process-item--dark' : null
          }`}
        >
          <h1 className="heading-primary heading-primary--orange">01</h1>
          <h2
            className={`heading-secondary ${
              home === true
                ? 'heading-secondary--dark'
                : 'heading-secondary--light'
            }`}
          >
            Pick your
            <br />
            coffee
          </h2>
          <p className={home === true ? 'text-dark' : 'text-light'}>
            Pick your coffee Select from our evolving range of artisan coffees.
            Our beans are ethically sourced and we pay fair prices for them.
            There are new coffees in all profiles every month for you to try
            out.
          </p>
        </div>
        <div
          className={`process-item ${
            home === false ? 'process-item--dark' : null
          }`}
        >
          <h1 className="heading-primary heading-primary--orange">02</h1>
          <h2
            className={`heading-secondary ${
              home === true
                ? 'heading-secondary--dark'
                : 'heading-secondary--light'
            }`}
          >
            Choose the <br />
            frequency
          </h2>
          <p className={home === true ? 'text-dark' : 'text-light'}>
            Choose the frequency Customize your order frequency, quantity, even
            your roast style and grind type. Pause, skip or cancel your
            subscription with no commitment through our online portal.
          </p>
        </div>
        <div
          className={`process-item ${
            home === false ? 'process-item--dark' : null
          }`}
        >
          <h1 className="heading-primary heading-primary--orange">03</h1>
          <h2
            className={`heading-secondary ${
              home === true
                ? 'heading-secondary--dark'
                : 'heading-secondary--light'
            }`}
          >
            Receive and <br />
            enjoy!
          </h2>
          <p className={home === true ? 'text-dark' : 'text-light'}>
            Receive and enjoy! We ship your package within 48 hours, freshly
            roasted. Sit back and enjoy award-winning world-className coffees
            curated to provide a distinct tasting experience.
          </p>
        </div>
      </div>
      {home === true ? (
        <Link to="/plan" className="btn-plan">
          Create your plan
        </Link>
      ) : null}
    </section>
  </div>
);

export default Process;
