import './Sidebar.css'
const SidebarIcons = ({active, text, Icon}) => {
    return ( 
        <div className={`sidebar-icon ${active && 'sidebar--active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
     );
}
 
export default SidebarIcons;