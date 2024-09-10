import { IPost } from "@/interfaces/IPost";
import { IUser } from "@/interfaces/IUser";

export const isFollowingOrOwnPost = (post: IPost, currentUser: IUser) => {
  const { following, username } = currentUser;
  return (
    post.username === username ||
    (following && following.includes(post.username))
  );
};
