import CircleIcon from '@mui/icons-material/Circle';
import styles from  "../styles/componentsStyle/CarouselNavigation.module.scss"
import { useState } from 'react';

const CarouselNavigation = ({counts, defaultView, getValue}) => {
    const [active, setActive] = useState(defaultView);

  return (
    <div className={styles.carouselNavigation}>
        {
            [...Array(counts)].map((_,i) => (
                <CircleIcon key={i} className={active === i ? styles.active: ""}  onClick={() => {setActive(i); getValue(i)}} />
            ))
        }
    </div>
  )
}

export default CarouselNavigation;