'use client'

import Link from 'next/link'
import style from './UserProfile.module.scss'

import { useUserStore } from '../../model/userStore'
import { WrapLongText } from '@/functions/text/WrapLongText'
import { User } from '@/entities/user/model/userType'
import { useBurgerMenuStore } from '@/widgets/modals/BurgerMenuStore/model/BurgerMenuStore'

import {memo} from 'react'

const AVATAR_DEFAULT = '/img/user/avatarDefault.jpg'
const AVATAR_LOGIN = '/img/user/avatarLogin.svg'

const getAvatarSrc = (avatar?: string | null): string => {
  if (!avatar) return AVATAR_DEFAULT
  return avatar.startsWith('/') ? avatar : `/img/user/${avatar}`
}

const UserProfileMobile = () => {
  const user = useUserStore((state) => state.user) as User | null
  const closeBurger = useBurgerMenuStore(state => state.onClose);


  const isAuth = !!user
  const userAvatar = ''


  return (
    <div className={style.body} onClick={closeBurger}>
      {isAuth ? (
        <Link className={`btn burger-item ${style.container}`} href={`/user/${user.id}`}>
          <div className={style.img}>
            <img
              src={getAvatarSrc(userAvatar)}
              alt="User Avatar"
              className={style.avatar}
            />
          </div>
          <p className={style.text}>{WrapLongText(user.name ?? '', 12)}</p>
          
        </Link>
      ) : (
        <Link className={`btn burger-item ${style.container}`} href='/auth'>
          <div className={style.img}>
            <img
              src={AVATAR_LOGIN}
              alt="Вхід / Реєстрація"
              className={style.avatar}
            />
          </div>
          <p className={style.text}>Вход / Регистрация</p>
          
        </Link>
      )}
    </div>
  )
}

export default memo(UserProfileMobile);
