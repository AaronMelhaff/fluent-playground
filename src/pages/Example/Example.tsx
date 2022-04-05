import { Button, DoorArrowLeftIcon } from '@fluentui/react-northstar'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface ExampleProps {}

const Example: FC<ExampleProps> = () => {
  return (
    <div className="Home">
      <h1>Example Component</h1>
      <p>This is an example component for the playground to render.</p>

      <Button as={Link} to="/" text>
        <DoorArrowLeftIcon />
        &nbsp;&nbsp; Return home
      </Button>
    </div>
  )
}

export default Example
