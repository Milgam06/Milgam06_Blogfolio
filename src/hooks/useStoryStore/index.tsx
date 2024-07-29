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
      const lastStoryID = (await getAllStories())?.slice(-1)[0].id;
      if (Number(lastStoryID) === 0) {
        await setDoc(doc(db, "step", "1"), {
          title: title,
          content: content,
        });
      } else {
        await setDoc(doc(db, "step", String(Number(lastStoryID) + 1)), {
          title: title,
          content: content,
        });
      }
    } catch (error) {
      console.log("firebaseFuck", error);
    }
  };

  return { getAllStories, getStory, addStory };
};
