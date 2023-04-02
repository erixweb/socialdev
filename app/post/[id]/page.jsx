import '/styles/styles.css'

export default async function PostPage({ params }) {
    const { id } = params

    const fetchPosts = () => {
        return fetch(`http://localhost:3000/api/post/${id}`, { cache: "no-cache" })
            .then(res => res.json())
    }

    const post = await fetchPosts()

    const res = post.selected[0]

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
                <header>
                    <h2>
                        Tweet
                    </h2>
                </header>
                <section className="posts">
                    <article key={res.id} id={res.id}>
                        <div className="profile">
                            <img src={res.profileImage} alt={`Imagen del perfil de ${post.user}`} />
                            <h2>
                                {res.user}
                            </h2>
                        </div>
                        <div className="content">
                            <p>
                                {res.content}
                            </p>
                            <ol>
                                <li className="comments">
                                    📖 {res.comments}
                                </li>
                                <li className="likes">
                                    💟 {res.likes}
                                </li>
                                <li className="views">
                                    👁️ {res.views}
                                </li>
                                <li className="share">
                                    📲
                                </li>
                            </ol>
                        </div>
                    </article>
                </section>
                <section>
                    {res.commentList.slice(0, 5).map(entry => (
                        <article id={Math.random()}>
                            <div className="profile">
                                <img src={entry.profileImage} alt={`Imagen de perfil de ${entry.user}`} />
                                <h2>
                                    {entry.user}
                                </h2>
                            </div>
                            <div className="content">
                                <p>
                                    {entry.content}
                                </p>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
            <aside className="right-aside">
                Hello
            </aside>
        </>
    )
}
