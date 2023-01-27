import React, {useState} from 'react'

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  const clickCategories = (index) => {setActiveIndex(index)}
  return (
    <>
      <div className="categories">
        <ul>
          {
            categories.map((item, i) => (
              <li className={activeIndex === i ? 'active' : ''} onClick={() => clickCategories(i)} key={i}>{item}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Categories