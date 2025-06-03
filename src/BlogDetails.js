import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
const BlogDetails = () => {
    const { id } = useParams();
    const {data: blogs, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('Blog deleted');
            // Redirect to home page after deletion
            window.location.href = '/';
        }).catch((err) => {
            console.error('Error deleting blog:', err);
        });
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;