// components/RootWrapper.tsx
'use client'

import BurgerMenu from "@/widgets/modals/BurgerMenuStore/ui/BurgerMenu";
import NotificationList from "../Notification/NotificationList";

export default function ModalWrapperRoot() {
  return (
    <>
      <BurgerMenu/>
      <NotificationList/>
    </>
  )
}
