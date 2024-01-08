'use strict';

export const imageAssetPrefix = 'assets/images/';

export const defaultGeneralMenu = [
  {
    itemName: 'Dashboard',
    // itemURL: '/dashbaord',
    itemURL: '#',
    iconUrl: imageAssetPrefix + 'user.svg',
    itemId: 'gm1',
    subItem: [
      {
        enabled: true,
        subItemName: 'Sub Dashboard',
        subItemURL: '/dashboard',
        itemId: 'gm1_1',
      },
    ],
  },
  {
    itemName: 'Platforms',
    itemURL: '#',
    iconUrl: imageAssetPrefix + 'campaign.svg',
    itemId: 'gm2',
    subItem: [
      {
        subItemName: 'Sub Platforms',
        subItemURL: '/platform-details',
        itemId: 'gm2_1',
      },
      {
        subItemName: 'Sub 1',
        subItemURL: '#',
        itemId: 'gm2_2',
      },
      {
        subItemName: 'Sub 2',
        subItemURL: '#',
        itemId: 'gm2_3',
      },
    ],
  },
  {
    itemName: 'Bulk Promote',
    itemURL: '/bulk-promote',
    iconUrl: imageAssetPrefix + 'campaign.svg',
    itemId: 'gm3',
  },
];
