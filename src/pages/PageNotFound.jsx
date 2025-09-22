import useMoveBack from '../hooks/useMoveBack.js';

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <div>
      <p>The page you are looking for cannot be found.</p>
      <button onClick={moveBack}>&larr; Go back</button>;
    </div>
  );
}

export default PageNotFound;
