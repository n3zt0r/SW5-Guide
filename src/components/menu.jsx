import { menuDataCreater } from "helpers/menuDataCreater";

export default function Menu({ stagesData }) {
    const menu_data = menuDataCreater(stagesData);
    console.log(menu_data);
    

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (!element) return;
        element.scrollIntoView({ behavior: "smooth", block: "start"  });
    };

    return (
        <div className="menu">
            <nav>
                <ul className="menu-list">
                    {menu_data.map((link, key) => (
                        <li key={key} href="javascript:void(0)" onClick={() => scrollToSection(link.id)}>
                            {link.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
