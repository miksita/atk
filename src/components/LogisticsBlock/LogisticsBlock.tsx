// LogisticsBlock.tsx
'use client';

import { useState } from 'react';
import TabButton from './TabButton';
import TabContent from './TabContent';
import { Tab } from './types';
import { useTranslation } from "react-i18next";

export default function LogisticsBlock() {
  const [activeTab, setActiveTab] = useState<Tab>('internationalTransportation');
  const { t } = useTranslation();

  const tabs: { id: Tab; label: string }[] = [
    { id: 'internationalTransportation', label: t("logisticBlock.internationalTransportation.tab") },
    { id: 'containerService', label: t("logisticBlock.containerService.tab") },
    { id: 'behind', label: t("logisticBlock.behind.tab") },
    { id: 'aboutCompany', label: t("logisticBlock.aboutCompany.tab") }
  ];

  return (
    <div className="min-h-[70vh] text-white py-8 md:py-10 border-t-1 border-zinc-700">
      <div className="conteiner-custom">

        <div className="flex flex-col sm:flex-row bg-zinc-950 rounded-md mb-6 md:mb-8 border-1 border-zinc-700 overflow-hidden">
          {tabs.map((tab, index) => (
            <TabButton
              key={tab.id}
              id={tab.id}
              activeTab={activeTab}
              onClick={setActiveTab}
              isLast={index === tabs.length - 1}
            >
              {tab.label}
            </TabButton>
          ))}
        </div>

        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
}