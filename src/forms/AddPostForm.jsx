import React, {useState} from 'react';

const AddPostForm = (props) => {

    const initPost = {id: null, title: '', description: ''};

    const [post, setPost] = useState(initPost);

    const handleChange = e => {
        const {name, value} = e.target;
        setPost({...post, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (post.title && post.description) {
            handleChange(e, props.addPost(post));
        }
    }

    return (
        <form>
            <label>Title</label>
            <input className="u-full-width" type="text" value={post.title} name="title"
             placeholder="enter title" onChange={handleChange} />
            <label>Description</label>
            <textarea className="u-full-width" type="text" value={post.description} 
            name="description" placeholder="message here" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Submit</button>
        </form>
    )
}

export default AddPostForm;