import ImageUploading from 'react-images-uploading'

const ImageUploader = ({ value, onChange, multiple }: any) => {
  return (
    <ImageUploading multiple={multiple} value={value} onChange={onChange} dataURLKey="data_url">
      {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove }) => (
        <div className="upload__image-wrapper ml-[1.5rem] mb-[1rem]">
          <button type="button" onClick={onImageUpload}>
            파일추가
          </button>
          &nbsp;
          <button type="button" onClick={onImageRemoveAll}>
            모두삭제
          </button>
          <ul className="mt-[1rem] flex w-full">
            {imageList.map((image, index) => (
              <li key={index} className="image-item mr-[1rem]">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button type="button" className="mr-[1rem]" onClick={() => onImageUpdate(index)}>
                    수정
                  </button>
                  <button type="button" onClick={() => onImageRemove(index)}>
                    삭제
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </ImageUploading>
  )
}

export default ImageUploader

//div-> ul  -> li

//alt
