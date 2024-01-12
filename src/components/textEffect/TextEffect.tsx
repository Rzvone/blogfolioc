import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Web Dev',
        1500, 
        'Full Stack Dev',
        1500,
        'DevOps Enthusiast',
        1500,
      ]}
      speed={50}
      className='text-[2rem] font-bold text-green-400'
      repeat={Infinity}
    />
  );
};

export default TextEffect;