const fetchChats = () => {
    return process.env.NODE_ENV == "development" ? fetch(`http://localhost:3000/api/chats`, { cache: "no-cache" })
      .then(res => res.json()) : fetch(`https://socialdev.vercel.app/api/chats`, { cache: "no-cache" })
      .then(res => res.json())
  }
  
  export default async function ChatsPage() {
    const chats = await fetchChats()
    
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
              Chats
            </h2>
          </header>
          <section className="posts">
            {chats.json.slice(0, 10).map(chat => (
              <a href={`/chat/${chat.id}`} key={chat.id}>
                <article>
                    <div className="profile">
                        <img src={chat.profileImage} alt={`Imagen de perfil de ${chat.user}`} />
                        <h2>
                            {chat.user}
                        </h2>
                    </div>
                    <div className="content">
                        {chat.content}
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
  