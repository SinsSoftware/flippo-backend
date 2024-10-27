"use client";

import { useUnit } from "effector-react";
import { createPortal } from "react-dom";
import { useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { $notifications, deleteNotification } from "../store/ToastContainerStorage";
import { type TToastContainerProps } from "../types/ToastContainerProps";

import ToastNotification from "./Toast";
import st from "./ToastContainer.module.scss";

const NOTIFICATION_CONTAINER_ID = "notification-container-id";

function ToastNotificationContainer(props: TToastContainerProps) {
  const { toastCountOnScreen } = props;
  const [notificationStore, deleteToast] = useUnit([$notifications, deleteNotification]);

  const onClose = useCallback((id: string) => deleteToast(id), [deleteToast]);

  const notifications = notificationStore.slice(0, toastCountOnScreen).map((notification) => {
    return (
      <motion.div
        key={notification.id}
        layout
        initial={{ opacity: 0, y: 100, scale: 0.7 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7, zIndex: -100 }}
        transition={{ duration: 0.2 }}
      >
        <ToastNotification {...notification} onClose={onClose} />
      </motion.div>
    );
  });

  return (
    <>
      {createPortal(
        <div className={st.portal}>
          <div className={st.container}>
            <AnimatePresence mode={"popLayout"}>{notifications}</AnimatePresence>
          </div>
        </div>,
        document.body,
        NOTIFICATION_CONTAINER_ID
      )}
    </>
  );
}

export default ToastNotificationContainer;
