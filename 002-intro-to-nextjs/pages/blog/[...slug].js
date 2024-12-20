import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div className={`${styles.main} ${inter.className}`}>
      <div className={styles.center}>
        <h1>The Blog Posts</h1>
      </div>
    </div>
  );
}
