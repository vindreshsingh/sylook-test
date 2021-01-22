import React, {useState, useEffect} from 'react';

const EditPostForm = (props) => {

    useEffect(() => {
        setPost(props.currentPost)
    }, [props])

    const [post, setPost] = useState(props.currentPost);

    const handleChange = e => {
        const {name, value} = e.target;
        setPost({...post, [name]: value});
        }

    const handleSubmit = e => {
        e.preventDefault();
        if (post.title && post.description) props.updatePost(post);
    }

    return (
        <form>
            <label>Title</label>
            <input className="u-full-width" type="text" value={post.title} name="title" placeholder="enter title" onChange={handleChange} />
            <label>Description</label>
            <input className="u-full-width" type="text" value={post.description} 
            name="description" placeholder="message here" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditPostForm;