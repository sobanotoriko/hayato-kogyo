import { Metadata } from 'next';
import CompanyContent from './CompanyContent';

export const metadata: Metadata = {
  title: '会社概要 | 隼仁工業',
  description: '長野県を中心に水道工事・設備工事を提供する隼仁工業の会社概要ページです。',
};

export default function CompanyPage() {
  return <CompanyContent />;
}
