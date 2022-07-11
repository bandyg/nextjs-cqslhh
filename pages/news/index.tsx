import Link from 'next/link';
import { Fragment } from 'react';
const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href={'/news/id0'}>NextJS Is A Great Framework</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
