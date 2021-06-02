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

                let src = URL.createObjectURL(file);
                let img = new Image();
                img.onload = () => {
                    resolve({src: src, dim: {width: img.width, height: img.height}})
                }
                img.src = src;

                // // Load image as base64 dataURL using FileReader
                // const reader = new FileReader();
                // reader.onload = event => {
                    
                //     let img = new Image();
                //     img.src = event.target.result;
                //     img.onload = () => 
                //     {
                //         let data = {src: event.target.result, dim: {width: img.width, height: img.height}}
                //         img.src = null;
                //         img = null;
                //         //resolve(data)
                //         resolve({src: URL.createObjectURL(file), dim: {width: 690, height: 690}})
                //     }
                // }
                // reader.readAsDataURL(file);

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
            file.type === "image/png" || file.type ==="image/jpeg"
        );
        if (!validFormat) {
            message.error("Only PNG/JPEG files are supported.")
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