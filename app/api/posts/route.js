import { NextResponse } from "next/server"

export async function GET() {
    const json = [
        {
            "id": "1",
            "user": "Usuario #0008",
            "profileImage": "/vercel.svg",
            "content": "Socialdev es un proyecto estático en el que se muestran varios posts",
            "likes": "1",
            "views": "1043",
            "comments": "16"
        },
        {
            "id": "2",
            "user": "Usuario #0009",
            "profileImage": "/vercel.svg",
            "content": "Click a ♻️ para compartir",
            "likes": "1",
            "views": "24",
            "comments": "24"
        },
        {
            "id": "3",
            "user": "Usuario #0010",
            "profileImage": "/vercel.svg",
            "content": "Click a 💟 para dar un me gusta",
            "likes": "11",
            "views": "99",
            "comments": "46"
        },
    ]

    return NextResponse.json({ json })
}