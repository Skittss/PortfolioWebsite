import React, { useState } from 'react'
import { message, Upload } from 'antd'
import { InboxOutlined, LoadingOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const UploadIcon = ({loading}) => {
    return (
        loading ? <LoadingOutlined spin /> : <InboxOutlined />
    )
}

const ImageUploader = ({onLoadCallback, style}) => {

    const [loadingImage, setLoadingImage] = useState(false);

    const loadImageLocally = async ({ file, onSuccess }) => {

        new Promise(resolve => {

            setTimeout(() => {

                // Load image as base64 dataURL using FileReader
                const reader = new FileReader();
                reader.onload = event => {
                    
                    const img = new Image();
                    img.src = event.target.result;
                    img.onload = () => 
                    {
                        resolve({src: event.target.result, dim: {width: img.width, height: img.height}})

                    }
                }
                reader.readAsDataURL(file);

            }, 30);
        }).then(data => onSuccess(data));
    }

    const handleChange = info => {
        if (info.file.status === "uploading") {
            setLoadingImage(true);
        } else if (info.file.status === "done") {
            setLoadingImage(false);
            onLoadCallback(info.file.response);
        } else {
            setLoadingImage(false);
            console.log(info.file.status);
        }
    }

    const validateUpload = file => {
        const validFormat = (
            file.type === "image/png"
        );
        if (!validFormat) {
            message.error("Only PNG images are supported")
            return false;
        }
        return true;
    }

    return (
        <Dragger style={style}
            name="source-image"
            multiple={false}
            listType="picture-card"
            className="src-img-uploader"
            showUploadList={false}
            customRequest={loadImageLocally}
            beforeUpload={validateUpload}
            onChange={handleChange}
        >
            <p className="ant-upload-drag-icon">
                <UploadIcon loading={loadingImage} />
            </p>
            <p className="ant-upload-text">
                {"Click or drag an image to this area to begin"}
            </p>
            <p className="ant-upload-hint">
                (large images may take a very long time to process)
            </p>
        </Dragger>
    );
}

export default ImageUploader;