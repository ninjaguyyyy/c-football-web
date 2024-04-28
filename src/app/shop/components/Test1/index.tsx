import { delay } from 'utils/common';

export default async function Test1() {
  const data = await getData(true);

  return <div>Test 1 - {data.data[0].productName}</div>;
}

async function getData(shouldDelay = false) {
  const res = await fetch(
    'https://dvlp5riaeil69.cloudfront.net/api/v1/user/products/filter?limit=1&page=1',
    { cache: 'no-cache' }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  if (shouldDelay) {
    await delay(10000);
  }

  return res.json();
}
