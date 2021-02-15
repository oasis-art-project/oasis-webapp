import './style.css';

function Loader() {
  return (
    <div className="w-full flex justify-center">
      <div className="lds-oasis">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loader;
