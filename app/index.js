"use client";
import styles from './page.module.css'
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    let addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

//   const googleTranslateElementInit = () => {
//     new window.google.translate.TranslateElement(
//       {
//         pageLanguage: "en",
//         layout: google.translate.TranslateElement.FloatPosition.BOTTOM_LEFT,
//         autoDisplay: true,
//         googleSectionalGadget: false,
//         multilanguagePage: true,
//         gaTrack: true,
//         gaId: "",
//       },
//       "google_translate_element"
//     );
//   };
  const googleTranslateElementInit = () =>  {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: true, // Don't auto-display the language selection button
        gaTrack: true, // Enable tracking for Google Analytics
        gaId: "UA-12345-1", // Replace "YOUR_ANALYTICS_ID" with your Google Analytics ID
        multilanguagePage: true,
        googleSectionalGadget: false // Disable "Powered by Google" attribution
      },
      "google_translate_element"
    )};

  const languageSelector = document.querySelector(".goog-te-combo");
  if (languageSelector) {
    languageSelector.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      window.location.href = `${window.location.origin}/?lang=${selectedLanguage}`;
    });
  }
  return (
    <div>
      <div style={{position: 'absolute', bottom: '8px', left: '12px', border: '2px solid black', width: '100px' }}
        id="google_translate_element"
        className={styles.languageSelector}
      ></div>
    </div>
  );
};

export default App;
