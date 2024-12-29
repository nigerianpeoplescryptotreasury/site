import styles from "./ContentView.module.css";
import About from "../About/About";
import QuoteGallery from "../Quotes/QuotesGallery";
import Form from "../Form/Form";

function ContentView({ refs }) {
  const { aboutRef, quoteGalleryRef, formRef } = refs;

  return (
    <div className={styles["content-view"]}>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={quoteGalleryRef}>
        <QuoteGallery />
      </div>
      <div ref={formRef}>
        <Form />
      </div>
    </div>
  );
}

export default ContentView;
