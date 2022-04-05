import { AppsIcon, Button } from '@fluentui/react-northstar'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

interface ComponentRoute {
  name: string
  path: string
}

interface HomeProps {
  routes: ComponentRoute[]
}

const Home: FunctionComponent<HomeProps> = ({ routes }) => {
  return (
    <div className="Home">
      <h1>Fluent Northstar playground</h1>
      <p>
        Add your own components to the components array in <code>App.tsx</code>{' '}
        and they will also show up in the list bellow
      </p>
      <h3>Components</h3>
      {routes.map(({ name, path }) => (
        <Button as={Link} to={path}>
          <AppsIcon />
          &nbsp;&nbsp;
          {name}
        </Button>
      ))}
    </div>
  )
}

export default Home
