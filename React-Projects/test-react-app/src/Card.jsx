import reactLogo from "./assets/react.svg";

function Card() {
  return (
    <div className="card">
      <img alt="profile picture" src={reactLogo} className="card-image" />
      <h2 className="card-title">Kevin</h2>
      <p>Deep</p>
    </div>
  );
}

export default Card;
