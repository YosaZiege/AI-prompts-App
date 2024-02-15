"use client"
import Form from '@components/Form'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState , useEffect } from 'react'
const UpdatePrompt = () => {
    const [post, setPost] = useState({ prompt: "", tag: "" });

    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');
    const [submiting , setSubmiting]= useState(false);

    useEffect(() => {
        const getPromptDetails = async () => {
          const response = await fetch(`/api/prompt/${promptId}`);
          const data = await response.json();
    
          setPost({
            prompt: data.prompt,
            tag: data.tag,
          });
        };
    
        if (promptId) getPromptDetails();
      }, [promptId]);

    const updatePost = async (e) => {
       e.preventDefault();
       setSubmiting(true);

    if(!promptId){return alert("Prompt Id not found !")}

       try {
        const response = await fetch(`/api/prompt/${promptId}` , {
          method: "PATCH" , 
          body: JSON.stringify({
            prompt: post.prompt,
            tag: post.tag
          })
        })
        console.log("hello")
        if (response.ok) {
          router.push("/");
        }
       } catch (error) {
        console.log(error);
       }finally {
        setSubmiting(false);
       }
     }
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Form 
    type="Edit"
    post={post}
    setPost={setPost}
    submiting={submiting}
    handleSubmit={updatePost}
    />
    </Suspense>
  )
}

export default UpdatePrompt
