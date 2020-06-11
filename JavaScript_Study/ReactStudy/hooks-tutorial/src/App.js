import React from 'react';
// import Counter from './Counter';
// import Average from './Average';
import Info from './Info';
import UsePromiseSample from './usePromiseSample';

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button onClick={()=>{
//         setVisible(!visible)
//       }}>
//         {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr></hr>
//       {visible && <Info />}
//     </div>
//   );
// };

const App = () => {
  // return <ContextSample />;
  // return <Info />;
  // return <Average />;
  return <UsePromiseSample />;
};

export default App;