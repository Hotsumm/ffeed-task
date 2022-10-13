import classes from './Feed.module.css';
import React, { useState } from 'react';
import Image from 'next/image';
import TagListModal from './TagListModal';

import { Product } from '../../types/product';
import { Tag } from '../../types/tag';

type Coordinate = {
  x: number;
  y: number;
};

export default function Feed() {
  const [preViewImage, setPreViewImage] = useState<string | null>(null);
  const [isEditTag, setIsEditTag] = useState<boolean>(false);
  const [isClickImage, setIsClickImage] = useState<boolean>(false);
  const [currentCoordinate, setCurrentCoordinate] = useState<Coordinate | null>(
    null
  );
  const [tagList, setTagList] = useState<Tag[]>([]);

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPreViewImage(null);
    if (!event.target.files) return;
    const file: File = event.target.files[0];
    setPreViewImage(URL.createObjectURL(file));
  }

  function handleEditTag() {
    setIsEditTag((prev) => !prev);
  }

  function handleImageClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    if (!isEditTag) return;

    const { offsetX, offsetY } = event.nativeEvent;
    setCurrentCoordinate({ x: offsetX, y: offsetY });
    setIsClickImage(true);
  }

  function handleSelectProduct(product: Product) {
    if (!currentCoordinate) return;
    setTagList((prev) => [...prev, { ...currentCoordinate, ...product }]);
    setCurrentCoordinate(null);
    setIsClickImage(false);
  }

  return (
    <div className={classes.content}>
      <main className={classes.main}>
        <div className={classes.feed}>
          <nav className={classes.nav}>
            <div>ffeed</div>
          </nav>
          <div className={classes.uploadFile}>
            {preViewImage ? (
              <div className={classes.preview}>
                <div className={classes.image} onClick={handleImageClick}>
                  <Image
                    src={preViewImage}
                    alt="이미지"
                    width={400}
                    height={400}
                  />
                </div>
                <p className={classes.button} onClick={handleEditTag}>
                  {isEditTag ? '완료' : '제품 태그하기'}
                </p>

                {tagList.length > 0 &&
                  tagList.map((tag) => (
                    <div
                      className={classes.tag}
                      key={tag.id}
                      style={{ top: `${tag.y}px`, left: `${tag.x}px` }}
                    >
                      <span></span>
                      <div className={classes.tagInfo}>
                        <div className={classes.image}>
                          <Image
                            src={tag.image}
                            alt={tag.name}
                            width={30}
                            height={30}
                          />
                        </div>
                        <div>{tag.name}</div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className={classes.upload}>
                <label htmlFor="input-file">
                  <div className={classes.uploada}>
                    <p>이미지를 업로드 해주세요</p>
                  </div>
                  <p className={classes.button}>+ 업로드</p>
                </label>
                <input
                  type="file"
                  id="input-file"
                  accept="image/*"
                  onChange={onFileChange}
                />
              </div>
            )}
          </div>
        </div>
      </main>
      {isClickImage && (
        <TagListModal handleSelectProduct={handleSelectProduct} />
      )}
    </div>
  );
}
