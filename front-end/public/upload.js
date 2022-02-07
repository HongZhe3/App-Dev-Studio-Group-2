import React, {useState} from 'react';

export default function Upload(){
    const[fileInputState,setFileInputState]=useState('');
    const[selectedFile,setSelectedFile]=useState('');
    const handleFileInputChange=(e)=>{
        const file=e.target.files[0];
        previewFile(file);
    }
    const previewFile=(file)=>{
        const reader=new FileReader();
        reader.readAsDataURL(file);
    }
    return(
        <div>
            <h1>Upload</h1>
            <form>
                <input 
                type='file'
                name='image'
                onChange={handleFileInputChange}
                value={fileInputState}
                className='form-input'/>
                <button className='btn'type='button'>Submit</button>
            </form>
        </div>
    );
}