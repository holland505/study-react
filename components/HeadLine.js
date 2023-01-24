import styles from '@/styles/Home.module.css'

export default function HeadLine(props) {
    console.log(props);
    return (
          <p>
            Get started by editing&nbsp;{props.content}&nbsp;
            <code className={styles.code}>pages/{props.title}.js</code>
          </p>
    );
}
