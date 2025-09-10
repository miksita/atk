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
    <div className="min-h-[50vh] text-white py-8 md:py-10 border-t-1 border-zinc-700">
      <div className="conteiner-custom">

        <div className="border-y-1 border-l-1 md:border-r-1 border-zinc-700 md:rounded-t-lg rounded-tl-lg overflow-hidden">
          <div className="ml-[-1rem] mr-[-1rem] md:mx-0">
            <div className="flex overflow-x-auto scrollbar-hide md:grid md:grid-cols-4 bg-zinc-950 px-4 md:px-0">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  id={tab.id}
                  activeTab={activeTab}
                  onClick={setActiveTab}
                >
                  {tab.label}
                </TabButton>
              ))}
            </div>
          </div>
        </div>

        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
}