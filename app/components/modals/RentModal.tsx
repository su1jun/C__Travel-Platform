'use client';

import useRentModal from '@/app/hooks/useRentModal';

import Modal from "./Modal";


const RentModal = () => {
  const rentModal = useRentModal();

  return (
    <Modal
      isOpen={rentModal.isOpen}
      onSubmit={rentModal.onClose}
      onClose={rentModal.onClose}
      title="Airbnb your home!"
      actionLabel="Submit"
    />
  );
}

export default RentModal;
