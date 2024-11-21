export default function Menu({handleMenu}) {
    const icons = ['user', 'cloud-download', 'refresh', 'list'];
    return (
      <div className="menu-container">
        {icons.map((icon, index) => (
          <i
            className={`fa fa-${icon}`}
            key={index}
            onClick={()=>handleMenu(icon)}
          />
        ))}
      </div>
    )
  }