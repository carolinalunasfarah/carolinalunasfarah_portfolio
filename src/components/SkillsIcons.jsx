const SkillsIcons = ({ skillsData }) => {
    return (
        <section className="d-flex m-4 skills_section row">
            <h4 className="list-elements mb-5">
                {" "}
                <strong>Habilidades específicas</strong>
            </h4>
            {skillsData.map((skill, index) => (
                <article className="col col-6" key={index}>
                    <ul className="list-unstyled">
                        <li className="list-elements">
                            <img
                                src={skill.icon_src}
                                alt={skill.name}
                            />
                            <p className="mt-3">{skill.name}</p>
                        </li>
                    </ul>
                </article>
            ))}
        </section>
    );
};

export default SkillsIcons;
