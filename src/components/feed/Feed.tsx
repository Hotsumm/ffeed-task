import Image from 'next/image';
import { useState } from 'react';
import classes from './Feed.module.css';

export default function Feed() {
  const [preViewImage, setPreViewImage] = useState<string | null>(null);

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPreViewImage(null);
    if (!event.target.files) return;
    const file: File = event.target.files[0];
    setPreViewImage(URL.createObjectURL(file));
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
                <div className={classes.imageWrapper}>
                  <Image
                    src={preViewImage}
                    alt="이미지"
                    width={400}
                    height={400}
                  />
                </div>
                <p className={classes.button}>제품 태그하기</p>
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
    </div>
  );
}
