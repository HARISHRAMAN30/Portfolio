import { memo } from 'react';

function Footer() {
  return (
    <footer>
      <p>© 2025 <span className="gradient-text" style={{ fontWeight: 700 }}>Harish Raman</span> · Java Backend Engineer · Chennai, India · Built with care ♥</p>
    </footer>
  );
}

export default memo(Footer);
