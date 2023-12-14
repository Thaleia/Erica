// Create.js 
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('someone who cares');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add Eternal Words</h2>
      <span style={{ 
        color: 'gray',
        fontSize: '14px'}}>Use the below form to add and share memories, facts or afterlife wishes to our beloved Erica! </span>
      <br/><br/><br/>
      <form onSubmit={handleSubmit}>
        <label>New entry title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>New entry body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author's category:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="family">family</option>
          <option value="friend">friend</option>
        </select>
        <button>Complete Entry</button>
      </form>
    </div>
  );
}
 
export default Create;