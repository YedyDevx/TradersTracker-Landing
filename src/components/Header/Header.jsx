import { Link } from 'react-scroll';
import ThemeChange from '../ThemeChange/ThemeChange';
import logo from '../../assets/logo-sin-fondo.png';

const Header = () => {

  const navItems = [
    { name: 'Inicio', to: 'home' },
    { name: 'Lista de Espera', to: 'newsletter' },
    { name: 'Plan', to: 'plans' },
  ];

  return (
    <div className="hidden lg:flex h-16 w-full justify-between items-center px-4 bg-gray-100 dark:bg-black">
      <div>
        <img className="w-[50px] h-[50px]" src={logo} alt="logo" />
      </div>
      <div className="text-md font-semibold flex flex-row gap-16 text-gray-900 dark:text-gray-300">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:bg-[#fdbf22] hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.5)] px-6 py-1 rounded-lg dark:hover:text-black"
            >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="w-[60px]">
          <ThemeChange />
        </div>
      </div>
    </div>
  );
};

export default Header;
