import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../../images/me.svg";
// import homee from "../../images/homee.jpg";
import homee from "../../images/user.jpeg";
import Draw from "../../components/Draw";
import SocialIcons from "../../components/SocialIcons";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      // marginLeft:"50px",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
      // width:"100%"
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <section className="landing" style={styles.landing}>
      {/* <Draw /> */}
      <div className="textContainer" style={styles.textContainer}>
        <h1 className="name" style={styles.name}>
          {name}
        </h1>
        <div className="description">
          <Typewriter
            className="description"
            onInit={(typewriter) => {
              typewriter
                .changeDelay(80)
                .typeString("I'm a Fullstack Developer")
                .pauseFor(1500)
                .deleteAll()
                .typeString("Code. ")
                .pauseFor(500)
                .typeString("Create. ")
                .pauseFor(500)
                .typeString("Innovate.")

                .start();
            }}
          />
        </div>
      </div>
      {/* <img
        className="landingImage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={styles.landingImage}
        src={homee}
        alt="gendi"
      ></img> */}
      {/* <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={styles.landingImage}
          src={homee}
          alt="Gendi Telamdika"
        />
      </div> */}
      <SocialIcons />
    </section>
  );
};

export default Landing;
