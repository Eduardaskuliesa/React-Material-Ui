import { MobilelinksGroups } from './mobile/mobile-links-data';

const getActiveLinkGroupTitle = (currentUrl: string) => {
  for (let i = 0; i < MobilelinksGroups.length; i += 1) {
    const linkGroup = MobilelinksGroups[i];
    const hasActiveLink = linkGroup.linksData
      .map<string>(({ link }) => link)
      .includes(currentUrl);
    if (hasActiveLink) return linkGroup.title;
  }
  return null;
};

export default getActiveLinkGroupTitle;
