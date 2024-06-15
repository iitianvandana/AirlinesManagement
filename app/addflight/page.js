import FlightForm from "../Components/FlightForm";
import styles from "../page.module.css";

export default async function addFlight() {
  return (
    <div className={styles.homeBG}>
      <div className={styles.mainDiv}>
        <FlightForm />
      </div>
    </div>
  );
}
