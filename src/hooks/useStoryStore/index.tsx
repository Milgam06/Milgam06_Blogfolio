import { db } from "@/apis";

import {
  getDocs,
  doc,
  collection,
  setDoc,
  getDoc,
  deleteDoc,
} from "firebase/firestore/lite";

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

export interface StoryResponeProps extends StoryProps {
  id: string;
}

export const useStoryStore = () => {
  const getAllStories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "step"));
      const allStoryResult: StoryResponeProps[] = querySnapshot.docs.map(
        (doc) => ({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          filesUrl: doc.data().files,
          highlight: doc.data().highlight,
        })
      );
      console.log(typeof allStoryResult, "allStoryResult");
      return allStoryResult;
    } catch (error) {
      console.log("firebaseFuck", error);
      return [];
    }
  };

  /**
   * @param id : id of Step
   */
  const getStory = async (id: string) => {
    try {
      const querySnapshot = await getDoc(doc(db, "step", id));
      console.log(querySnapshot, "query");
      const storyResult: StoryResponeProps = {
        id: querySnapshot.id,
        title: querySnapshot.data()?.title,
        content: querySnapshot.data()?.content,
        filesUrl: querySnapshot.data()?.files,
        highlight: querySnapshot.data()?.highlight,
      };
      console.log(storyResult, "storyResult");
      return storyResult;
    } catch (error) {
      console.log("firebaseFuck", error);
    }
  };

  /**
   * @param title: title of Step
   * @param content: content of Step
   * @param files: files of Step
   * @param highlight: isHighlight of Step
   */
  const addStory = async ({
    title,
    content,
    filesUrl,
    highlight = false,
  }: StoryProps) => {
    try {
      const newStoryID = (await getLastID()) + 1;
      await setDoc(doc(db, "step", String(newStoryID)), {
        title: title,
        content: content,
        files: filesUrl,
        highlight: highlight,
      });
    } catch (error) {
      console.log("firebaseFuck", error);
    }
  };

  /**
   * @param id: id of step
   */
  const removeStory = async (id: string) => {
    try {
      await deleteDoc(doc(db, "step", id));
    } catch (error) {
      console.error("firebaseFuck", error);
    }
  };

  const getLastID = async () => {
    const lastStory = (await getAllStories())?.slice(-1)[0];
    const lastStoryID = lastStory ? Number(lastStory.id) : 0;
    return lastStoryID;
  };

  const getHighlightStories = async () => {
    const storedStories = await getAllStories();
    const HighlightStories = storedStories.filter((story) => story.highlight);
    console.log(HighlightStories, "highlight");
    return HighlightStories;
  };

  return {
    getAllStories,
    getStory,
    addStory,
    removeStory,
    getLastID,
    getHighlightStories,
  };
};
