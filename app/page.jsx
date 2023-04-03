const fetchPosts = () => {
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
      <main className="wrap">
        <header className="homepage">
          <h2>
            Home
          </h2>
        </header>
        <section className="posts">
          {posts.json.slice(0, 10).map(post => (
            <a href={`/post/${post.id}`} key={post.id}>
              <article key={post.id} id={post.id}>
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
                  <ol>
                    <li className="comments">
                      📖 {post.comments}
                    </li>
                    <li className="likes">
                      💟 {post.likes}
                    </li>
                    <li className="views">
                      👁️ {post.views}
                    </li>
                    <li className="share">
                      📲
                    </li>
                  </ol>
                </div>
              </article>
            </a>
          ))}
        </section>
      </main>
      <aside className="right-aside">
        Hello
      </aside>
    </>
  )
}
