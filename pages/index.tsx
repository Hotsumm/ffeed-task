import type { NextPage } from 'next';
import BusinessInfo from '../src/components/home/BusinessInfo';
import Feed from '../src/components/feed/Feed';

const Home: NextPage = () => {
  return (
    <div>
      <BusinessInfo />
      <Feed />
    </div>
  );
};

export default Home;
