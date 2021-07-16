import React, {useState} from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const SandboxModal = (args) =>  {
    const [isModal, setModal] = useState(false);
    return (
      <>
        <Button onClick={() => setModal(true)} label={"Click here to open Modal"} />
        <Modal
          isVisible={isModal}
          content={<></>}
          footer={<></>}
          onClose={() => setModal(false)}
        />
      </>)
}


export const CreateModal = (args) =>  {
    const [isModal, setModal] = useState(false);
    return (
      <>
        <Button onClick={() => setModal(true)} label={"Click here to open Modal"} />
        <Modal
          isVisible={isModal}
          title="Create New Folder"
          content={<input />}
          footer={<><Button variant="tertiary" label='Cancel' size='large' /> <Button label='Create' size='large' /></>}
          onClose={() => setModal(false)}
        />
      </>)
}

export const DeleteModal = (args) =>  {
    const [isModal, setModal] = useState(false);
    return (
      <>
        <Button variant="warning" onClick={() => setModal(true)} label={"Click here to open Modal"} />
        <Modal
          isVisible={isModal}
          title="Delete"
          content={<text>Are you sure you want to delete this design? You will not be able to retrieve it.</text>}
          footer={<><Button variant="tertiary" label='Cancel' size='large' /> <Button variant='warning' label='Delete' size='large' /></>}
          onClose={() => setModal(false)}
        />
      </>)
}