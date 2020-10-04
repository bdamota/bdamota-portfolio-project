import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header (props) {

    const {
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span> </span> Briana daMota
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
        <li className="mx-2 navActive">
          <a data-testid="about" href="#about">
           <span onClick={() => setContactSelected(false)}>About</span>
            </a>
          </li>
          <li className={`mx-2 ${!contactSelected && 'navActive'}`}>
          <a data-testid="about" href="#portfolio">
           <span onClick={() => setContactSelected(false)}>Portfolio</span>
            </a>
          </li>
          <li className={`mx-2 ${!contactSelected && 'navActive'}`}>
          <a data-testid="about" href="#resume">
           <span onClick={() => setContactSelected(false)}>Resume</span>
            </a>
          </li>
          <li className={`mx-2 ${!contactSelected && 'navActive'}`}>
          <a data-testid="about" href="#contact">
           <span onClick={() => setContactSelected(false)}>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;