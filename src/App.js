import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Gendi Telamdika",
    location: "Ciputat, Sout Tangerang",
    email: "gendydika@gmail.com",
    availability: "Open for work",
    brand:
      "I am a Junior Fullstack Developer. I like all things about technology and technology is currently very developed and it makes me very interested especially about programming languages  which are very much and it makes me very curious. I am passionate about working in this field, I have several portfolio projects that showcase my expertise in Fullstack Development"
     ,
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
