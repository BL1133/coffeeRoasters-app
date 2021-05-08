import React from 'react';
import Summary from '../components/Summary';
import ReactModal from 'react-modal';

function SubmitModal(props) {
  ReactModal.setAppElement('#root');
  return (
    <ReactModal
      isOpen={props.isOpen}
      contentLabel={'Submit Modal'}
      // preventScroll={true}
      // ariaHideApp={true}
    >
      <Summary isModal={true} />
    </ReactModal>
  );
}

export default SubmitModal;
