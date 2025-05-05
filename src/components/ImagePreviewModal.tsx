import { useState } from 'react';
import './ImagePreviewModal.css';

const ImagePreviewModal = ({
  src,
  alt = 'Preview image',
}: {
  src: string;
  alt: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="thumbnail"
        onClick={() => setOpen(true)}
      />

      {open && (
        <div className="image-modal-backdrop" onClick={() => setOpen(false)}>
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}>
            <button
              className="image-modal-close"
              onClick={() => setOpen(false)}>
              × Close
            </button>
            <img src={src} alt={alt} className="image-modal-img" />
          </div>
        </div>
      )}
    </>
  );
};

export default ImagePreviewModal;
