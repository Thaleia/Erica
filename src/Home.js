// Home.js
import BlogList from './BlogList';
import useFetch from './useFetch';
import dog2 from './dog2.png';

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <p style={{
        color: 'white',
        fontSize: "20px",
        padding: '2px',
        backgroundColor: '#9955bb',
        borderRadius: '8px',
        textAlign: "center"
      }}>Erica, the most amazing dog ever!</p>
      <br />
      <img src={dog2} alt="dog" style={{ borderRadius: '8px' }}></img>
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
