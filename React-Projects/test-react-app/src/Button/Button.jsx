import styles from "./Button.module.css";

function Button() {
  const handleClick = () => console.log("Kevin");
  const handleClick2 = (name) => console.log(name);
  const handleClickEvent = (e) => (e.target.textContent = "KC");
  return (
    <button onClick={(e) => handleClickEvent(e)} className={styles.button}>
      CK
    </button>
  );
}

export default Button;
