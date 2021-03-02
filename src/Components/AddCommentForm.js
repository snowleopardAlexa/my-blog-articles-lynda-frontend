import React, {useState} from 'react';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment/`, {
            method: 'post',
            body: JSON.stringify({ username, text: commentText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsername('');
        setCommentText('');
    }

     return (
    <div id="add-comment-form">
        <h3>Add a Comment</h3>
        <div>
        <label>
           <h4>Name:</h4> 
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        </div>
        <div>
        <label>
          <h4>Comment:</h4>
            <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
        </label>
        </div>
    <button onClick={() => addComment()} style={{marginTop: "20px", backgroundColor: "green", fontSize: "17px", color: "white"}}>Add Comment</button>
    </div>
    );
   }

export default AddCommentForm;