const DoubleClick = () => {
  const doubleclick = () => {
    return console.log("doubleclick called");
  };

  //   const dblclick = () => {
  //     return console.log("dblclick called");
  //   };
  return (
    <>
      <button onDoubleClick={doubleclick}>Double Click</button>
      {/* <button ondblclick={dblclick}>Dbl Click</button> */}
    </>
  );
};

export default DoubleClick;

// import { useState } from 'react';
// import LikeComponent from './Like.Component';

// const LikeLayout = () => {
//   const [isLiked, setIsLiked] = useState(false);

//   const onToggleLike = () => {
//     setIsLiked((prevState) => !prevState);
//   };
//   return (
//     <div>
//       <p>Title {isLiked ? 'LIked' : 'Unliked'}</p>
//       <button onDoubleClick={onToggleLike}>Change</button>
//       <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, debitis molestiae?
//         Dolorum nulla architecto aliquam? Aperiam sit dolores voluptas minima dolore quis, magni
//         cumque corrupti deleniti fugiat sint dignissimos alias.
//       </p>

//       <LikeComponent isLiked={isLiked} toggleLike={onToggleLike} />
//     </div>
//   );
// };

// export default LikeLayout;


// const LikeComponent = ({ isLiked, toggleLike }: any) => {
//   return <button onClick={toggleLike}>{isLiked ? 'Un Like' : 'Like'}</button>;
// };

// export default LikeComponent;

