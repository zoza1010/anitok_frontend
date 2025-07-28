'use client';

import { useState, ReactNode } from 'react';
import Arrow from '@/shared/ui/arrows/Arrow/Arrow';
import style from './DropDownButton.module.scss';

interface DropDownButtonProps {
  title?: ReactNode;
  items: ReactNode[];
  step?: number;
}

const DropDownButton = ({ title = 'Заголовок', items, step = 4 }: DropDownButtonProps) => {
  const [isActive, setActive] = useState(false);
  const [visibleItems, setVisibleItems] = useState(step);

  const toggleDropdown = () => {
    if(visibleItems === 0){
        setVisibleItems(step);
    }
    setActive(!isActive);
  };

  const showMore = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisibleItems(prev => Math.min(prev + step, items.length));
  };

  const showLess = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisibleItems(step);
  };

  const hasMore = visibleItems < items.length;
  const showCollapse = visibleItems > step;

  return (
    <div className={` ${style.body}`}>
      <button
        className={`btn burger-item ${style.title}`}
        onClick={toggleDropdown}
        aria-expanded={isActive}
        aria-controls="dropdown-list"
        type="button"
      >
        <div className={style.text}>{title}</div>
        <div className={`${style.arrow} ${isActive ? style.isActive : ''}`}>
          <Arrow startSide="right" onClickSide="bottom" isActive={isActive} />
        </div>
      </button>

      <div
        id="dropdown-list"
        className={`${style.listWrapper} ${isActive ? style.active : ''}`}
      >
        <ul className={style.list}>
          {items.slice(0, visibleItems).map((item, index) => (
            <li key={index} className={style.item}>
              {item}
            </li>
          ))}
        </ul>

        <div className={style.buttonsWrapper}>
          {hasMore && (
            <button className={style.showMore} onClick={showMore}>
              Показать больше
            </button>
          )}

          {showCollapse && (
            <button className={style.showLess} onClick={showLess}>
              Свернуть
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDownButton;
