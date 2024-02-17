'use client';

import { Button } from 'antd';
import CreateOrUpdateMatchModal from 'app/components/CreateOrUpdateMatchModal';
import { useState } from 'react';

export default function CreateMatchArea() {
  // State
  const [isShowCreateMatchModal, setIsShowCreateMatchModal] =
    useState<boolean>(false);

  // Function
  const openCreateMatchModal = () => {
    console.log('click');
    setIsShowCreateMatchModal(true);
  };

  const hideCreateMatchModal = () => {
    console.log('click');
    setIsShowCreateMatchModal(false);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-xl mb-4">
        <p className="font-bold text-base mt-0">Create New Match</p>
        <div className="px-4">
          <Button
            type="primary"
            className="bg-purple hover:!bg-purple-1 w-full font-semibold h-[40px]"
            onClick={openCreateMatchModal}
          >
            Start Creating!
          </Button>
        </div>
      </div>

      {/* Modal */}
      {isShowCreateMatchModal && (
        <CreateOrUpdateMatchModal onCancel={hideCreateMatchModal} />
      )}
    </>
  );
}
