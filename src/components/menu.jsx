const Menu = ({ stagesData }) => {
    const menu_data = stagesData.flatMap((stage) => [
            {id: stage.id.toLowerCase().replace(/'/g, "").replace(/ /g, "_"),
             name: stage.id
            },
            ...stage.chapters.flatMap((chapter) => [
                chapter.id,
                ...chapter.stages.map((stage) => stage.id),
            ]),
        ]);

        console.log(menu_data)

    return (
        <div>
            <nav className="menu-nav">
                <ul>
                    {menu_data.map(link => (
                    <li>
                        <a href={`#${link.id}`}>{link.name}</a>
                    </li>

                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
