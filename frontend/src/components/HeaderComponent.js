import React from "react";
import { Link } from 'react-router-dom';


export default function HeaderComponent() {
  return (
  <>
  <h1>Top Tracks</h1>
  <div className="nav-bar">
      <div><Link to="/all">All Songs</Link></div>
      <div><Link to="/faves">Faves</Link></div>
  </div>
  </>
  );
}
