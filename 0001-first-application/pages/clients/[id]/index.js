import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function ClientProjectPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // load data..
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projectA" },
    });
  }

  return (
    <div className={`${styles.main} ${inter.className}`}>
      <div className={styles.center}>
        <h1>The Project of a given Client</h1>
      </div>
      <button className="btn btn-light" onClick={loadProjectHandler}>
        Load Project A
      </button>
    </div>
  );
}
