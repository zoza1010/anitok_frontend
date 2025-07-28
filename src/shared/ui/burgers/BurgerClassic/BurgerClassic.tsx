import style from './BurgerClassic.module.scss'

type Props = {
  isActive?: boolean;
  onClick?: () => void;
}

const BurgerClassic = ({ isActive = false, onClick }: Props) => {
  return (
    <div
      className={`${style.body} ${isActive ? style.active : ''}`}
      onClick={onClick}
    >
      <span className={style.line}></span>
      <span className={style.line}></span>
      <span className={style.line}></span>
    </div>
  )
}

export default BurgerClassic
