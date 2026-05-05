import { menuDataCreater } from "helpers/menuDataCreater";
import { NavHashLink } from "react-router-hash-link";

export default function Menu({ stagesData }) {
    const menu_data = menuDataCreater(stagesData);

    return (
        <div className="menu">
            <nav>
                <ul className="menu-list">
                    {menu_data.map((link, key) => (
                        <NavHashLink
                            key={key}
                            to={`#${link.id}`}
                            className="menu-link"
                        >
                            {link.name}
                        </NavHashLink>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
