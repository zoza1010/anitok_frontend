import style from './Arrow.module.scss';

interface ArrowProps {
  startSide?: 'top' | 'bottom' | 'left' | 'right';
  onClickSide?: 'top' | 'bottom' | 'left' | 'right';
  isActive?: boolean;
  className?: string;
}

const Arrow = ({
  startSide = 'right',
  onClickSide = 'bottom',
  isActive = false,
  className = ''
}: ArrowProps) => {
  return (
    <div className={`${style.arrowContainer} ${className}`}>
      <div
        className={`
          ${style.arrow} 
          ${style[`start_${startSide}`]} 
          ${isActive ? style[`to_${onClickSide}`] : ''}
        `}
      />
    </div>
  );
};

export default Arrow;