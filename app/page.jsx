import Feed from "@components/Feed"
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        
        <span className="orange_gradient text-center" >   AI-Powered Prompts</span>
        
        </h1>
        <p className="desc text-center">    
        AI prompts are highly effective tools that streamline creativity and boost productivity.
        By harnessing advanced algorithms and vast datasets, they provide instant inspiration, helping users overcome writer's block and explore new ideas effortlessly.
        With their adaptability to individual preferences and styles, AI prompts empower users to produce high-quality content efficiently in various domains.</p>
        <Feed />
    </section>
   
  )
}

export default Home
