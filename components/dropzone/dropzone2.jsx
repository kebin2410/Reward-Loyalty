import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsCloudUpload, BsCamera  } from "react-icons/bs";

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'gray',
    borderStyle: 'dashed',
    backgroundColor: 'var(--bs-inner-color)',
    color: 'var(--head-color)',
    outline: 'none',
    transition: 'border .24s ease-in-out',
};

const focusedStyle = {
    borderColor: 'gray'
};

const acceptStyle = {
    borderColor: 'white'
};

const rejectStyle = {
    borderColor: 'gray'
};

export default function StyledDropzone(props) {
    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({ accept: { 'image/*': [] } });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    return (
        <div className="container">
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <div className='text-center'>
                    <BsCamera size={"30px"} />
                    <h6 className='p-2'><b>Add a photo of the receipt</b></h6>
                </div>
            </div>
        </div>
    );
}

