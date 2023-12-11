import React, { useContext, useState } from "react";
import Image from "next/image";
import LanguageContext from "./LanguageContext";

//----------flag import--------------
import us from "/public/images/flag/us.png";
import de from "/public/images/flag/de.png";
import es from "/public/images/flag/es.png";
import br from "/public/images/flag/br.png";
import fr from "/public/images/flag/fr.png";
import nl from "/public/images/flag/nl.png";
//-------------------------------------

export default function LangSwitch() {
  const { switchLanguage, lang } = useContext(LanguageContext);
  const [lng, setLang] = useState(0);
  const countryInfo = [
    { name: "English", flag: us, lang: "en-US" },
    { name: "Deutsch", flag: de, lang: "en-DE" },
    { name: "Español", flag: es, lang: "en-ES" },
    { name: "Français", flag: fr, lang: "en-FR" },
    { name: "Nederlands", flag: nl, lang: "en-NL" },
    { name: "Português", flag: br, lang: "en-BR" },
  ];
  return (
    <div>
      <div className="dropdown mx-4 lang-select">
        <button
          className="btn btn-secondary dropdown-toggle rounded-pill"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Image src={countryInfo[lng].flag} alt="image" className="flag" />
        </button>
        <ul className="dropdown-menu">
          {countryInfo?.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setLang(index);
                switchLanguage(item.lang);
              }}
            >
              <a href="#" className="dropdown-item">
                <Image src={item.flag} alt="image" className="flag" />
                {" "}{item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
