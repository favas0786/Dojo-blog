import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        setIsPending(true);


        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        }).catch((err) => {
            console.error('Error adding blog:', err);
        });
    };

    return (
        <div className="create">
            <h2>Add a new Blog..</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Blog title"
                />
                <label >Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Blog body"
                    rows="10"
                    cols="30"
                ></textarea>
                <label >Blog author:</label>

                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog....</button>}
            </form>
        </div>
    );
}

export default Create;