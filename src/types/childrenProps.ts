export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ParamsProps extends ChildrenProps {
  params: {
    locale: string;
  };
}
