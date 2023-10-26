import styles from './styles.module.css'

const Image = ({image}) => {
    return (
        <div className={styles.wrapper}>
            {image ? <img src={image} alt='news_image' className={styles.image}/> : null}
        </div>
    )
}

export default Image;