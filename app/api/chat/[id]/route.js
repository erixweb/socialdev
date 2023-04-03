import { NextResponse } from "next/server"

export async function GET(request, {params} ) {
    const { id } = params

    const json = [
        {
            "id": "1",
            "profileImage": "/vercel.svg",
            "user": "Usuario #023",
            "content": "Hola! Buenos días."
        },
        {
            "id": "2",
            "profileImage": "/vercel.svg",
            "user": "Usuario #045",
            "content": "Salut! Bonjour",
        },
        {
            "id": "3",
            "profileImage": "/vercel.svg",
            "user": "Usuario #0234",
            "content": "Hi! Good morning",
        },
        {
            "id": "4",
            "profileImage": "/vercel.svg",
            "user": "Usuario #012",
            "content": "Hola! Bon dia"
        },
    ]

    let selected = json.filter(r => {return r.id === id})

    return NextResponse.json({ selected })
}