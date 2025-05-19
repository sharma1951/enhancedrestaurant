import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import DishItem from '../components/DishItem'

const Home = () => {
  const [dishes, setDishes] = useState([])
  const [activeTab, setActiveTab] = useState(0)
  const [menuTabs, setMenuTabs] = useState([])

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        'https://run.mocky.io/v3/4d1155f0-3e6e-4d36-8b3e-1b6c1b8b7cf5',
      )
      const data = await response.json()
      setMenuTabs(data[0]?.table_menu_list || [])
      setDishes(data[0]?.table_menu_list[0]?.category_dishes || [])
    }
    fetchMenu()
  }, [])

  const onTabClick = idx => {
    setActiveTab(idx)
    setDishes(menuTabs[idx].category_dishes)
  }

  return (
    <div>
      <Header />
      <div className='menu-tabs'>
        {menuTabs.map((tab, idx) => (
          <button
            key={tab.menu_category_id}
            className={activeTab === idx ? 'active' : ''}
            onClick={() => onTabClick(idx)}
          >
            {tab.menu_category}
          </button>
        ))}
      </div>
      <div className='dish-list'>
        {dishes.map(dish => (
          <DishItem key={dish.dish_id} dish={dish} />
        ))}
      </div>
    </div>
  )
}

export default Home
