import './index.css'

const Filters = props => {
  const {data, type, filterTriggered} = props
  //   console.log(data)
  const onFilterTrigger = e => filterTriggered(e.target.value, type)

  return (
    <select id="language" className="options" onChange={onFilterTrigger}>
      {data.map(item => (
        <option key={item.id}>{item[type]}</option>
      ))}
    </select>
  )
}

export default Filters
