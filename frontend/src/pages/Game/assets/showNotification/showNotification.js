import { notificationSkeleton } from "./notificationSkeleton";

export const showNotification = ({ message }) => {
    const elements = document.querySelectorAll(".notification");
    elements.forEach((element) => element.remove());

    let notification = document.createElement("div");
    notification.style.top = "-30px";
    notification.style.left = "50%";
    notification.style.position = "fixed";
    notification.style.zIndex = "1000";
    notification.style.transform = "translate(-50%, 0)";
    notification.style.transition = "top 0.5s ease";

    notification.innerHTML = notificationSkeleton(message);

    setTimeout(() => {
        notification.style.top = "10px";
    }, 10);

    document.body.append(notification);
    setTimeout(() => notification.remove(), 2000);
};
