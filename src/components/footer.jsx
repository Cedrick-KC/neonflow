const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1em', background: '#222', color: '#fff' }}>
      <p>&copy; {new Date().getFullYear()} NeonFlow. All rights reserved.</p>
      <div class="social-icons">
  <a href="https://github.com/Cedrick-KC" target="_blank">
    <i class="fab fa-github"></i>
  </a>

  <a href="https://instagram.com/c.e.d.r.i.q.u.e_" target="_blank">
    <i class="fab fa-instagram"></i>
  </a>

  <a href="https://linkedin.com/in/Karangwa Cedrick" target="_blank">
    <i class="fab fa-linkedin"></i>
  </a>
</div>

    </footer>
  );
}

export default Footer;