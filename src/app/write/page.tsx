'use client'
import { PhotoIcon, PlusCircleIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import { Editor } from '@tinymce/tinymce-react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const Write = () => {

    const { status } = useSession();
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [cat, setCat] = useState("");
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState<File | null>(null);





    if(status === 'loading') {
        return <div className='mt-[9vh] flex items-center justify-center min-h-[75vh]'>Loading...</div>
      }
    
      if(status === 'authenticated') {
        router.push('/')
    }



  return (
    <div className='min-h-[69vh] mt-[10vh] relative flex flex-col w-[90%] mx-auto mb-[6vh]'>
        <input 
            type='text' 
            placeholder='Title' 
            className='w-full h-14 border-2 border-none rounded-md outline-none px-2 bg-slate-950'
            onChange={(e) => setTitle(e.target.value)} 
        />
        <select
            className='
                bg-slate-950 
                border-none 
                cursor-pointer 
                w-full h-12 
                rounded-md 
                outline-none 
                px-2 mt-2 mb-2
                text-gray-400
                '
            onChange={(e) => setCat(e.target.value)}
        >
            <option value=''>Select Category</option>
            <option value='frontend'>Frontend</option>
            <option value='backend'>Backend</option>
            <option value='devops'>DevOps</option>
        </select>
        <div className='editor flex flex-row mb-5 mt-5'>
            <button onClick={() => setOpen(!open)}>
                <PlusCircleIcon className='w-12 h-12 hover:text-[#333333]'/>
            </button>
            {open && (
                <div className='items-center justify-center gap-5'>
                    <input 
                        type='file'
                        id='image'
                        onChange={(e) => {
                            if(e.target.files) {
                                setFile(e.target.files[0])
                            }
                        }}
                        style={{display: 'none'}}
                    />
                    <button className='addButton'>
                        <label htmlFor="image">
                            <PhotoIcon className='w-10 h-10 ml-2 hover:text-[#333333]'/>
                        </label>
                    </button>
                    <button className='addButton'>
                        <VideoCameraIcon className='w-10 h-10 ml-2 hover:text-[#333]'/>
                    </button>
                </div>
            )}
        </div>
        <Editor
            apiKey='ok7rlh0vt5yh7bvm9tpu59ur82ca2v8tgc8aehowtt2ufkgb'
            initialValue="<p>Tell your story...</p>"
            init={{
                height: 500,
                menubar: false,
                plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help',
            }}
        />
        <button className='bg-slate-950 rounded-lg mt-5 p-5 font-semibold hover:bg-yellow-700'>
            Publish
        </button>
    </div>
  )
}

export default Write