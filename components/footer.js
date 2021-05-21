import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className="mt-9">
        Copyright © {new Date().getFullYear()} Desenvolvido por Henrique França
      </p>
    </footer>
  );
}
