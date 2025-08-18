import { db } from '@/apis';

import { getDocs, doc, collection, setDoc, getDoc, deleteDoc } from 'firebase/firestore/lite';
import { useCallback } from 'react';

/**
 * @param title: title of Step
 * @param content: content of Step
 * @param filesUrl: files of Step
 * @param highlight: isHighlight of Step
 */
export interface StoryProps {
  title: string;
  content: string;
  filesUrl: string[];
  highlight?: boolean;
}

export interface StoryResponseProps extends StoryProps {
  id: string;
}

export const useStoryStore = () => {
  const getAllStories = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'step'));
      const allStoryResult: StoryResponseProps[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
        filesUrl: doc.data().files,
        highlight: doc.data().highlight,
      }));

      return allStoryResult;
    } catch (error) {
      console.log('firebase', error);
      return [];
    }
  }, []);

  /**
   * @param id : id of Step
   */
  const getStory = useCallback(async (id: string) => {
    try {
      const querySnapshot = await getDoc(doc(db, 'step', id));

      const storyResult: StoryResponseProps = {
        id: querySnapshot.id,
        title: querySnapshot.data()?.title,
        content: querySnapshot.data()?.content,
        filesUrl: querySnapshot.data()?.files,
        highlight: querySnapshot.data()?.highlight,
      };
      return storyResult;
    } catch (error) {
      console.log('firebase', error);
    }
  }, []);

  /**
   * @param title: title of Step
   * @param content: content of Step
   * @param files: files of Step
   * @param highlight: isHighlight of Step
   */
  const addStory = useCallback(async ({ title, content, filesUrl, highlight = false }: StoryProps) => {
    try {
      const newStoryID = (await getLastID()) + 1;
      await setDoc(doc(db, 'step', String(newStoryID)), {
        title: title,
        content: content,
        files: filesUrl,
        highlight: highlight,
      });
    } catch (error) {
      console.log('firebase', error);
    }
  }, []);

  /**
   * @param id: id of step
   */
  const removeStory = useCallback(async (id: string) => {
    try {
      await deleteDoc(doc(db, 'step', id));
    } catch (error) {
      console.error('firebase', error);
    }
  }, []);

  const getLastID = useCallback(async () => {
    const lastStory = (await getAllStories())?.slice(-1)[0];
    const lastStoryID = lastStory ? Number(lastStory.id) : 0;
    return lastStoryID;
  }, []);

  const getHighlightStories = useCallback(async () => {
    const storedStories = await getAllStories();
    const HighlightStories = storedStories.filter((story) => story.highlight);
    return HighlightStories;
  }, []);

  return {
    getAllStories,
    getStory,
    addStory,
    removeStory,
    getLastID,
    getHighlightStories,
  };
};
