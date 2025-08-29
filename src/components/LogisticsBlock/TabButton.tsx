import { TabButtonProps } from './types';

const TabButton = ({ id, activeTab, onClick, children }: TabButtonProps) => {
  const isActive = activeTab === id;

  return (
    <button
      onClick={() => onClick(id)}
      className={`flex-shrink-0 py-5 md:py-3 px-6 md:px-4 text-center transition-all duration-300 text-sm md:w-full  ${
        isActive
          ? 'text-white border-b-2 border-blue-500'
          : 'text-zinc-300 hover:bg-zinc-900  border-zinc-700'
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;