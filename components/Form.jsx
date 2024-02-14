
import Link from "next/link";
const Form = ({type,post , setPost , submiting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
     <h1 className="head_text text-left" ><span className="blue_gradient">{type} Post </span></h1>
     <p className="desc text-left max-w-md">{type} and share your favorite AI prompts</p>
     <form onSubmit={handleSubmit} className="mt-10 max-w-2xl w-full flex flex-col gap-7 glassmorphism">
       <label>
      <span className='text-gray-700  font-satoshi font-semibold   text-base'>
        Your AI Prompt
      </span>
      <textarea 
      value={post.prompt}
      onChange={(e) => setPost({...post,prompt: e.target.value}) }
      required
      placeholder='Write your prompt here ...'
      className='form_textarea'
      >
      </textarea>
      </label>
      <label>
      <span className='text-gray-700  font-satoshi font-semibold   text-base'>
        Tag{` `}
        <span className='font-normal'>(#webdevelpment #idea)</span>
      </span>
      
      <input 
      value={post.tag}
      onChange={(e) => setPost({...post,tag: e.target.value}) }
      required
      placeholder='#Tag'
      className='form_input'
      >
      </input>
      </label>
      <div className="flex-end mx-3 mb-5 gap-4">
        <Link className="text-gray-500 text-sm" href="/">Cancel
        </Link>
        <button className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white" 
        type='submit'
        disabled={submiting}
        
        >
          {submiting ? `${type}... ` : type}
        </button>
      </div>
      
     </form>
    </section>
  )
}

export default Form
