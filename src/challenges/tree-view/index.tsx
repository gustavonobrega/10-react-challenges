import MenuList from './menu-list'
import styles from './style.module.css'

const data = [
  {
    label: "Home",
    to: '/'
  },
  {
    label: "Profile",
    to: '/profile',
    children: [
      {
        label: "Details",
        to: '/details',
        children: [
          {
            label: "Location",
            to: '/location',
            children: [
              {
                label: "City",
                to: '/city',
              },
            ]
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: '/settings',
    children: [
      {
        label: "Account",
        to: '/account',
      },
      {
        label: "Security",
        to: '/security',
        children: [
          {
            label: "Login",
            to: '/login',
          },
          {
            label: "Register",
            to: '/register',
          },
        ],
      },
    ],
  },
]

export function TreeView() {
  return (
    <div className={styles.container}>
      <MenuList data={data}/>
    </div>
  )
}

