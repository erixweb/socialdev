import LikeBtn from '../Components/LikeButton'

const fetchPosts = () => {
  console.log(process.env.NODE_ENV)
  return process.env.NODE_ENV == "development" ? fetch(`http://localhost:3000/api/posts`, { cache: "no-cache" })
    .then(res => res.json()) : fetch(`https://socialdev.vercel.app/api/posts`, { cache: "no-cache" })
      .then(res => res.json())
}

export default async function HomePage() {
  const posts = await fetchPosts()

  return (
    <>
      <aside className="left-aside">
        <ol>
          <a href="/">
            <li>
              <img src="/home.svg" alt="Icono de la home page" />
              <p>
                Home
              </p>
            </li>
          </a>
          <a href="/chats">
            <li>
              <img src="/md.svg" alt="Icono de la home page" />
              <p>
                Mensajes
              </p>
            </li>
          </a>
        </ol>
      </aside>
      <main>
        <header className="homepage">
          <h2>
            Home
          </h2>
        </header>
        <section className="posts">
          {posts.json.slice(0, 10).map(post => (

            <article key={post.id} id={post.id}>
              <a href={`/post/${post.id}`} key={post.id}>
                <div className="profile">
                  <img src={post.profileImage} alt={`Imagen del perfil de ${post.user}`} />
                  <h2>
                    {post.user}
                  </h2>
                </div>

                <div className="content">
                  <p>
                    {post.content}
                  </p>
                </div>
              </a>
              <ol>
                <li className="comments">
                  📖 {post.comments}
                </li>
                <LikeBtn likes={post.likes} />
                <li className="views">
                  👁️ {post.views}
                </li>
                <li className="share">
                  📲
                </li>
              </ol>
            </article>
          ))}
        </section>
      </main>
      <aside className="right-aside">
        <section className="card">
          <small>
            Trending en Cataluña
          </small>
          <h2>
            Midufest
          </h2>
          <span>
            6.439 publicaciones
          </span>
        </section>
      </aside>
    </>
  )
}
