import React from 'react';
import styled from 'styled-components';

interface MaskedImageProps {
  src: string;
  alt: string;
  mask: string;
  className: string;
  invertMask?: boolean;
}

const MaskedImageStyle = styled.img<{
  src: string;
  alt: string;
  mask: string;
  invertMask: boolean;
}>`
  width: 100%;
  aspect-ratio: 1;
  display: inline-block;
  background: red;

  /* Normal Mask */
  mask: url(${(props) => props.mask}) center/contain no-repeat;

  /* Inverted Mask using mask-composite: exclude */
  ${(props) =>
    props.invertMask &&
    `
    mask: url(${props.mask}) center/contain no-repeat,
    linear-gradient(#000 0 0); /* Extra layer for mask-composite */
    mask-composite: exclude;
  `}
`;

const MaskedImage: React.FC<MaskedImageProps> = ({
  src,
  alt,
  mask,
  invertMask = false,
  className,
}) => {
  return (
    <MaskedImageStyle
      src={src}
      alt={alt}
      mask={mask}
      invertMask={invertMask}
      className={className}
    />
  );
};

export default MaskedImage;
