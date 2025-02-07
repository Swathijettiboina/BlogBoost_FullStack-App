import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function AddBlog() {

    const addBlog=()=>{
        
    }
  return (
    <>
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto"> 
            {/* <h1>Add new Blog</h1> */}
            <div className="form-group max-w-md mx-auto my-10 p-8 bg-white border rounded-lg shadow-xl">
                    <div className='mb-4 mt-4 '>  
                        <label for="title" className="block justify-center font-bold text-xl mb-2">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="Enter title" />
                    </div>
                    <div>
                        <label for="description" className="block justify-center font-bold text-xl mb-2">Description</label>
                        <textarea className="form-control" id="description" ></textarea>    
                    </div>
                    <div>
                        <label for="image" className="block justify-center font-bold text-xl mb-2">Image</label>
                        <input type="text" className="form-control" id="image" />
                    </div>
                    <div>
                        <label for="category" className="block justify-center font-bold text-xl mb-2">Content</label>
                        <input type="text" className="form-control" id="category" rows="5" placeholder="Enter category" />
                    </div>
                    <div>
                        <button type="button" onClick={()=>{AddBlog()}} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
                    </div>
            </div>
        </div>

    </>
  )
}

export default AddBlog
