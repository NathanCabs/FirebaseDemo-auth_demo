import { Link, useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react';
import DeleteIcon from '../assets/delete.svg'
import EditIcon from '../assets/edit.svg'

// styles
import './Home.css'
import {deleteArticle, getArticles} from "../services/articleService";

export default function Home() {

  const [articles, setArticles] = useState(null);
  const [search, setSearch] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
      const unsubscribe = getArticles(setArticles)
      return ()=> unsubscribe();
   },[])
  
  const handleDelete = async (id) => {
    await deleteArticle(id);
  }

  const handleEdit = async (id) => {
    navigate(`/edit/${id}`)
  }

  return (
    <div className="home">
      <h2>Articles</h2>      
      {articles && articles.map(article => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>Written by {article.author}</p>
          <Link to={`/articles/${article.id}`}>Read More...</Link>
          <img 
            className="icon"
            onClick={() => handleDelete(article.id)}
            src={DeleteIcon} alt="delete icon" 
          />
          <img 
            className="icon"
            onClick={() => handleEdit(article.id)}
            src={EditIcon} alt="edit icon" 
          />
        </div>
      ))}
    </div>
  )
}
