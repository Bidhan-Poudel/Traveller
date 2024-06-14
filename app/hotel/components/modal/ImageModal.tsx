// ImageModal.tsx
import { Image, Modal } from "@mantine/core";
import React from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  return (
    <Modal opened={isOpen} p={0} m={0} onClose={onClose} size={"900"} bg={"transparent"}  withCloseButton={false}>
      <Image src={image} alt="hotel image" />
    </Modal>
  );
};

export default ImageModal;
