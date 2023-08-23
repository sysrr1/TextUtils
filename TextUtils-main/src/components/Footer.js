import React, { Component } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

export class Footer extends Component {
  render() {
    let styles = {
      fontSize: '2em',
      color: 'black',
      marginLeft: '.9rem',
    };
    return (
      <div>
        <footer className="footer mt-auto py-3 bg-light">
          <div className="container text-center">
            <span className="text-muted">
            🍫 ⋆ 🍒  🎀 <b> 𝒮𝒰𝒴𝒜𝒮𝐻 𝒱𝐸𝑅𝑀𝒜 </b> 🎀  🍒 ⋆ 🍫
              <a style={styles} target='_blank' href="https://github.com/sysrr1/Shortest-Path">
                <AiOutlineGithub />
              </a>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
