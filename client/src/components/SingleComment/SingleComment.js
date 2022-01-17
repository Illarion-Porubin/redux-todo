import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { inputUpdate, inputDelete } from '../../redux/actions'

function SingleComments({data} ) {
    const [commentText, setCommentText] = useState('');
    const { text, id } = data;
    
    const dispatch = useDispatch();

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log('submit >>>', commentText)
        dispatch(inputUpdate(commentText, id))
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(inputDelete(id));
    }

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    const handleInput = (e) => {
        setCommentText(e.target.value)
    }

    return (
        <form onSubmit={inputUpdate} className="comments-item">
            <div onClick={inputDelete} className="comments-item-delete">&times;</div>
            <input type="text" value={commentText} onChange={handleInput}/>
            <input type="submit" hidden />
        </form>
    )
}

export default SingleComments;