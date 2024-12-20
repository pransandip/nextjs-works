import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manuel", name: "Manuel" },
  ];
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <div className={styles.center}>
        <h1>This is Clients Page</h1>
      </div>
      <div>
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
