import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer>
      <p className="mb-10">
        Copyright © {new Date().getFullYear()} Desenvolvido por Henrique França
      </p>
    </footer>
  );
}
