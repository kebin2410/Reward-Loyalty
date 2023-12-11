import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsCloudUpload } from "react-icons/bs";

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
    transition: 'border .24s ease-in-out'
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
                    <BsCloudUpload size={"30px"} />
                    <h6><b>Click to upload</b></h6>
                    <h6>jpeg, png, jpg, gif, or svg (Max. 1024X1024px, 1MB)</h6>
                </div>
            </div>
        </div>
    );
}

