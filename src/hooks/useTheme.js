import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Obtiene el tema guardado en localStorage o usa 'light' como predeterminado
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Aplica la clase inicial al elemento raíz
    document.documentElement.classList.add(savedTheme);

    return () => {
      // Limpia cualquier clase previa en el desmontaje
      document.documentElement.classList.remove(savedTheme);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    // Actualiza el estado y las clases del elemento raíz
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    // Guarda el tema actual en localStorage
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
};
