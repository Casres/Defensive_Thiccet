import React from "react";

function Footer() {
  return (
    <footer className="flex-row foot">
      <div className="flex-row">
        <header className="flex-row px-1">
          <a className="github" href="https://github.com/StewartMicah"></a>
        </header>
        <header className="flex-row px-1">
          <a
            className="stackoverflow"
            href="https://stackoverflow.com/users/18003755/beepo"
          ></a>
        </header>
        <header className="flex-row px-1">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/micah-stewart-84911822b/"
          ></a>
        </header>
      </div>
    </footer>
  );
}

export default Footer;
