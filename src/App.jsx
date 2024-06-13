
import './index.css'
import './App.css'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Radix from './component/radix';
// import * as Dialog from '@radix-ui/react-dialog';
// import * as Popover from '@radix-ui/react-popover';
// import * as Toolbar from '@radix-ui/react-toolbar';


function App() {
  return (
    <div>
      <DropdownMenu.Root>
  <DropdownMenu.Trigger>
    <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">
      Open Dropdown
    </button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Portal>
    <DropdownMenu.Content className="bg-white shadow-lg rounded-md p-2 w-48">
      <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 rounded-md">
        Option 1
      </DropdownMenu.Item>
      <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 rounded-md">
        Option 2
      </DropdownMenu.Item>
      <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 rounded-md">
        Option 3
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Portal>
</DropdownMenu.Root>
<Radix/>

      </div>
  )
}

export default App
