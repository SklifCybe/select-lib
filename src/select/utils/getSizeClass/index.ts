import { Size } from '@/select/typings';

export enum Classes {
  s = 'heightSmallSize',
  m = 'heightMediumSize',
  l = 'heightLargeSize',
  xl = 'heightExtraLargeSize',
}

export const getSizeClass = (size: Size) => {
  switch (size) {
    case 's':
      return Classes.s;
    case 'm':
      return Classes.m;
    case 'l':
      return Classes.l;
    case 'xl':
      return Classes.xl;
  }
};
