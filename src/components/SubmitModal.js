import React, { useContext } from 'react';
import Summary from '../components/Summary';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import { StateContext } from '../pages/Plan';

function SubmitModal(props) {
  const appState = useContext(StateContext);

  ReactModal.setAppElement('#root');
  return (
    <ReactModal
      isOpen={false}
      contentLabel={'Submit Modal'}
      preventScroll={true}
      ariaHideApp={true}
      className={'submit-modal-content'}
    >
      <h3 className="submit-modal__heading heading-tertiary">Order Summary</h3>
      <div className="submit-modal-content__container">
        <Summary isModal={true} />
        <p className="submit-modal__text">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
        <div className="submit-modal__price-container">
          <h3 className="heading-tertiary submit-modal-price">{}</h3>
          <Link to="#" className="btn-plan submit-modal-btn">
            Checkout
          </Link>
        </div>
      </div>
    </ReactModal>
  );
}

export default SubmitModal;
