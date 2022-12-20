import { getNotificationsContext } from "svelte-notifications";

const { addNotification } = getNotificationsContext();

export const notify = (text: string, type: string) => {
  addNotification({
    text: text,
    position: "top-center",
    type: type,
    removeAfter: 2000,
  });
};
