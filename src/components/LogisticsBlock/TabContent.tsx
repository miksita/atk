import { TabContentProps, TabContentData } from './types';
import {
  FaGlobe,
  FaShippingFast,
  FaBuilding,
  FaPhotoVideo
} from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const TabContent = ({ activeTab }: TabContentProps) => {
  const { t } = useTranslation();
  
  const content: TabContentData = {
    title: t(`logisticBlock.${activeTab}.content.title`),
    description: t(`logisticBlock.${activeTab}.content.description`),
    items: [],
    icon: activeTab === 'internationalTransportation' ? FaGlobe :
          activeTab === 'containerService' ? FaShippingFast :
          activeTab === 'aboutCompany' ? FaBuilding : FaPhotoVideo
  };

  const IconComponent = content.icon;

  return (
    <div className="animate-fadeIn">
      <div className="flex items-start justify-start gap-3 mb-6 border-b border-zinc-700 pb-4 pt-12">
        <h2 className="title flex items-start gap-3">
          <IconComponent className="text-3xl text-blue-800" />
          {content.title}
        </h2>
      </div>

      <p className="mb-3 text-base">{content.description}</p>

      {content.items.length > 0 && (
        <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2 text-sm sm:text-base">
          {content.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {activeTab === 'behind' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4 md:mt-6">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="bg-zinc-900 rounded-md h-24 sm:h-28 md:h-32 flex items-center justify-center"
            >
              <span className="text-zinc-400 text-xs sm:text-sm">Фото {num}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TabContent;