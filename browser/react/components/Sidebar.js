import React from 'react';

import {Link, Router, Route} from 'react-router';

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
          <hr />
        <h4 className="menu-item active">
            <Link to="/albums">Go to Albums</Link>
        </h4>
          <hr />
          <h4 className="menu-item active">
              <Link to="/artists">Artists</Link>
          </h4>
          <hr />
      </section>
    </sidebar>
  );
}

export default Sidebar;
