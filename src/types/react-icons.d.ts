import * as React from 'react';

declare module 'react-icons' {
  export interface IconBaseProps extends React.SVGProps<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = (props: IconBaseProps) => React.JSX.Element;
}