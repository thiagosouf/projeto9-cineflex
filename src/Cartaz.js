import Filme from "./Filme"

export default function Cartaz(){
    const filmes = [
        {id:1, nome:"Batman: O Cavaleiro das Trevas Ressurge", img:"https://m.media-amazon.com/images/M/MV5BZTY5MzJmMTEtM2I2MC00M2UzLTg1NzktOWMzOTVmNzg2MTIxXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"},
        {id:2, nome:"Batman", img:"https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg"},
        {id:3, nome:"Batman: O Cavaleiro das Trevas Ressurge", img:"https://m.media-amazon.com/images/M/MV5BZTY5MzJmMTEtM2I2MC00M2UzLTg1NzktOWMzOTVmNzg2MTIxXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"},
        {id:4, nome:"Batman", img:"https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg"},
        {id:5, nome:"Batman: O Cavaleiro das Trevas Ressurge", img:"https://m.media-amazon.com/images/M/MV5BZTY5MzJmMTEtM2I2MC00M2UzLTg1NzktOWMzOTVmNzg2MTIxXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"},
        {id:6, nome:"Batman", img:"https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg"},
        {id:7, nome:"Batman: O Cavaleiro das Trevas Ressurge", img:"https://m.media-amazon.com/images/M/MV5BZTY5MzJmMTEtM2I2MC00M2UzLTg1NzktOWMzOTVmNzg2MTIxXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"},
        {id:8, nome:"Batman", img:"https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg"}
        
    ]

    return(
        <>
            {filmes.map((info)=>
                    <Filme id={info.id} nome={info.nome} img={info.img}/>)}
        </>

    )
}