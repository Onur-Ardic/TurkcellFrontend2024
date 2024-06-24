import styles from "./styles.module.css"
import Link from 'next/link'
import Image from 'next/image'

const BlogCard = ({ title, body, reactions, id }) => {
    return (
        <Link href={`${id}`} className={styles.card}>
            <div className={styles.cardImage}>
                <Image src={`https://picsum.photos/200/300?random=${id}`} alt='Blog Card Image' fill />
                {/* <Image src='https://picsum.photos/200/300' alt='Blog Card Image' width={96} height={96} /> */}
            </div>
            <div className={styles.cardBody}>
                <h3 style={{ display: 'flex', justifyContent: 'space-between', marginRight: '5px' }}>{title}
                    <i><small>👍{reactions.likes} 👎{reactions.dislikes}</small></i></h3>
                <p>{body}</p>
            </div>
        </Link>
    )
}

export default BlogCard