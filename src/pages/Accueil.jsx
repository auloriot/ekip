import React from 'react';
import { Link } from 'react-router-dom';
import './Association.css'

const Association = () => {
  return (
    <div className='texte'>
      <h2>VIENS TESTER TES CONNAISSANCES</h2>
      <p>Pour tester tes connaissances sur le réchauffement climatique et distinguer les fausses informations des vraies solutions, <Link to="/questions">clique ici</Link>.</p>

      <h2>DECOUVRE NOTRE ASSOCIATION</h2>
      <p>Pour en savoir plus sur notre association "Réseau Action Climat", nous t'invitons à <Link to="/association">cliquer ici</Link>. </p>
    </div>
  );
};

export default Association;
