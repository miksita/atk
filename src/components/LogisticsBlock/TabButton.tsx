import { TabButtonProps } from './types';

const TabButton = ({ id, activeTab, onClick, children, isLast }: TabButtonProps) => {
  const isActive = activeTab === id;

  return (
    <button
      onClick={() => onClick(id)}
      className={`flex-1 py-3 md:px-5 px-4 text-center transition-all duration-300 text-sm relative ${
        isActive
          ? ' text-white bg-blue-900'
          : 'text-zinc-300 hover:bg-zinc-900'
      } ${!isLast ? 'border-r border-zinc-700' : ''}`}
    >
      {children}
    </button>
  );
};

export default TabButton;