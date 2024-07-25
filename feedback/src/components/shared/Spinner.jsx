import spinner from "../assests/spinner.gif";

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "70px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
