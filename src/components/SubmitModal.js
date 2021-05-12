import React, { useContext } from 'react';
import Summary from '../components/Summary';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { StateContext } from '../pages/Plan';

function SubmitModal(props) {
  const appState = useContext(StateContext);

  function costPerMonth() {
    const weight = appState.sum[2];
    const frequency = appState.sum[4];
    const camelize = (str) => {
      const arr = str.split(' ');
      const firstChar = arr[0].toLowerCase();
      const rest = arr
        .slice(1)
        .map((a) => a.trim())
        .map((a) => a[0].toUpperCase() + a.substring(1))
        .join('');
      return firstChar.concat(rest);
    };
    const shipmentCost = appState.shipmentCost[weight][camelize(frequency)];

    switch (frequency) {
      case 'Every week':
        return numeral(shipmentCost * 4).format('0.00');
      case 'Every 2 weeks':
        return numeral(shipmentCost * 2).format('0.00');
      case 'Every month':
        return numeral(shipmentCost).format('0.00');
      default:
        break;
    }
  }

  ReactModal.setAppElement('#root');
  return (
    <ReactModal
      isOpen={!!appState.submitModal}
      contentLabel={'Submit Modal'}
      preventScroll={true}
      ariaHideApp={true}
      className={'submit-modal-content'}
      shouldCloseOnEsc={true}
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
          <h3 className="heading-tertiary submit-modal-price">
            {`$ ${costPerMonth()}/ mo`}
          </h3>
          <Link to="#" className="btn-plan submit-modal-btn">
            Checkout
          </Link>
        </div>
      </div>
    </ReactModal>
  );
}

export default SubmitModal;
