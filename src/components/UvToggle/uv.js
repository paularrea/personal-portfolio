import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

function Uv() {
    return (
        <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            UV
          </label>
        )}
      </ThemeToggler>
    )
}

export default Uv
