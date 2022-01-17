import React from "react";

import TaskInput from "./components/taskInput/taskInput";
// import Footer from "./components/footer/footer";
// import Pagination from "./components/pagination/pagination";
import "./App.css";

function App() {
  return (
    <div className="App">   
      <div className="wrapper">
        <div className="to-do">
          <h1 className="to-do__title">todos</h1>     
          <div className="to-do__block">
            <TaskInput
              // id={this.state.tasks._id}
              // tasks={this.filterPost()}
              // currentTask={this.state.currentTask}
              // allCompleated={this.allCompleated}
              // handleChange={this.handleChange}
              // handleSubmit={this.handleSubmit}
              // handleUpdate={this.handleUpdate} 
              // handleDelete={this.handleDelete} 
            />
            {/* <Footer
              tasks={this.state.tasks}
              statusPost={this.statusPost}
              filter={this.state.filter}
              deleteCompleated={this.deleteCompleated}
            />
            <Pagination
              taskPerPages={this.state.taskPerPages}
              currentPage={this.state.currentPage}
              totalPages={this.state.tasks.length}
              paginate={this.paginate}
              prevPage={this.prevPage}
              nextPage={this.nextPage}
            /> */}
          </div>
        </div>   
      </div>
    </div> 
  );
}


export default App;













// import React from "react";
// import Tasks from "./components/Tasks";

// import TaskInput from "./components/taskInput/taskInput";
// // import Footer from "./components/footer/footer";
// // import Pagination from "./components/pagination/pagination";
// import "./App.css";

// class App extends Tasks {
//     render() {  
//         return (
//           <div className="App">   
//             <div className="wrapper">
//               <div className="to-do">
//                 <h1 className="to-do__title">todos</h1>     
//                 <div className="to-do__block">
//                   <TaskInput
//                     id={this.state.tasks._id}
//                     tasks={this.filterPost()}
//                     currentTask={this.state.currentTask}
//                     allCompleated={this.allCompleated}
//                     handleChange={this.handleChange}
//                     handleSubmit={this.handleSubmit}
//                     handleUpdate={this.handleUpdate} 
//                     handleDelete={this.handleDelete} 
//                   />
//                   {/* <Footer
//                     tasks={this.state.tasks}
//                     statusPost={this.statusPost}
//                     filter={this.state.filter}
//                     deleteCompleated={this.deleteCompleated}
//                   />
//                   <Pagination
//                     taskPerPages={this.state.taskPerPages}
//                     currentPage={this.state.currentPage}
//                     totalPages={this.state.tasks.length}
//                     paginate={this.paginate}
//                     prevPage={this.prevPage}
//                     nextPage={this.nextPage}
//                   /> */}
//                 </div>
//               </div>   
//             </div>
//           </div> 
//         );
//     }
// }

// export default App;





