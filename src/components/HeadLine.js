import styles from '../styles/Home.module.css'

export function HeadLine(props) {
    return (
        <div>
          <p>
            Get started by editing&nbsp;
            {props.children}
          </p>
        </div>
    );
}
