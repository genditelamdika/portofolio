const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/genditelamdika">
        <i className="fa-brands fa-github" aria-hidden="true" title="Gendi Telamdika' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/gendi-telamdika">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Gendi Telamdika' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/ghenzzzz/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Gendi Telamdika' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://api.whatsapp.com/send?phone=081284550545">
        <i className="fa-brands fa-whatsapp" aria-hidden="true" title="Gendi Telamdika' Whatsapp Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
