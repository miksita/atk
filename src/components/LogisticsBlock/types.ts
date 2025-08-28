import { IconType } from 'react-icons';
export type Tab = 'internationalTransportation' | 'containerService' | 'aboutCompany' | 'behind';

export interface TabButtonProps {
  id: Tab;
  activeTab: Tab;
  onClick: (tab: Tab) => void;
  children: React.ReactNode;
  isLast?: boolean;
}

export interface TabContentProps {
  activeTab: Tab;
}

export interface TabContentData {
  title: string;
  description: string;
  items: string[];
  icon: IconType; 

}