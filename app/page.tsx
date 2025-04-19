import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a student at the National Higher School of Artificial Intelligence (ENSIA) in Algiers. My studies cover a broad range of topics including intelligent systems, search and planning algorithms, knowledge representation, and machine learning. I'm passionate about participating in hackathons, where I enjoy applying what I learn to build real-world projects and collaborate with like-minded innovators.`}
      </p>
      <p className="mb-4">
        {`My current interests include ethical hacking, natural language processing, and building intelligent applications using Python, Flutter, and modern web technologies. I'm always open to new challenges and constantly seek opportunities to grow my technical and problem-solving skills.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
