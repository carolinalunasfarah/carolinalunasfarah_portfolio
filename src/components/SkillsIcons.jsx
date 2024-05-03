const SkillsIcons = ({ skillsData }) => {
    return (
        <section className="row m-4 skills">
            <h4 className="mb-5 cursor_default">
                {" "}
                <strong>Habilidades específicas</strong>
            </h4>
            {skillsData.map((skill, index) => (
                <article className="col-6 cold-md-6 col-lg-6 col-sm-6" key={index}>
                    <ul className="list-unstyled justif">
                        <li className="flex_col">
                            <img
                                src={skill.icon_src}
                                alt={skill.name}
                            />
                            <p className="mt-3 cursor_default">{skill.name}</p>
                        </li>
                    </ul>
                </article>
            ))}
        </section>
    );
};

export default SkillsIcons;
