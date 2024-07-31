import { db } from "@/apis";

import {
  getDocs,
  doc,
  collection,
  setDoc,
  getDoc,
} from "firebase/firestore/lite";

export interface StoryProps {
  title: string;
  content: string;
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
   */
  const addStory = async ({ title, content }: StoryProps) => {
    try {
      const newStoryID = (await getLastID()) + 1;
      await setDoc(doc(db, "step", String(newStoryID)), {
        title: title,
        content: content,
      });
    } catch (error) {
      console.log("firebaseFuck", error);
    }
  };
  const getLastID = async () => {
    const lastStory = (await getAllStories())?.slice(-1)[0];
    const lastStoryID = lastStory ? Number(lastStory.id) : 0;
    return lastStoryID;
  };
  return { getAllStories, getStory, addStory, getLastID };
};
