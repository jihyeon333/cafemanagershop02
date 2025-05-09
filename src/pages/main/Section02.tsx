import styles from "./Main.module.css";
import BestItems from "./BestItems";



export default function Section02() {
    return (
        <section className={styles.section02}>
            <div className={styles.tit}>
                <div className={styles.point}>
                    <span>BEST ITEM</span>
                </div>
                <h4>카페매니저의 베스트 제품을 만나보세요.</h4>
            </div>
            <BestItems />
        </section>
    );
}