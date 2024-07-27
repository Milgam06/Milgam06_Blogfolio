import { db } from "@/apis";

import { getDocs, doc, collection, setDoc, getDoc } from "firebase/firestore";

export interface StoryProps {
  title: string;
  content: string;
}

export interface StoryResponeProps extends StoryProps {
  id: string;
}

export const useStoryStore = () => {
  const getAllStories = async () => {
    const querySnapshot = await getDocs(collection(db, "step"));
    const allStoryResult = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      content: doc.data().content,
    }));
    console.log(typeof allStoryResult, "allStoryResult");
    return allStoryResult;
  };

  /**
   * @param id : id of Step
   */
  const getStory = async (id: string) => {
    const querySnapshot = await getDoc(doc(db, "step", id));
    const storyResult = { id: querySnapshot.id, data: querySnapshot.data() };
    return storyResult;
  };

  /**
   * @param title: title of Step
   * @param content: content of Step
   */
  const addStory = async ({ title, content }: StoryProps) => {
    const lastStoryID = (await getAllStories()).slice(-1)[0].id;
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
  };

  return { getAllStories, getStory, addStory };
};
