import { FC, useEffect } from 'react';

interface HeadingXmasProps {
    color:string;
    xmasTitlesColorList: string[];
    setXmasTitlesColor: (value:string) => void;
}

const HeadingXmas:FC<HeadingXmasProps> = ({ color, xmasTitlesColorList, setXmasTitlesColor }) => {
  useEffect(() => {
    // eslint-disable-next-line no-alert
    alert('HeadingXmas has been loaded!');
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setXmasTitlesColor(xmasTitlesColorList.filter((item) => item
      !== color)[Math.floor(Math.random() * 3)]), 5000);
    return () => clearTimeout(timeout);
  });

  return (
    <h1
      style={{ color }}
    >
      Merry X-mas!
    </h1>
  );
};
export default HeadingXmas;
