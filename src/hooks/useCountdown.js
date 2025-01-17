import { useState, useEffect } from 'react';

const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Validar que targetDate sea una instancia válida de Date
    const isValidDate = (date) => date instanceof Date && !isNaN(date);

    if (!isValidDate(targetDate)) {
      console.error("El targetDate proporcionado no es válido. Debe ser un objeto Date válido.");
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Si el tiempo ya terminó, establecer todo a 0
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Iniciar el intervalo para actualizar cada segundo
    const timer = setInterval(calculateTimeLeft, 1000);

    // Calcular el tiempo restante inicialmente
    calculateTimeLeft();

    // Limpiar el intervalo cuando el componente se desmonte o el targetDate cambie
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

export default useCountdown;
