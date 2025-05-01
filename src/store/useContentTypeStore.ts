import { create } from 'zustand';

export type IContentType = 'BLOG' | 'PORTFOLIO';
type ISetContentType = ({ contentType }: { contentType: IContentType }) => void;

interface IContentTypeStoreProps {
  contentType: IContentType;
  setContentType: ISetContentType;
}

export const useContentTypeStore = create<IContentTypeStoreProps>((set) => ({
  contentType: 'PORTFOLIO',
  setContentType: () =>
    set(({ contentType }) => ({
      contentType,
    })),
}));
