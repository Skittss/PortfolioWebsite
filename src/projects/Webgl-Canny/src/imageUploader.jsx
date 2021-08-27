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

    // Load image from the uploaded file.
    // Antd usually expects an API call for uploading files, so this works the same way as an API call.
    const loadImageLocally = async ({ file, onSuccess }) => {

        new Promise(resolve => {

            setTimeout(() => {

                let src = URL.createObjectURL(file);
                let img = new Image();
                img.onload = () => {
                    resolve({src: src, dim: {width: img.width, height: img.height}})
                }
                img.src = src;

            }, 30);
        }).then(data => onSuccess(data));
    }

    // Handle status of uploading file from antd component.
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
        // TODO: I *think* more than these file formats can be handled as well, but they should be tested individually to check.
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
                (large images may take a long time to process)
            </p>
        </Dragger>
    );
}

export default ImageUploader;