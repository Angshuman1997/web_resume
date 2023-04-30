import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Banner>
          <ProfComponent />
        </Banner>
        <Container2>
          <Experience />
        </Container2>
        <LightColor3>
          <Education />
        </LightColor3>
        <Container3>
          <Skills />
        </Container3>
        <LightColor>
          <Projects />
        </LightColor>
        <LightColor2>
          <Footer />
        </LightColor2>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  overflow-x: hidden;
  overflow-y: overlay;
`;
const Container2 = styled.div`
  background: linear-gradient(180deg, #5d9cd3 20%, #ffffff 80%);
`;
const Container3 = styled.div`
  background: linear-gradient(180deg, #ffffff 20%, #5d9cd3 80%);
`;
const Banner = styled.div`
  background: rgb(93 156 211);
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(135deg, #5d9cd3 50%, #ffffff 50%);
`;

const LightColor2 = styled.div`
  background: linear-gradient(135deg, #ffffff 50%, #5d9cd3 50%);
`;

const LightColor3 = styled.div`
  background: #ffffff;
`;
