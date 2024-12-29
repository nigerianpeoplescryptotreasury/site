import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import ContentView from "./ContentView/ContentView";
import { useRef } from "react";

function App() {
  // Create refs for each section
  const aboutRef = useRef(null);
  const quoteGalleryRef = useRef(null);
  const formRef = useRef(null);

  // Scroll to the target section
  const handleNavigate = (section) => {
    const sectionRefs = {
      "about": aboutRef,
      "famous-investors": quoteGalleryRef,
      "apply-for-drop": formRef,
    };
    const targetRef = sectionRefs[section];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <div className="place-holder">
        <SideBar onNavigate={handleNavigate} />
        <ContentView refs={{ aboutRef, quoteGalleryRef, formRef }} />
      </div>
    </>
  );
}

export default App;
