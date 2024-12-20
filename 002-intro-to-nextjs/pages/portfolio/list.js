import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function ListPage() {
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <div className={styles.center}>
        <h1>This is List Page</h1>
      </div>
    </div>
  );
}
