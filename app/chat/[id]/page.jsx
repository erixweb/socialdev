export default async function ChatPage({ params }) {
    const { id } = params

    const fetchChats = () => {
        return process.env.NODE_ENV == "development" ? fetch(`http://localhost:3000/api/chat/${id}`, { cache: "no-cache" })
            .then(res => res.json()) : fetch(`https://socialdev.vercel.app/api/chat/${id}`, { cache: "no-cache" })
                .then(res => res.json())
    }

    const chats = await fetchChats()

    const res = chats.selected[0]

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
                    <div>
                        <a href="/chats">
                            <img src="/arrow-backwards.svg" alt="Ir hacia atrás flecha" />
                        </a>
                        <h2>
                            Chat
                        </h2>
                    </div>
                </header>
                <section className="posts">
                    <a href={`/chat/${res.id}`} key={res.id}>
                        <article>
                            <div className="profile">
                                <img src={res.profileImage} alt={`Imagen de perfil de ${res.user}`} />
                                <h2>
                                    {res.user}
                                </h2>
                            </div>
                            <div className="content">
                                {res.content}
                            </div>
                        </article>
                    </a>
                </section>
            </main>
            <aside className="right-aside">
                Hello
            </aside>
        </>
    )
}
