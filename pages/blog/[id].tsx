import { useRouter } from 'next/router';

const Blogid = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Blog post</h1>
      <p>Post id: {router.query.id}</p>
    </div>
  );
};

export default Blogid;
