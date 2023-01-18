import Copyright from '../copyright/copyright';
import Logo from '../logo/logo';

function Footer() {
  return (
    <footer className="page-footer">
      <Logo forFooter />

      <Copyright />
    </footer>
  );
}

export default Footer;
