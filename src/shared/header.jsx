import {hot} from 'react-hot-loader/root'
import * as React from 'react'
import styles from './header.less'

function HeaderComponent() {
  return (
    <header>
      <h2 className={styles.container}>Test2 header 1</h2>
      <h1>Проверка связи</h1>
      <h1>Проверка связи</h1>
      <h2>Test2 header 2</h2>
      <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Ты гор диких языкового переписали, продолжил она решила моей сбить жаренные там рыбными великий? Вскоре океана заглавных он даже ты, она деревни ее, предупреждал своего возвращайся жизни о что образ вопрос страну великий использовало! Свой за большого запятой моей даже!  </p>

      <h1>Проверка</h1>
    </header>
  )
}

export const Header = hot(HeaderComponent)
