import 'logo.svg';
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div className={'d-flex'}>
        <div>
            <h2>Users</h2>
            <Users/>
            <h2>Posts</h2>
            <Posts/>
        </div>
        <div>
            <h2>Comments</h2>
            <Comments/>
        </div>
    </div>
  );
}

export default App;