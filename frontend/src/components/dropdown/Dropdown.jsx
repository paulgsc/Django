import React from 'react';
import { sectionItems } from './constants/dropdownItems';
import './Dropdown.css';

function Dropdown() {
  return (
      <div className='dropdown-menu '>
        <div className="information-grid">
          {sectionItems.map((section) => (

          <section className='links_section'>
          <div className='section_div' key={section.id}>{section.title}</div>
            <ul>
              {section.dropdownItems.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </section>

          ))}
         
        </div>
      </div>
  )
}

export default Dropdown
