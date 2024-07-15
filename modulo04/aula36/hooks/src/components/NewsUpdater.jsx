// Desafio 1: Atualizador Automático de Notícias
// Implemente um componente que busca automaticamente novas notícias a
// cada 30 segundos usando useEffect.
// Importação dos hooks useState e useEffect do React.

import { useEffect } from "react";

// import { useState, useEffect } from "react";

// function Posts() {
//     const [ post, setPost ] = useState(null)
//     const [ count, setCount ] = useState(1)

//     useEffect(() => {
//         const fetchPostData = async () => {
//             const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
//             const postData = await response.json()
//             setPost(postData)
//         }

//         fetchPostData()

//         return () => setPost(null)
//     }, [])

//     return (
//         <div>
//             {post ? (
//                 <div>
//                     <h1>{post.title}</h1>
//                     <h1>{post.body}</h1>
//                 </div>
//             ) : (
//                 <p>Carregando Notícia</p>
//             )}
//         </div>
//     )
// }

// export default Posts
// import { useEffect, useState } from "react";

function NewsUpdater() {
    const [ news, setNews ] = useState(null);
    const [ isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true)

            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
                const data = await response.json()
                setNews(data.slice(0, 5))
            } catch (error) {
                console.log('Ligue pro suporte', error)
            }

            setIsLoading(false)
        }
    })

    return (
        <div>
            {news ? (
                <div>
                    <h1>{news.title}</h1>
                    <p>{news.body}</p>
                </div>
            ) : (
                <p>Carregando Notícia!</p>
            )}
        </div>
    );

}

export default NewsUpdater