import React from 'react'
import { Link } from 'react-router-dom'

const posts = [
  {
      id: 1,
      title: "First title input",
      img: "https://picsum.photos/id/234/1200/1200",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore blanditiis repellat incidunt eius temporibus tenetur accusamus, inventore rem, reiciendis vel dicta commodi similique eum suscipit minus, vitae aliquam deserunt?"
  },
  {
      id: 2,
      title: "Second title input",
      img: "https://picsum.photos/id/434/1200/1200",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore blanditiis repellat incidunt eius temporibus tenetur accusamus, inventore rem, reiciendis vel dicta commodi similique eum suscipit minus, vitae aliquam deserunt?"
  },
  {
      id: 3,
      title: "Third title input",
      img: "https://picsum.photos/id/134/1200/1200",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore blanditiis repellat incidunt eius temporibus tenetur accusamus, inventore rem, reiciendis vel dicta commodi similique eum suscipit minus, vitae aliquam deserunt?"
  },
  {
      id: 4,
      title: "Fourth title input",
      img: "https://picsum.photos/id/454/1200/1200",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore labore blanditiis repellat incidunt eius temporibus tenetur accusamus, inventore rem, reiciendis vel dicta commodi similique eum suscipit minus, vitae aliquam deserunt?"
  }
]


function Home() {
  return (
    <div className='home'>
        <div className="posts">
            {
              posts.map((item,index) => {
                return (
                    <div className="post" key={index}>
                        <div className="img">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${item.title}`}>
                              <h1>{ item.title }</h1>
                            </Link>
                          <p> { item.desc } </p>
                          <button>Read More</button>
                        </div>
                    </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default Home
