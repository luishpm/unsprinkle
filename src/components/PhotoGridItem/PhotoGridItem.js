import React from 'react';
import styled from 'styled-components/macro';
import Image from "../Image";



const PhotoGridItem = ({id, src, alt, tags}) => {
  return (
      <article>
        <Anchor href={`/photos/${id}`}>
          <ImageWrapper >
            <Image src={src} alt={alt} />
          </ImageWrapper>
        </Anchor>
        <Tags>
          {tags.map((tag) => (
              <Tag key={tag} style={{'--shrink': Math.pow(2, tag.length)}}>{tag}</Tag>
          ))}
        </Tags>
      </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const ImageWrapper = styled.div`
  img {
    display: block;
    width: 100%;
    height: 300px;
    border-radius: 2px;
    margin-bottom: 8px;
    object-fit: cover;
  }
`;

const Tags = styled.ul`
  display: flex;
  white-space: nowrap;
  gap: 8px;
`;

const Tag = styled.li`
  --shrink: 1;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: var(--shrink);
  min-width: 50px;
`;

export default PhotoGridItem;
