import "./styles.css";

export const PostCard = ({ post }) => (
  <div className="post">
    <img src={post.cover} alt={post.title} />
    <div className="postContent">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  </div>
);
