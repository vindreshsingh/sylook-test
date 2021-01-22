import React from 'react';

const PostTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    
                    <th>Titl</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { props.posts.length > 0 ? (
                    props.posts.map(post => {
                        const {id, title, description} = post;
                        return (
                            <tr key={id}>
                                
                                <td>{title}</td>
                                <td>{description}</td>
                                <td>
                                    <button onClick={() => props.deletePost(id)}>Delete</button>
                                    <button onClick={() => props.editPost(id, post)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>no post</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
    )
}

export default PostTable;