import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info,setInfo]=useState({});
    const [file,setFile]=useState(null);
    const handleBlur=e=>{
        const newInfo={...info};
        newInfo[e.target.name]=e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange=e=>{
        const newFile=e.target.files[0];
        setFile(newFile);
        
    }
    
    const handleSubmit=()=>{
        const formData = new FormData();
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
      
        fetch('http://localhost:5000/addDoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }
   
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 my-5 ml-3">
                <h3 className="text-primary">Add Doctor</h3>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" id="email" name="email" placeholder="Enter email" />
                        
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" id="name" name="name" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="uploadImage">Upload Image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" id="uploadImage" name="image" placeholder="Image" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;