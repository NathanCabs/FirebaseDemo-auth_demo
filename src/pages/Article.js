import { useParams } from "react-router-dom"
import { useEffect,useState } from 'react';
import {getArticle} from "../services/articleService";

export default function Article() {
  const { urlId } = useParams()
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticle(urlId)
      .then((snapshot)=>{        
        setArticle(snapshot.data());
      })
  },[])

  return (
    <div>
      {!article && <p>No records found!</p>}
      {article && (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.description}</p>
        </div>
      )}
    </div>
  )
}
