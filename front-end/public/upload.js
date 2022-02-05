export default function Upload(){
    const[fileInputState,setFileInputState]=useState('');
    const[selectedFile,setSelectedFile]=useState('');
    const handleFileInputChange=(e)=>{
        const file=e.target.files[0];
    }
    return(
        <div>
            <h1>Upload</h1>
            <form>
                <input 
                type='file'
                name='image'
                onChange={}
                value={fileInputState}
                className='form-input'/>
                <button className='btn'type='button'>Submit</button>
            </form>
        </div>
    );
}