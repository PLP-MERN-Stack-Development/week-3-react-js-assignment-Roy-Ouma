import Layout from "./components/layout";
import TaskManager from "./components/TaskManager";
import PostList from "./components/PostList";

function App() {
  return (
    <Layout>
      <div className="grid gap-6">
        <TaskManager />
        <PostList />
      </div>
    </Layout>
  );
}

export default App;