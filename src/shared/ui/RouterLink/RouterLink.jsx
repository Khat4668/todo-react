import {BASE_URL} from "@/shared/constants";
import styles from './RouterLink.module.scss';

const RouterLink = (props) => {
  const {
    to,
    children,
    ...rest
  } = props

  const handleClick = (event) => {
    event.preventDefault()
    window.history.pushState({}, '', to)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <a
      className={styles.link}
      href={`${BASE_URL}${to}`}
      onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

export default RouterLink
