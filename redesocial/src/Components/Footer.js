import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Calendario } from '../Assets/calendario.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Calendario className={styles.calendario} />
      <p>Rede Social - Lives Fatec. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
