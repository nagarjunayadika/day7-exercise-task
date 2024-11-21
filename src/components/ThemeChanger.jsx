export default function ThemeChanger({theme,setTheme}) {
    return (
      <div>
        <i
        className={`fa fa-toggle-${theme==="dark"?"off":"on"}`}
        onClick={()=>setTheme(theme==="dark"?"light":"dark")}
        />
      </div>
    )
  }