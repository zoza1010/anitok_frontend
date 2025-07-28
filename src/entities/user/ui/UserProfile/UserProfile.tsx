'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import style from './UserProfile.module.scss'

import { useUserStore } from '../../model/userStore'
import { WrapLongText } from '@/functions/text/WrapLongText'
import { User } from '@/entities/user/model/userType'

const AVATAR_DEFAULT = '/img/user/avatarDefault.jpg'
const AVATAR_LOGIN = '/img/user/avatarLogin.svg'

const getAvatarSrc = (avatar?: string | null): string => {
  if (!avatar) return AVATAR_DEFAULT
  return avatar.startsWith('/') ? avatar : `/img/user/${avatar}`
}

const UserProfile = () => {
  const user = useUserStore((state) => state.user) as User | null
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null // не рендерим ничего на сервере

  const isAuth = !!user
  const userAvatar = ''

  return (
    <div className={style.body}>
      {isAuth ? (
        <Link className={`btn ${style.container}`} href={`/user/${user.id}`}>
          <p className={style.text}>{WrapLongText(user.name ?? '', 12)}</p>
          <div className={style.img}>
            <img
              src={getAvatarSrc(userAvatar)}
              alt="User Avatar"
              className={style.avatar}
            />
          </div>
        </Link>
      ) : (
        <Link className={`btn ${style.container}`} href='/auth'>
          <p className={style.text}>Вход / Регистрация</p>
          <div className={style.img}>
            <img
              src={AVATAR_LOGIN}
              alt="Вхід / Реєстрація"
              className={style.avatar}
            />
          </div>
        </Link>
      )}
    </div>
  )
}

export default UserProfile
