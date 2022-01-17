// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { inputCreate, inputLoad } from "../../redux/actions";
// import SingleComment from "../SingleComment/SingleComment";


// function Comments(props) {
//     const [textComment, setTextComment] = useState('');
    
//     const tasks = useSelector(state => {
//         const { itemsReducer } = state;
//         return itemsReducer.tasks;
//     })

//     const dispatch = useDispatch();

//     const handleInput = (e) => {
//         setTextComment(e.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const id = "dwqee21d23df"
//         dispatch(inputCreate(textComment, id))
//     }

//     useEffect(() => {
//       dispatch(inputLoad())  
//     }, []);

//     return (
//         <div className="card-comments">
//             <form className="comments-item-create"
//                 onSubmit={handleSubmit}
//             >
//                 <input type="text" value={textComment} 
//                 onChange={handleInput}
//                 />
//                 <input type="submit" hidden />
//             </form>
//             {!!tasks.length && tasks.map(res => {
//                 console.log(tasks, ' <<<COMMENTS')
//                 return <SingleComment 
//                     key={res._id} 
//                     data={res}
//                     // done={res.done}
//                 />
//             })}        
//         </div>
//     )
// }



// export default Comments;